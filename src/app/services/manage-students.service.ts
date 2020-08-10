import { Injectable } from '@angular/core';
import { Student } from '../classes/student';

@Injectable({
  providedIn: 'root'
})
export class ManageStudentsService {

  studentsList = [
    new Student(1, 'Rabii', 'Hlioui', 'rabiihlioui@gmail.com', 'rabiipass', 'Web Developpment', 12345678, 100, '../assets/images/student-01.png'),
    new Student(2, 'Beji', 'Matrix', 'bejimatrix@hotmail.com', 'khantouch123', 'Web Design', 96542381, 45, '../assets/images/student-02.png'),
    new Student(3, 'Sofien', 'Arbi', 'arbi.sofien@gmail.com', 'ArbiSofienXYZ', 'Angular', 78451203, 23, '../assets/images/student-03.png'),
    new Student(4, 'Walid', 'Zamouri', 'zamouri00@yahoo.fr', 'zamouriwd1965', 'JSF', 14875631, 55, '../assets/images/student-04.png')
  ]

  constructor() { }

  addStudent(student: Student) {
    student.id = this.studentsList[this.studentsList.length - 1].id + 1
    student.photoPath = "../assets/images/newStudent.jpg"
    this.studentsList.push(student)
  }

  deleteStudent(stud: Student) {
    this.studentsList.forEach(student => {
      if ( student.id == stud.id ) {
        this.studentsList.splice(this.studentsList.indexOf(student),1)
      }
    });
  }

  deleteAllStudents() {
    this.studentsList = []
  }

  editStudent(student: Student) {
    const long = this.studentsList.length;
    for (let i = 0; i < long; i++) {
      if (student.id == this.studentsList[i].id) {
        this.studentsList.splice(i, 1, student);
      }
    }
  }

  getStudentById(teacherId: number): any {
    const long = this.studentsList.length;
    for (let i = 0; i < long; i++) {
      if (teacherId == this.studentsList[i].id) {
        return this.studentsList[i]
      }
    }
  }

}
