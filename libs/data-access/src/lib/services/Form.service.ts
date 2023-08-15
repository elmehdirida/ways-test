import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Form } from '../models/Form.model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  ApiForms = 'http://localhost:3000/form';

  constructor(private http: HttpClient) {}

  getForms(): Observable<Form[]> {
    return this.http.get<Form[]>(this.ApiForms);
  }
  addForm(Form: Form): Observable<Form> {
    return this.http.post<Form>(this.ApiForms, Form);
  }

  getFormById(id: number): Observable<Form> {
    return this.http.get<Form>(this.ApiForms + '/' + id);
  }
  updateForm(form: Form): Observable<Form> {
    return this.http.put<Form>(this.ApiForms + '/' + form.id, form);
  }
}
