import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatListModule, MatCardModule, MatInputModule, MatToolbarModule, MatDividerModule  } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionService } from './question/question.service';
import { HttpClientModule } from '@angular/common/http';
import { QuestionViewComponent } from './question/questionView/questionView.component';
import { HomeComponent } from './home-component';
import { NavComponent } from './nav-component';
import { QuizComponent } from './question/quiz/quiz-component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent, 
    QuestionViewComponent,
    HomeComponent,
    NavComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatListModule,
    AppRoutingModule,
    MatToolbarModule,
    MatDividerModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
