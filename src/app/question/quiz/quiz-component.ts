import { Component, OnInit } from "@angular/core";
import { FormGroup } from '@angular/forms';
import { QuizForm } from './quizForm';

@Component({
    selector:"quiz",
    templateUrl:"./quiz-component.html"
})

export class QuizComponent implements OnInit{
    quizForm:FormGroup;
    constructor(){}

    ngOnInit(){
       this.quizForm=QuizForm.quizForm();
    }
}