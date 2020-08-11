import { Injectable } from '@angular/core';
import { Teacher } from '../classes/teacher';
import { Student } from '../classes/student';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  registeredStudentsList = [
    new Student(1, 'Marwen', 'Hlioui', 'marwenhlioui@gmail.com', 'marwenpass', '', 96325678, 50),
    new Student(1, 'Rabii', 'Hlioui', 'rabiihlioui@gmail.com', 'rabiipass', '', 12345678, 100, '../assets/images/student-01.png'),
    new Student(2, 'Beji', 'Matrix', 'bejimatrix@hotmail.com', 'khantouch123', '', 96542381, 45, '../assets/images/student-02.png'),
    new Student(3, 'Sofien', 'Arbi', 'arbi.sofien@gmail.com', 'ArbiSofienXYZ', '', 78451203, 23, '../assets/images/student-03.png'),
    new Student(4, 'Walid', 'Zamouri', 'zamouri00@yahoo.fr', 'zamouriwd1965', '', 14875631, 55, '../assets/images/student-04.png')
  ]

  registeredTeachersList = [
    new Teacher(1, 'Fou', 'Chika', 'fouchika@gmail.com', 'nasba', '', 96458712, 50),
    new Teacher(1, 'Emilia', 'Clark', 'emiliaclark@gmail.com', 'emilia', '', 96458712, 50, '../assets/images/team-01.png'),
    new Teacher(2, 'Kristina', 'Black', 'black.kristina@hotmail.com', 'black', '', 96458712, 50, '../assets/images/team-02.png'),
    new Teacher(3, 'Steve', 'Thomas', 'thomassteve@yahoo.fr', 'freud', '', 96458712, 50, '../assets/images/team-03.png'),
    new Teacher(4, 'zeineb', 'Labyedh', 'zeinebLabyedh@gmail.com', 'freud', '', 96458712, 50, '../assets/images/team-04.png')
  ]

  constructor() { }

  registerStudent(student: Student) {
    student.id = this.registeredStudentsList[this.registeredStudentsList.length - 1].id + 1;
    this.registeredStudentsList.push(student)
  }

  registerTeacher(teacher: Teacher) {
    teacher.id = this.registeredTeachersList[this.registeredTeachersList.length - 1].id + 1;
    this.registeredTeachersList.push(teacher)
  }

}
