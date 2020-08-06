import { Injectable } from '@angular/core';
import { ManageStudentsService } from './manage-students.service';
import { ManageTeachersService } from './manage-teachers.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private manageStudentsService: ManageStudentsService,
    private manageTeachersService: ManageTeachersService
  ) { }

  authenticate(email, password) {
    if(email === 'admin@creator.com' && password === 'admin') {
      sessionStorage.setItem('authenticatedUser', 'adminUser');
    }
    else {
      this.manageStudentsService.studentsList.forEach(student => {
        if (student.email == email && student.password == password)
          sessionStorage.setItem('authenticatedUser', 'studentUser');
      });
      this.manageTeachersService.teachersList.forEach(teacher => {
        if (teacher.email == email && teacher.password == password)
          sessionStorage.setItem('authenticatedUser', 'teacherUser');
      });
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)    // null means user is not logged in
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }

  isUserAdmin() {
    let user = sessionStorage.getItem('authenticatedUser')
    return (user === 'adminUser')
  }

  isUserTeacher() {
    let user = sessionStorage.getItem('authenticatedUser')
    return (user === 'teacherUser')
  }

  isUserStudent() {
    let user = sessionStorage.getItem('authenticatedUser')
    return (user === 'studentUser')
  }

}
