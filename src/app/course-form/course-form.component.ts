import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from '../classes/course';
import { ManageCoursesService } from '../services/manage-courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  constructor(
    private manageCoursesService: ManageCoursesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addCourse(newCourse: Course) {
    this.manageCoursesService.addCourse(newCourse)
    this.router.navigate(['courses'])
  }

}
