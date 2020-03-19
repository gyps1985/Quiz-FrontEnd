import { FormBuilder, FormGroup } from '@angular/forms';
import { Question } from './model/question';

export class QuestionForm{
    static questionForm(){ return new FormBuilder().group({
        createQuestionCtrl:[''],
        correctAnswerCtrl:[''],
        wrongAnswer1Ctrl:[''],
        wrongAnswer2Ctrl:[''],
        wrongAnswer3Ctrl:['']
    })
}

    static setQuestions(frmGroup: FormGroup){
        let data={
        id:0,
        createQuestion:frmGroup.controls['createQuestionCtrl'].value,
        correctAnswer:frmGroup.controls['correctAnswerCtrl'].value,
        wrongAnswer1:frmGroup.controls['wrongAnswer1Ctrl'].value,
        wrongAnswer2:frmGroup.controls['wrongAnswer2Ctrl'].value,
        wrongAnswer3:frmGroup.controls['wrongAnswer3Ctrl'].value,

        }
        let question:Question=data;
        return question;
    }

    static setQuestionsForm(frmGroup:FormGroup, question:Question){
        frmGroup.controls['createQuestionCtrl'].setValue(question.createQuestion);
        frmGroup.controls['correctAnswerCtrl'].setValue(question.correctAnswer);
        frmGroup.controls['wrongAnswer1Ctrl'].setValue(question.wrongAnswer1);
        frmGroup.controls['wrongAnswer2Ctrl'].setValue(question.wrongAnswer2);
        frmGroup.controls['wrongAnswer3Ctrl'].setValue(question.wrongAnswer3);
    }
}