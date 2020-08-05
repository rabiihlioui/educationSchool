import { Injectable } from '@angular/core';
import { Teacher } from '../classes/teacher';

@Injectable({
  providedIn: 'root'
})
export class ManageTeachersService {

  teachersList = [
    new Teacher(1, 'Slimen', 'Labyedh', 'slimenLabyedh@gmail.com', 'freud', 96458712, 50)
  ]

  constructor() { }

  addStudent(teacher: Teacher) {
    this.teachersList.push(teacher)
  }

  deleteStudentById(teacher: Teacher) {
    this.teachersList.forEach(t => {
      if ( t.id == teacher.id ) {
        this.teachersList.splice(this.teachersList.indexOf(t),1)
      }
    });
  }

  deleteAllStudents() {
    this.teachersList = []
  }

  editStudent(stud: Teacher) {
    const long = this.teachersList.length;
    for (let i = 0; i < long; i++) {
      if (stud.id == this.teachersList[i].id) {
        this.teachersList.splice(i, 1, stud);
      }
    }
  }

}
