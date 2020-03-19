import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../model/question';

@Component({
    selector:'question-view',
    templateUrl:'./questionView.component.html',
    styleUrls:['../question.component.css']
})
export class QuestionViewComponent{

    @Input()
    questions:Question[];

    @Output()
    questionSelected= new EventEmitter<Question>();
    constructor(){}

    selectQuestion=(question:Question)=>{
        this.questionSelected.emit(question);
    }
}