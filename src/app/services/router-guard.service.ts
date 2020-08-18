import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ActiveMenuItemService } from './active-menu-item.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate {

  currentUser: string;

  constructor(
    private authenticationService: AuthenticationService,
    private activeMenuItemService: ActiveMenuItemService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authenticationService.isUserLoggedIn()) {
      this.currentUser = this.routerBelongsTo(state.url);

      let adminUserFlag = this.authenticationService.isUserAdmin() && this.currentUser == 'admin';
      let studentUserFlag = this.authenticationService.isUserStudent() && this.currentUser == 'student';
      let teacherUserFlag = this.authenticationService.isUserTeacher() && this.currentUser == 'teacher';
      let studOrTeachFlag = ( this.authenticationService.isUserStudent() || this.authenticationService.isUserTeacher() )
                       && this.currentUser == 'common';

      if (adminUserFlag || studentUserFlag || teacherUserFlag || studOrTeachFlag )
        return true;
    }
    this.activeMenuItemService.activateHome();
    this.router.navigate(['']);
    return false;
  }

  routerBelongsTo(route: string) {
    let adminSetOfUris = new Set(['/students', '/teachers', '/registrations', '/bookers']);
    let studentSetOfUris = new Set(['/myCourses', '/myTeachers']);
    let teacherSetOfUris = new Set(['/myCourses', '/myStudents']);
    if (adminSetOfUris.has(route))
      return 'admin';
    else if (studentSetOfUris.has(route) && teacherSetOfUris.has(route))
      return 'common'
    else if (studentSetOfUris.has(route))
      return 'student';
    else if (teacherSetOfUris.has(route))
      return 'teacher';
  }

}
