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
    newCourse.id = this.manageCoursesService.coursesList[this.manageCoursesService.coursesList.length - 1].id + 1
    newCourse.photoPath = "../assets/images/newCourse.jpg"
    this.manageCoursesService.coursesList.push(newCourse)
    this.router.navigate(['courses'])
  }

}
