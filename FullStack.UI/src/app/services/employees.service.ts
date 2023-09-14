import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private apiUrl = 'https://localhost:7256/api/employees';

  constructor( private http: HttpClient) { }

  getAllEmployees(): Observable<any> {
    const apiUrl = 'https://localhost:7256/api/employees'; // Replace with your API endpoint
    return this.http.get(apiUrl);
  }
  addEmployee(addEmployeeRequest:Employee): Observable<Employee>{
    addEmployeeRequest.id ='00000000-0000-0000-0000-000000000000'
    const apiUrl = 'https://localhost:7256/api/employees';
    return this.http.post<Employee>(apiUrl,addEmployeeRequest);
  }
  getEmployee(id:string):Observable<Employee>{
    const apiUrl = 'https://localhost:7256/api/employees/';
    return this.http.get<Employee>( apiUrl + id); 
  }
  // updateEmployee(id: number, profileData: any): Observable<any> {
  //   //const apiUrl = 'https://localhost:7256/api/employees';
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.put(url, profileData);
  // }
  updateEmployee(id :string,updateEmployeeRequest: Employee): Observable<Employee> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Employee>(url,updateEmployeeRequest)
  }
  deleteEmployee(id: string): Observable<Employee> {
    const apiUrl = 'https://localhost:7256/api/employees';
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Employee>(url);
  }
  
}
