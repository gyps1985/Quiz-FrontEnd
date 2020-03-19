import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home-component';
import { QuestionComponent } from './question/question.component';
import { QuizComponent } from './question/quiz/quiz-component';


const routes=[
  { path: '', component:HomeComponent},
  { path:'question', component:QuestionComponent },
  { path:'quiz', component : QuizComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
