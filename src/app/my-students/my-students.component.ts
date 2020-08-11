import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ManageTeachersService } from '../services/manage-teachers.service';
import { ManageStudentsService } from '../services/manage-students.service';

@Component({
  selector: 'app-my-students',
  templateUrl: './my-students.component.html',
  styleUrls: ['./my-students.component.css']
})
export class MyStudentsComponent implements OnInit {

  myStudents = [];

  teachers = [];
  students = [];

  currentTeacherCourse: string;

  constructor(
    private authenticationService: AuthenticationService,
    private manageTeachersService: ManageTeachersService,
    private manageStudentsService: ManageStudentsService
  ) { }

  ngOnInit(): void {
    this.initiateMyStudents();
  }

  initiateMyStudents() {
    let userEmail = this.authenticationService.getUserEmailFromSession();
    this.teachers = this.manageTeachersService.teachersList;
    this.students = this.manageStudentsService.studentsList;
    for (let i = 0; i < this.teachers.length; i++) {
      const teacher = this.teachers[i];
      if (teacher.email == userEmail) {
        this.currentTeacherCourse = teacher.occupation;
        break;
      }
    }
    this.students.forEach(student => {
      if (student.occupation == this.currentTeacherCourse)
        this.myStudents.push(student);
    });
  }

}
