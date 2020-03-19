import { Component, OnInit } from "@angular/core";
import { QuestionService } from './question.service';
import { FormGroup } from '@angular/forms';
import { QuestionForm } from './questionForm';
import { Question } from './model/question';

@Component({
    selector:'question',
    templateUrl:'./question.component.html',
    styleUrls:['./question.component.css']
})
export class QuestionComponent implements OnInit{
    status:string;
    question:string='';
    questions:Question[]=[];
    questionGroup: FormGroup;
    selectedId:number;

    constructor(private questionService:QuestionService){}

    post=()=>{
        const postSuccess=()=>{
            this.questionService.getQuestion().subscribe(
                (data)=>{
                    this.questions = data;
                })
                this.newQuestiion();
        };
        let saveQuestion=QuestionForm.setQuestions(this.questionGroup);
        if(this.status==="Update")
        {
            saveQuestion.id=this.selectedId;
            this.questionService.putQuestion(saveQuestion).subscribe(postSuccess)
        }
        else
        this.questionService.postQuestion(saveQuestion).subscribe(postSuccess);
    }

    ngOnInit(){
        this.questionGroup= QuestionForm.questionForm();
    }

    showSelectedQuestion(question:Question){
      this.status="Update";
      this.selectedId = question.id;
      QuestionForm.setQuestionsForm(this.questionGroup,question);
    }

    newQuestiion(){
        this.questionGroup.reset();
        this.status="New";
    }
}