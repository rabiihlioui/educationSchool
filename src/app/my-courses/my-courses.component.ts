import { Component, OnInit } from '@angular/core';
import { Course } from '../classes/course';
import { AuthenticationService } from '../services/authentication.service';
import { ManageStudentsService } from '../services/manage-students.service';
import { ManageTeachersService } from '../services/manage-teachers.service';
import { ManageCoursesService } from '../services/manage-courses.service';
import { Student } from '../classes/student';
import { Teacher } from '../classes/teacher';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  currentStudent: Student;
  currentTeacher: Teacher;

  myCourses = [];

  constructor(
    private authenticationService: AuthenticationService,
    private manageTeachersService: ManageTeachersService,
    private manageStudentsService: ManageStudentsService,
    private manageCoursesService: ManageCoursesService
  ) { }

  ngOnInit(): void {
    this.initiateMyCourses();
  }

  initiateMyCourses() {
    let userType = this.authenticationService.getUserTypeFromSession();
    let userEmail = this.authenticationService.getUserEmailFromSession();
    if (userType == 'studentUser') {
      this.currentStudent = this.manageStudentsService.getStudentByEmail(userEmail);
      this.manageStudentsService.studentsList.forEach(student => {
        if (this.currentStudent.email == student.email) {
          this.manageCoursesService.coursesList.forEach(course => {
            if (student.occupation == course.course) {
              this.myCourses.push(course);
            }
          });
        }
      });
    }
    else {
      this.manageTeachersService.teachersList.forEach(teacher => {
        if (teacher.email == userEmail) {
          this.manageCoursesService.coursesList.forEach(course => {
            if (teacher.occupation == course.course) {
              this.myCourses.push(course);
            }
          });
        }
      });
    }
  }

}
