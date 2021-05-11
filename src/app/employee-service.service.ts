import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

    private baseUrl = "http://localhost:8080/api/v1/employees"
  constructor(private httpClient : HttpClient) { }

  getEmployeesList() : Observable<Employee[]> {
       return this.httpClient.get<Employee[]>(`${this.baseUrl}`);

  }

  addEmployee(employee : Employee) : Observable<any> {
      return this.httpClient.post(`${this.baseUrl}`,employee)
  }

  getEmployeeById(id : number) : Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`)
  }

  updateEmployee(employee : Employee, id : number) : Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`,employee)
  }
}
