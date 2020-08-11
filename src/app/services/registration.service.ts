import { Injectable } from '@angular/core';
import { Teacher } from '../classes/teacher';
import { Student } from '../classes/student';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  registeredStudentsList = [
    new Student(1, 'Marwen', 'Hlioui', 'marwenhlioui@gmail.com', 'marwenpass', 'JSF', 96325678, 50)
  ]

  registeredTeachersList = [
    new Teacher(1, 'Fou', 'Chika', 'fouchika@gmail.com', 'nasba', 'nasab', 96458712, 50)
  ]

  constructor() { }

}
