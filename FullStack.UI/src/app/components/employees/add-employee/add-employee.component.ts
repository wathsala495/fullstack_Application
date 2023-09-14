import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { AddemployeeService } from 'src/app/services/addemployee.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

   addEmployeeRequest: Employee={
        id :'',
        name: '',
       email: '',
       phone:0,
       salary:0,
      department:''
   }

  // formData = {
    
  //   name: '',
  //   email: '',
  //   phone:0,
  //   salary:0,
  //   department:''

  // }

  constructor(private http: HttpClient,private employeeService:EmployeesService ,private router:Router) {}
  ngOnInit(): void {
      
  }

  // sendDataToAPI() {
  //   const dataToSend = { /* Your data object here */ };

  //   this.addemployeeService.sendData(dataToSend).subscribe(
  //     (response) => {
  //       // Handle success response from the API
  //       console.log('Data sent successfully:', response);
  //     },
  //     (error) => {
  //       // Handle error response from the API
  //       console.error('Error sending data:', error);
  //     }
  //   );
  // }
  // onSubmit() {
  //   const apiUrl = 'https://localhost:7256/api/employees'; // Replace with your API URL
  //   const dataToSend = this.formData;

  //   this.http.post(apiUrl, dataToSend).subscribe(
  //     (response) => {
  //       console.log('Data sent successfully:', response);
  //     },
  //     (error) => {
  //       console.error('Error sending data:', error);
  //     }
  //   );
  // }
  addEmplyee(){
    
  console.log(this.addEmployeeRequest)
  this.employeeService.addEmployee(this.addEmployeeRequest)
  .subscribe({
    next:(employee)=>{
      //console.log(employee)
      this.router.navigate(['employees'])

    }
  })

  }

}
