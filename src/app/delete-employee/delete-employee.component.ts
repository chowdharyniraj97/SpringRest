import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeServiceService} from "../employee-service.service";

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(private router : ActivatedRoute, private empservice : EmployeeServiceService, private route : Router) { }

  ngOnInit(): void {
    let id = this.router.snapshot.params["id"];
    this.empservice.deleteEmployee(id).subscribe(data =>{
      console.log(data);
      this.route.navigate(["/"])
    },err=> {
      console.log(err.message)
    })

  }

}
