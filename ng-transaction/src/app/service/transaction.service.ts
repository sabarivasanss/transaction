import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseURL= "http://localhost:8090/api/";

  constructor(private http: HttpClient) { }

  getAllTransction(): Observable<any> {
    return this.http.get(this.baseURL+"transactions");
  }

  getTrasactionById(id:any):Observable<any> {
    return this.http.get(this.baseURL+"transactions/"+id);
  }

  createTransaction(formData:any):Observable<any> {
    return this.http.post(this.baseURL+"transactions", formData);
  }
}
