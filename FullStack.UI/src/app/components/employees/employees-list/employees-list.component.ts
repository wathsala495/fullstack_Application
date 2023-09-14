import { Component, OnInit ,Input} from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
    
  employees:Employee[] = [];
  @Input() recordId!: number;

  constructor(private dataService: EmployeesService) { }

  ngOnInit(): void {
    
    // this.dataService.getAllEmployees().subscribe((response:any[]) => {
    //   this.employees = response;
    //   console.log("employees:"+this.employees)
    // });
    this.dataService.getAllEmployees().subscribe({
      next:(employees)=>{
        this.employees = employees
        console.log(employees)
      },
      error:(response)=>{
        console.log(response)
      }
    })
  }
    
  
    
    
}

