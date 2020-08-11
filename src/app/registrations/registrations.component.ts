import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.css']
})
export class RegistrationsComponent implements OnInit {

  teachersRegistrationsFlag: boolean;
  studentsRegistrationsFlag: boolean;
  activeTeachersTab: boolean;
  activeStudentsTab: boolean;

  teacherRegistrationsList = [];
  studentRegistrationsList = [];

  constructor(
    private registrationService: RegistrationService
  ) { }

  ngOnInit(): void {
    this.teachersRegistrationsFlag = false;
    this.studentsRegistrationsFlag = false;
    this.activeTeachersTab = false;
    this.activeStudentsTab = false;
    this.initiateRegistrationsList();
  }

  displayTeachers() {
    this.teachersRegistrationsFlag = true;
    this.studentsRegistrationsFlag = false;
    this.activeTeachersTab = true;
    this.activeStudentsTab = false;
  }

  displayStudents() {
    this.studentsRegistrationsFlag = true;
    this.teachersRegistrationsFlag = false;
    this.activeStudentsTab = true;
    this.activeTeachersTab = false;
  }

  initiateRegistrationsList() {
    this.teacherRegistrationsList = this.registrationService.registeredTeachersList;
    this.studentRegistrationsList = this.registrationService.registeredStudentsList;
  }

}
