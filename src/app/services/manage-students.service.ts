import { Injectable } from '@angular/core';
import { Student } from '../classes/student';

@Injectable({
  providedIn: 'root'
})
export class ManageStudentsService {

  studentsList = [
    new Student(1, 'Rabii', 'Hlioui', 'rabiihlioui@gmail.com', 'rabiipass', 12345678, 100),
    new Student(2, 'Beji', 'Matrix', 'bejimatrix@hotmail.com', 'khantouch123', 96542381, 45),
    new Student(3, 'Sofien', 'Arbi', 'arbi.sofien@gmail.com', 'ArbiSofienXYZ', 78451203, 23),
    new Student(4, 'Walid', 'Zamouri', 'zamouri00@yahoo.fr', 'zamouriwd1965', 14875631, 55)
  ]

  constructor() { }

  addStudent(stud: Student) {
    this.studentsList.push(stud)
  }

  deleteStudentById(stud: Student) {
    this.studentsList.forEach(student => {
      if ( student.id == stud.id ) {
        this.studentsList.splice(this.studentsList.indexOf(student),1)
      }
    });
  }

  deleteAllStudents() {
    this.studentsList = []
  }

  editStudent(stud: Student) {
    const long = this.studentsList.length;
    for (let i = 0; i < long; i++) {
      if (stud.id == this.studentsList[i].id) {
        this.studentsList.splice(i, 1, stud);
      }
    }
  }

}
