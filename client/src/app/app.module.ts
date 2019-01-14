import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatExpansionModule,
  MatRadioModule,
  MatSliderModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizdoComponent } from './quiz/quizdo/quizdo.component';
import { QuizresultComponent } from './quiz/quizresult/quizresult.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupDialogComponent } from './home/signup-dialog/signup-dialog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './authentication/auth.service';
import { UserInfoService } from './authentication/userInfo.service';

import {QuizdataService} from './quiz/quizdata.service';
import {CanDeactivateGuard} from './quiz/quizdo/can-deactivate.guard';

import { VoiceCallDialogComponent } from './voice-call-dialog/voice-call-dialog.component';
import { CallRecieveDialogComponent } from './call-recieve-dialog/call-recieve-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupDialogComponent,
    ChatComponent,
    QuizComponent,
    QuizdoComponent,
    QuizresultComponent,
    NotFoundComponent,
    VoiceCallDialogComponent,
    CallRecieveDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatRadioModule,
    MatSliderModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatProgressSpinnerModule,
  ],


  entryComponents: [SignupDialogComponent,CallRecieveDialogComponent,VoiceCallDialogComponent],
  providers: [AuthService,UserInfoService, CanDeactivateGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }
