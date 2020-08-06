import { Component, OnInit, ViewChild } from '@angular/core';
import { ManageCoursesService } from '../services/manage-courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(
    public manageCoursesService: ManageCoursesService
  ) { }

  ngOnInit(): void {
  }

  deleteAllCourses() {
    this.manageCoursesService.deleteAllCourses();
  }

}
