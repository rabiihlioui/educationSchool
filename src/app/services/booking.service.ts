import { Injectable } from '@angular/core';
import { Teacher } from '../classes/teacher';
import { Student } from '../classes/student';
import { ManageTeachersService } from './manage-teachers.service';
import { ManageStudentsService } from './manage-students.service';
import { Course } from '../classes/course';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookingWarning: string;
  student: Student;
  teacher: Teacher;

  studentBookersList = [
    new Student(1, 'Rabii', 'Hlioui', 'rabiihlioui@gmail.com', 'rabiipass', 'Web Developpment', 12345678, 100, '../assets/images/student-01.png'),
    new Student(2, 'Beji', 'Matrix', 'bejimatrix@hotmail.com', 'khantouch123', 'Web Design', 96542381, 45, '../assets/images/student-02.png'),
    new Student(3, 'Sofien', 'Arbi', 'arbi.sofien@gmail.com', 'ArbiSofienXYZ', 'Angular', 78451203, 23, '../assets/images/student-03.png'),
    new Student(4, 'Walid', 'Zamouri', 'zamouri00@yahoo.fr', 'zamouriwd1965', 'JSF', 14875631, 55, '../assets/images/student-04.png')
  ];

  teacherBookersList = [
    new Teacher(1, 'Emilia', 'Clark', 'emiliaclark@gmail.com', 'emilia', 'Web Developpment', 96458712, 50, '../assets/images/team-01.png'),
    new Teacher(2, 'Kristina', 'Black', 'black.kristina@hotmail.com', 'black', 'Web Design', 96458712, 50, '../assets/images/team-02.png'),
    new Teacher(3, 'Steve', 'Thomas', 'thomassteve@yahoo.fr', 'freud', 'Angular', 96458712, 50, '../assets/images/team-03.png'),
    new Teacher(4, 'zeineb', 'Labyedh', 'zeinebLabyedh@gmail.com', 'freud', 'JSF', 96458712, 50, '../assets/images/team-04.png')
  ]

  constructor(
    private manageTeachersService: ManageTeachersService,
    private manageStudentsService: ManageStudentsService,
    private registrationService: RegistrationService
  ) { }

  approveTeacherBooker(teacher: Teacher) {
    let teachers = this.manageTeachersService.teachersList;
    const maxId = Math.max.apply(null, teachers.map(item => item.id));
    teacher.id = maxId + 1;
    teacher.photoPath = "../assets/images/newTeacher.jpg"
    teachers.push(teacher);
    this.teacherBookersList.splice(this.teacherBookersList.indexOf(teacher),1);
  }

  rejectTeacherBooker(teacher: Teacher) {
    this.teacherBookersList.splice(this.teacherBookersList.indexOf(teacher),1)
  }

  approveStudentBooker(student: Student) {
    let students = this.manageStudentsService.studentsList;
    const maxId = Math.max.apply(null, students.map(item => item.id));
    student.id = maxId + 1;
    student.photoPath = "../assets/images/newStudent.jpg";
    students.push(student);
    this.studentBookersList.splice(this.studentBookersList.indexOf(student),1);
  }

  rejectStudentBooker(student: Student) {
    this.studentBookersList.splice(this.studentBookersList.indexOf(student),1);
  }

  bookCourse(course: Course) {
    let userType = sessionStorage.getItem('authenticatedUser');
    let userEmail = sessionStorage.getItem('userEmail');
    if (userType = 'studentUser') {
      for (let i = 0; i < this.manageStudentsService.studentsList.length; i++) {
        const stud = this.manageStudentsService.studentsList[i];
        if (userEmail == stud.email)
          this.bookingWarning = 'You\'ve already booked this course';
        else {
          this.registrationService.registeredStudentsList.forEach(regisStud => {
            if (regisStud.email == userEmail)
              this.student = regisStud;
          });
          this.student.occupation = course.course;
          this.studentBookersList.push(this.student);
          break;
        }
      }
    }
    else {
      for (let i = 0; i < this.manageTeachersService.teachersList.length; i++) {
        const teach = this.manageTeachersService.teachersList[i];
        if (userEmail == teach.email)
          this.bookingWarning = 'You\'ve already booked this course';
        else {
          this.registrationService.registeredTeachersList.forEach(regisTeach => {
            if (regisTeach.email == userEmail)
              this.teacher = regisTeach;
          });
          this.teacher.occupation = course.course;
          this.teacherBookersList.push(this.teacher);
          break;
        }
      }
    }
  }

}
