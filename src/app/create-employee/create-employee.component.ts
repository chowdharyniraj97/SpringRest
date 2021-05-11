import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeServiceService} from "../employee-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee : Employee = new Employee();
  constructor(private employeeService : EmployeeServiceService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.employeeService.addEmployee(this.employee).subscribe(data => {
      this.router.navigate(["/employees"]);
    }, error => {
      console.log(error)
    })

  }
}
