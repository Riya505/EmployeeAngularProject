import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor() { }

  employeeCode=""
  employeeName=""
  designation=""
  gender=""
  companyName=""
  salary=""
  companyAddress=""
  mobile=""
  companyEmail=""
  yearofExprience=""
  bloodGroup=""
  dateOfBirth=""

  readValues=()=>{
    let data={
      "employeeCode":this.employeeCode,
  "employeeName":this.employeeName,
  "designation":this.designation,
  "gender":this.gender,
  "companyName":this.companyName,
  "salary":this.salary,
  "companyAddress":this.companyAddress,
  "mobile":this.mobile,
  "companyEmail":this.companyEmail,
  "yearofExprience":this.yearofExprience,
  "bloodGroup":this.bloodGroup,
  "dateOfBirth":this.dateOfBirth
    }
    console.log(data)
  }
  ngOnInit(): void {
  }

}
