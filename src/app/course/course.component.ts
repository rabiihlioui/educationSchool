import { Component, OnInit, Input } from '@angular/core';
import { ManageCoursesService } from '../services/manage-courses.service';
import { Course } from '../classes/course';
import { AuthenticationService } from '../services/authentication.service';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() course: Course

  constructor(
    public manageCoursesService: ManageCoursesService,
    public authenticationService: AuthenticationService,
    public bookingService: BookingService
  ) { }

  ngOnInit(): void {
  }

  deleteCourse() {
    this.manageCoursesService.deleteCourse(this.course);
  }

  bookCourse(course: Course) {
    this.bookingService.bookCourse(course);
  }

}
