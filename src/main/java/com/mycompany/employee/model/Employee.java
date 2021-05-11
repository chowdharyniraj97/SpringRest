package com.mycompany.employee.model;

import javax.persistence.*;

@Entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email_id")
    private String emailid;

    public Employee() {

    }
    public Employee(String firstName, String lastName, String emailid) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailid = emailid;
    }


    public long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setId(long id) {
        this.id = id;
    }



    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public void setId(Long id) {
        this.id = id;
    }


}
