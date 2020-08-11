import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../classes/student';
import { Teacher } from '../classes/teacher';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  selectedStatus: boolean

  constructor(
    private registrationService: RegistrationService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleRegistration(regisForm: NgForm) {
    let status = regisForm.controls['status'].value;
    if (status == 'student')
      this.registerStudent(regisForm.value);
    else
      this.registerTeacher(regisForm.value);

    this.authenticationService.authenticate(regisForm.value.email, regisForm.value.password);
    this.router.navigate['home'];

    //if (regisForm.controls['status'].value == 'student')

    //regisForm.removeControl['status']
    // regisForm.removeControl['status']
    // console.log(regisForm)


    //let studentsList = this.manageStudentsService.studentsList
    //regisForm.id = studentsList[studentsList.length - 1].id + 1
    //studentsList.push(regisForm)
    //console.log(regisForm)
    //console.log(studentsList)
  }

  registerStudent(student: Student) {
    this.registrationService.registerStudent(student);
  }

  registerTeacher(teacher: Teacher) {
    this.registrationService.registerTeacher(teacher);
  }

}
