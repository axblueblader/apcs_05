import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-call-recieve-dialog',
  templateUrl: './call-recieve-dialog.component.html',
  styleUrls: ['./call-recieve-dialog.component.css']
})
export class CallRecieveDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CallRecieveDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  action(value: string){
    this.dialogRef.close(value);
  }
}
