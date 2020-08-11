import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Teacher } from '../classes/teacher';
import { Student } from '../classes/student';

@Component({
  selector: 'app-bookers',
  templateUrl: './bookers.component.html',
  styleUrls: ['./bookers.component.css']
})
export class BookersComponent implements OnInit {

  teachersBookersFlag: boolean;
  studentsBookersFlag: boolean;
  activeTeachersTab: boolean;
  activeStudentsTab: boolean;

  teacherBookersList = [];
  studentBookersList = [];

  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    this.teachersBookersFlag = false;
    this.studentsBookersFlag = false;
    this.activeTeachersTab = false;
    this.activeStudentsTab = false;
    this.initiateBookersList();
  }

  displayTeachers() {
    this.teachersBookersFlag = true;
    this.studentsBookersFlag = false;
    this.activeTeachersTab = true;
    this.activeStudentsTab = false;
  }

  displayStudents() {
    this.studentsBookersFlag = true;
    this.teachersBookersFlag = false;
    this.activeStudentsTab = true;
    this.activeTeachersTab = false;
  }

  initiateBookersList() {
    this.teacherBookersList = this.bookingService.teacherBookersList;
    this.studentBookersList = this.bookingService.studentBookersList;
  }

  approveTeacherBooker(teacher: Teacher) {
    this.bookingService.approveTeacherBooker(teacher);
  }
  
  rejectTeacherBooker(teacher: Teacher) {
    this.bookingService.rejectTeacherBooker(teacher);
  }

  approveStudentBooker(student: Student) {
    this.bookingService.approveStudentBooker(student);
  }
  
  rejectStudentBooker(student: Student) {
    this.bookingService.rejectStudentBooker(student);
  }

}
