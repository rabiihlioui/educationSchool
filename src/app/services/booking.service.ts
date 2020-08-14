import { Injectable } from '@angular/core';
import { Teacher } from '../classes/teacher';
import { Student } from '../classes/student';
import { ManageTeachersService } from './manage-teachers.service';
import { ManageStudentsService } from './manage-students.service';
import { Course } from '../classes/course';
import { RegistrationService } from './registration.service';
import { AuthenticationService } from './authentication.service';
import { ManageCoursesService } from './manage-courses.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookingWarning: string;
  student: Student;
  teacher: Teacher;

  studentBookersList = [
    new Student(1, 'Rabii', 'Hlioui', 'rabiihlioui@gmail.com', 'rabiipass', 'Programming', 12345678, 100, '../assets/images/student-01.png'),
    new Student(2, 'Beji', 'Matrix', 'bejimatrix@hotmail.com', 'khantouch123', 'Art & Design', 96542381, 45, '../assets/images/student-02.png'),
    new Student(3, 'Sofien', 'Arbi', 'arbi.sofien@gmail.com', 'ArbiSofienXYZ', 'Humanities', 78451203, 23, '../assets/images/student-03.png'),
    new Student(4, 'Walid', 'Zamouri', 'zamouri00@yahoo.fr', 'zamouriwd1965', 'Business', 14875631, 55, '../assets/images/student-04.png')
  ];

  teacherBookersList = [
    new Teacher(1, 'Emilia', 'Clark', 'emiliaclark@gmail.com', 'emilia', 'Computer Science', 96458712, 50, '../assets/images/team-01.png'),
    new Teacher(2, 'Kristina', 'Black', 'black.kristina@hotmail.com', 'black', 'Programming', 96458712, 50, '../assets/images/team-02.png'),
    new Teacher(3, 'Steve', 'Thomas', 'thomassteve@yahoo.fr', 'freud', 'Humanities', 96458712, 50, '../assets/images/team-03.png'),
    new Teacher(4, 'zeineb', 'Labyedh', 'zeinebLabyedh@gmail.com', 'freud', 'Health & Medicine', 96458712, 50, '../assets/images/team-04.png')
  ]

  constructor(
    private manageTeachersService: ManageTeachersService,
    private manageStudentsService: ManageStudentsService,
    private registrationService: RegistrationService,
    private authenticationService: AuthenticationService,
    private manageCoursesService: ManageCoursesService
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
    let userType = this.authenticationService.getUserTypeFromSession();
    let userEmail = this.authenticationService.getUserEmailFromSession();
    if (userType == 'studentUser') {
      this.registrationService.registeredStudentsList.forEach(regisStud => {
        if (regisStud.email == userEmail)
          this.student = new Student(regisStud.id,regisStud.firstname, regisStud.lastname, regisStud.email,regisStud.password,regisStud.occupation,regisStud.cin, regisStud.age,regisStud.photoPath);
      });
      this.student.occupation = course.course;
      this.studentBookersList.push(this.student);
      this.bookedCourse(course);
    }
    else {
      this.registrationService.registeredTeachersList.forEach(regisTeach => {
        if (regisTeach.email == userEmail)
          this.teacher = new Teacher(regisTeach.id,regisTeach.firstname, regisTeach.lastname, regisTeach.email,regisTeach.password,regisTeach.occupation,regisTeach.cin, regisTeach.age,regisTeach.photoPath);
      });
      this.teacher.occupation = course.course;
      this.teacherBookersList.push(this.teacher);
      this.bookedCourse(course);
    }
  }

  bookedCourse(course: Course) {
    let userType = this.authenticationService.getUserTypeFromSession();
    let userEmail = this.authenticationService.getUserEmailFromSession();
    if (userType == 'studentUser') {
      this.studentBookersList.forEach(student => {
        if (userEmail == student.email) {
          if (course.course == student.occupation) {
            course.bookedMsg = 'Booked';
          }
        }
      });
      this.manageStudentsService.studentsList.forEach(student => {
        if (userEmail == student.email) {
          if (course.course == student.occupation) {
            course.bookedMsg = 'Studying';
          }
        }
      });
    }
    else {
      this.teacherBookersList.forEach(teacher => {
        if (userEmail == teacher.email) {
          if (course.course == teacher.occupation) {
            course.bookedMsg = 'Booked';
          }
        }
      });
      this.manageTeachersService.teachersList.forEach(teacher => {
        if (userEmail == teacher.email) {
          if (course.course == teacher.occupation) {
            course.bookedMsg = 'Teaching';
          }
        }
      });
    }
  }

  unbookUsersCourses() {
    this.manageCoursesService.coursesList.forEach(course => {
      course.bookedMsg = '';
    });
  }

}
