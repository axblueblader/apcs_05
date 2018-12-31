import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.css']
})

export class SignupDialogComponent implements OnInit {

  phoneIn = new FormControl('', [Validators.required]);
  passwordIn = new FormControl('', [Validators.required]);

  usernameUp = new FormControl('', [Validators.required]);
  phoneUp = new FormControl('', [Validators.required]);
  passwordUp = new FormControl('', [Validators.required]);
  genderUp = new FormControl('',[Validators.required]);

  constructor(public dialogRef: MatDialogRef<SignupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService) { }

  ngOnInit() {
  }

  getErrorMessagePhoneIn() {
    return this.phoneIn.hasError('required') ? 'Enter phone number' : '';
  }

  getErrorMessagePasswordIn() {
    return this.phoneIn.hasError('required') ? 'Enter password' : '';
  }

  getErrorMessageUsernameUp() {
    return this.usernameUp.hasError('required') ? 'Enter username' : '';
  }

  getErrorMessagePhoneUp() {
    return this.phoneUp.hasError('required') ? 'Enter phone number' : '';
  }

  getErrorMessagePasswordUp() {
    return this.phoneUp.hasError('required') ? 'Enter password' : '';
  }

  onAccessAccount() {
    if (this.phoneIn.invalid || this.passwordIn.invalid) {
      return console.log('Not enough Sign In information');
    } else {
      const enteredValuesIn = {
        enteredPhonenumber: this.phoneIn.value,
        enteredPassword: this.passwordIn.value
      };

      // Sign in using userInfoService
      // user info are stored in userInfoService
      let signInData = {
        userPhone: this.phoneIn.value,
        userPass: this.passwordIn.value
      }

      this.authService.requestSignIn(signInData)
        .subscribe(
          (data: any) => {
            console.log("POST Request is successful ", data);
            if (data.Token != null) {
              this.dialogRef.close(data);
            }
            else {
              alert ("User phone or password is wrong");
            }
          },
          error => {
            console.log("Error", error);
          }
        );

    }
  }

  onCreateAccount() {
    if (this.usernameUp.invalid || this.phoneUp.invalid || this.passwordUp.invalid || this.genderUp.invalid) {
      return console.log('Not enough Sign Up information');
    } else {
      const enteredValuesUp = {
        enteredUsername: this.usernameUp.value,
        enteredPhonenumber: this.phoneUp.value,
        enteredPassword: this.passwordUp.value,
        enteredGender: this.genderUp.value
      };

      let signUpData = {
        userName: this.usernameUp.value,
        userPhone: this.phoneUp.value,
        userPass: this.passwordUp.value,
        userGender: this.genderUp.value
      }

      this.authService.requestSignUp(signUpData)
        .subscribe(
          (data: any) => {
            console.log("PUT Request is successful ", data);
            if (data.Status == "Sign up successfully") {
              alert("Sign up successful, you can now sign in with new account");
              //this.dialogRef.close(data);
            }
            else {
              alert ("Sign up unsuccessful");
            }
          },
          error => {
            console.log("Error", error);
          }
        );
    }
  }
}
