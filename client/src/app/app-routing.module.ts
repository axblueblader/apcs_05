import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {QuizComponent} from './quiz/quiz.component';
import {ChatComponent} from './chat/chat.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {QuizdoComponent} from './quiz/quizdo/quizdo.component';
import {QuizresultComponent} from './quiz/quizresult/quizresult.component';
import {CanDeactivateGuard} from './quiz/quizdo/can-deactivate.guard';


const routes: Routes = [
    {path: '', component: HomeComponent,
    pathMatch: 'full'},
    {path: 'quiz', component: QuizComponent, children: [
            {path: 'do', component: QuizdoComponent, canDeactivate: [CanDeactivateGuard]},
            {path: 'result', component: QuizresultComponent}
        ]},
    {path: 'chat', component: ChatComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
