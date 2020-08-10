import { Injectable } from '@angular/core';
import { Teacher } from '../classes/teacher';

@Injectable({
  providedIn: 'root'
})
export class ManageTeachersService {

  teachersList = [
    new Teacher(1, 'Emilia', 'Clark', 'emiliaclark@gmail.com', 'emilia', 'Web Developpment', 96458712, 50, '../assets/images/team-01.png'),
    new Teacher(2, 'Kristina', 'Black', 'black.kristina@hotmail.com', 'black', 'Web Design', 96458712, 50, '../assets/images/team-02.png'),
    new Teacher(3, 'Steve', 'Thomas', 'thomassteve@yahoo.fr', 'freud', 'Angular', 96458712, 50, '../assets/images/team-03.png'),
    new Teacher(4, 'zeineb', 'Labyedh', 'zeinebLabyedh@gmail.com', 'freud', 'JSF', 96458712, 50, '../assets/images/team-04.png')
  ]

  constructor() { }

  addTeacher(teacher: Teacher) {
    teacher.id = this.teachersList[this.teachersList.length - 1].id + 1
    teacher.photoPath = "../assets/images/newTeacher.jpg"
    this.teachersList.push(teacher)
  }

  deleteTeacher(teacher: Teacher) {
    this.teachersList.forEach(teach => {
      if ( teach.id == teacher.id ) {
        this.teachersList.splice(this.teachersList.indexOf(teach),1)
      }
    });
  }

  deleteAllTeachers() {
    this.teachersList = []
  }

  editTeacher(teach: Teacher) {
    const long = this.teachersList.length;
    for (let i = 0; i < long; i++) {
      if (teach.id == this.teachersList[i].id) {
        this.teachersList.splice(i, 1, teach);
      }
    }
  }

  getTeacherById(teacherId: number): any {
    const long = this.teachersList.length;
    for (let i = 0; i < long; i++) {
      if (teacherId == this.teachersList[i].id) {
        return this.teachersList[i]
      }
    }
  }

}
