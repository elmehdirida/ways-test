import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Letter } from '../models/Letter.model';

@Injectable({
  providedIn: 'root'
})
export class LetterService {
    ApiLetters = "http://localhost:3000/letters";

  constructor(private http : HttpClient) { }

    getletters() : Observable<Letter[]>{
    return this.http.get<Letter[]>(this.ApiLetters);
  }

    getletter(id : number) : Observable<Letter>{
    return this.http.get<Letter>(this.ApiLetters + "/" + id);   
    }

    addletter(letter : Letter) : Observable<Letter>{
    return this.http.post<Letter>(this.ApiLetters, letter);
    }
    
    updateletter(letter : Letter) : Observable<Letter>{
    return this.http.put<Letter>(this.ApiLetters + "/" + letter.id, letter);
    }
}