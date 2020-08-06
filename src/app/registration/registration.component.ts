import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManageStudentsService } from '../services/manage-students.service';
import { Student } from '../classes/student';
import { ManageTeachersService } from '../services/manage-teachers.service';
import { Teacher } from '../classes/teacher';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  selectedStatus: boolean

  constructor(
    private manageStudentsService: ManageStudentsService,
    private manageTeachersService: ManageTeachersService,
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
    student.id = this.manageStudentsService.studentsList[this.manageStudentsService.studentsList.length - 1].id + 1;
    this.manageStudentsService.studentsList.push(student)
  }

  registerTeacher(teacher: Teacher) {
    teacher.id = this.manageTeachersService.teachersList[this.manageTeachersService.teachersList.length - 1].id + 1;
    this.manageTeachersService.teachersList.push(teacher)
  }

}
