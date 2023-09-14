import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddemployeeService {
   
 // private apiUrl ='https://localhost:7256/api/employees'
  constructor( private http: HttpClient) { }

  sendData(data: any) {
    return this.http.post(`https://localhost:7256/api/employees`, data);
  }
}
