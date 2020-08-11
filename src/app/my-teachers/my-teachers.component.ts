import { Component, OnInit } from '@angular/core';
import { ManageStudentsService } from '../services/manage-students.service';
import { ManageTeachersService } from '../services/manage-teachers.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-my-teachers',
  templateUrl: './my-teachers.component.html',
  styleUrls: ['./my-teachers.component.css']
})
export class MyTeachersComponent implements OnInit {

  myTeachers = [];

  teachers = [];
  students = [];

  currentStudentCourse: string;

  constructor(
    private authenticationService: AuthenticationService,
    private manageTeachersService: ManageTeachersService,
    private manageStudentsService: ManageStudentsService
  ) { }

  ngOnInit(): void {
    this.initiateMyTeachers();
  }

  initiateMyTeachers() {
    let userEmail = this.authenticationService.getUserEmailFromSession();
    this.teachers = this.manageTeachersService.teachersList;
    this.students = this.manageStudentsService.studentsList;
    for (let i = 0; i < this.students.length; i++) {
      const student = this.students[i];
      if (student.email == userEmail) {
        this.currentStudentCourse = student.occupation;
        break;
      }
    }
    this.teachers.forEach(teacher => {
      if (teacher.occupation == this.currentStudentCourse)
        this.myTeachers.push(teacher);
    });
  }

}
