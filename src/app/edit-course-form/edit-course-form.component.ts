import { Component, OnInit } from '@angular/core';
import { Course } from '../classes/course';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageCoursesService } from '../services/manage-courses.service';

@Component({
  selector: 'app-edit-course-form',
  templateUrl: './edit-course-form.component.html',
  styleUrls: ['./edit-course-form.component.css']
})
export class EditCourseFormComponent implements OnInit {

  courseId: number

  editedCourse: Course

  constructor(
    private activatedRoute: ActivatedRoute,
    private manageCoursesService: ManageCoursesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.courseId = this.activatedRoute.snapshot.params['courseId']
    this.getCourseById(this.courseId)
  }

  editCourse(editedCourse: Course) {
    this.manageCoursesService.editCourse(editedCourse);
    this.router.navigate(['courses']);
  }

  getCourseById(courseId: number): any {
    this.editedCourse = this.manageCoursesService.getCourseById(courseId);
  }

}
