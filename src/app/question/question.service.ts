import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Question } from './model/question';

@Injectable()
export class QuestionService{
 constructor(public http: HttpClient){}

 postQuestion=(question:Question)=>{
     return this.http.post('https://localhost:5001/api/questions',question).pipe(
    map(result=>{result})
  )
 }

 putQuestion=(question:Question)=>{
  return this.http.put(`https://localhost:5001/api/questions/${question.id}`, question).pipe(
    map(result=>{result}))
 }

 getQuestion= ():Observable<Question[]>  => {
   return this.http.get<Question[]>('https://localhost:5001/api/questions').pipe(
     tap(result=> {return result as Question[];})
   );
 }
}