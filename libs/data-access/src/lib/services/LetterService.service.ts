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

}