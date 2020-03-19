import { FormBuilder } from '@angular/forms';

export class QuizForm{
    static quizForm(){
        return new FormBuilder().group({
            quizTitleCtrl:[]
        }
        )
    }
}