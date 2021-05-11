import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeServiceService} from "../employee-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee : Employee = new Employee();
  id : number
  constructor(private emlService : EmployeeServiceService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data =>{
      this.id = data['id']
    })


    this.emlService.getEmployeeById(this.id).subscribe(data =>{
      console.log(data)
      this.employee = data
    }, err => {
      console.log(err)
    })





  }

  onSubmit() {
    this.emlService.updateEmployee(this.employee,this.id).subscribe(data => {
      this.router.navigate(["/"])
    })
  }
}
