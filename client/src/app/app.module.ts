import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatExpansionModule,
  MatRadioModule,
  MatSliderModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupDialogComponent,
    ChatComponent,
    QuizComponent,
    QuizdoComponent,
    QuizresultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatRadioModule,
    MatSliderModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [SignupDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
