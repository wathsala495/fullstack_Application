import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
 
  employeedetails: Employee={
    id :'',
    name: '',
   email: '',
   phone:0,
   salary:0,
  department:''
};
  userId:number=0;
 
  constructor(private route:ActivatedRoute,private employeeService:EmployeesService ,private router:Router){}

  ngOnInit():void{

    this.userId = this.route.snapshot.params['id']; 

    this.route.paramMap.subscribe({
      next:(params)=>{
       const id= params.get('id');
       if(id){
        //call api
        this.employeeService.getEmployee(id)
        .subscribe({
          next:(response)=>{
            this.employeedetails= response;
            console.log("data:"+this.employeedetails);
          }
        })
       }
      }
    })
  }
  updateEmployee():void{
  
    // Send an HTTP PUT request to update the profile
    this.employeeService.updateEmployee(this.employeedetails.id, this.employeedetails).subscribe({
      next:(response)=>{
        this.router.navigate(['employees']);
      }
    }
      
    );
    
  }
  deleteEmployee(id: string): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.employeeService.deleteEmployee(id).subscribe(
        {
          next:(response)=>{
            this.router.navigate(['employees']) 
          }
        }
      );
    }
  }
}
