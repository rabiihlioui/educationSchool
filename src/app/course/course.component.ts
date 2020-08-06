import { Component, OnInit, Input } from '@angular/core';
import { ManageCoursesService } from '../services/manage-courses.service';
import { Course } from '../classes/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() course: Course

  constructor(
    public manageCoursesService: ManageCoursesService
  ) { }

  ngOnInit(): void {
  }

  addCourse() {
  }

  deleteCourse() {
    this.manageCoursesService.deleteCourse(this.course);
  }

  editCourse() {
  }

}
