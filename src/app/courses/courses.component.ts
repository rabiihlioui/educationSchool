import { Component, OnInit, ViewChild } from '@angular/core';
import { ManageCoursesService } from '../services/manage-courses.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(
    public manageCoursesService: ManageCoursesService,
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  deleteAllCourses() {
    this.manageCoursesService.deleteAllCourses();
  }

}
