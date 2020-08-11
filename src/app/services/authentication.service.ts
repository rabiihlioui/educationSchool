import { Injectable } from '@angular/core';
import { ManageStudentsService } from './manage-students.service';
import { ManageTeachersService } from './manage-teachers.service';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private registrationService: RegistrationService
  ) { }

  authenticate(email, password) {
    if(email === 'admin@creator.com' && password === 'admin') {
      sessionStorage.setItem('authenticatedUser', 'adminUser');
    }
    else {
      this.registrationService.registeredStudentsList.forEach(student => {
        if (student.email == email && student.password == password)
          sessionStorage.setItem('authenticatedUser', 'studentUser');
      });
      this.registrationService.registeredTeachersList.forEach(teacher => {
        if (teacher.email == email && teacher.password == password)
          sessionStorage.setItem('authenticatedUser', 'teacherUser');
      });
    }
    sessionStorage.setItem('userEmail', email);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)    // null means user is not logged in
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('userEmail');
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

  getUserEmailFromSession() {
    // return sessionStorage.getItem('userEmail');
    console.log(sessionStorage.getItem('userEmail'))
  }

}
