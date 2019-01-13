import {Component, ElementRef, Inject, OnInit} from '@angular/core';
import {$} from "protractor";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";



@Component({
  selector: 'app-voice-call-dialog',
  templateUrl: './voice-call-dialog.component.html',
  styleUrls: ['./voice-call-dialog.component.css']
})
export class VoiceCallDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VoiceCallDialogComponent>,
    private elementRef: ElementRef,
    @Inject(MAT_DIALOG_DATA) public data: any){}

    ngOnInit(){}

  }
