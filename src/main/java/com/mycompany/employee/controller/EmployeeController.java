package com.mycompany.employee.controller;

import com.mycompany.employee.exception.ResourceNotFoundException;
import com.mycompany.employee.model.Employee;
import com.mycompany.employee.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
    @Autowired
     private EmployeeRepository employeeRepository;


    //get all Employee

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    //create employee rest api
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Employee e =  employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee with " +id+" not found"));
        return ResponseEntity.ok(e);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable  Long id,  @RequestBody Employee emp) {
        Employee e =  employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee with " +id+" not found"));

        e.setFirstName(emp.getFirstName());
        e.setEmailid(emp.getEmailid());
        e.setLastName(emp.getLastName());
        Employee updatedEmployee = employeeRepository.save(e);
        return ResponseEntity.ok(updatedEmployee);
    }
}
