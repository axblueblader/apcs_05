import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.css']
})
export class SignupDialogComponent implements OnInit {
  enteredPhonenumber1 = '';
  enteredPassword1 = '';

  enteredUsername2 = '';
  enteredPhonenumber2 = '';
  enteredPassword2 = '';
  constructor(public dialogRef: MatDialogRef<SignupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onAccessAccount() {
      const enteredValues1 = {
      enteredPhonenumber: this.enteredPhonenumber1,
      enteredPassword: this.enteredPassword1
    };
    this.dialogRef.close(enteredValues1);
  }

  onCreateAccount() {
      const enteredValues2 = {
      enteredUsername: this.enteredUsername2,
      enteredPhonenumber: this.enteredPhonenumber2,
      enteredPassword: this.enteredPassword2
    };
    this.dialogRef.close(enteredValues2);
  }

}
