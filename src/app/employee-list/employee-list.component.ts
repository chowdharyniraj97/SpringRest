import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeServiceService} from "../employee-service.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees : Employee[];
  constructor(private employeeService : EmployeeServiceService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      console.log(data)
      this.employees = data
    }, err =>{
      console.log(err)
    })
  }
}
