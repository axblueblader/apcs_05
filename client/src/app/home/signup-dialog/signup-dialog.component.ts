import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

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

  constructor(public dialogRef: MatDialogRef<SignupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onAccessAccount() {
      const enteredValuesIn = {
      enteredPhonenumber: this.phoneIn.setValue('enteredPhonenumberIn'),
      enteredPassword: this.passwordIn.setValue('enteredPasswordIn')
    };
    this.dialogRef.close(enteredValuesIn);
  }

  onCreateAccount() {
      const enteredValuesUp = {
      enteredUsername:  this.usernameUp.setValue('enteredPhonenumberUp'),
      enteredPhonenumber: this.phoneUp.setValue('enteredPhonenumberUp'),
      enteredPassword: this.passwordUp.setValue('enteredPasswordUp')
    };
    this.dialogRef.close(enteredValuesUp);
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
}
