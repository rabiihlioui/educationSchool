import { Injectable } from '@angular/core';
import { Course } from '../classes/course';

@Injectable({
  providedIn: 'root'
})
export class ManageCoursesService {

  coursesList = [
    new Course(1, 'Art & Design', 'Lorem ipsum door sit amet, fugiat deicata avise id cum, no quo maiorum intel ogrets geuiat operts elicata libere avisse id cumlegebat, liber regione eu sit.... ', 6, 40, 7, '../assets/images/blog_1.jpg'),
    new Course(2, 'Business', 'Lorem ipsum door sit amet, fugiat deicata avise id cum, no quo maiorum intel ogrets geuiat operts elicata libere avisse id cumlegebat, liber regione eu sit.... ', 6, 40, 7, '../assets/images/blog_2.jpg'),
    new Course(3, 'Computer Science', 'Lorem ipsum door sit amet, fugiat deicata avise id cum, no quo maiorum intel ogrets geuiat operts elicata libere avisse id cumlegebat, liber regione eu sit.... ', 6, 40, 7, '../assets/images/blog_3.jpg'),
    new Course(4, 'Health & Medicine', 'Lorem ipsum door sit amet, fugiat deicata avise id cum, no quo maiorum intel ogrets geuiat operts elicata libere avisse id cumlegebat, liber regione eu sit.... ', 6, 40, 7, '../assets/images/blog_4.jpg'),
    new Course(5, 'Humanities', 'Lorem ipsum door sit amet, fugiat deicata avise id cum, no quo maiorum intel ogrets geuiat operts elicata libere avisse id cumlegebat, liber regione eu sit.... ', 6, 40, 7, '../assets/images/blog_5.jpg'),
    new Course(6, 'Mathematics', 'Lorem ipsum door sit amet, fugiat deicata avise id cum, no quo maiorum intel ogrets geuiat operts elicata libere avisse id cumlegebat, liber regione eu sit.... ', 6, 40, 7, '../assets/images/blog_6.jpg'),
    new Course(7, 'Programming', 'Lorem ipsum door sit amet, fugiat deicata avise id cum, no quo maiorum intel ogrets geuiat operts elicata libere avisse id cumlegebat, liber regione eu sit.... ', 6, 40, 7, '../assets/images/blog_7.jpg')
  ]

  constructor() { }

  addCourse(course: Course) {
    course.id = this.coursesList[this.coursesList.length - 1].id + 1
    course.photoPath = "../assets/images/newCourse.jpg"
    this.coursesList.push(course)
  }

  deleteCourse(cou: Course) {
    this.coursesList.forEach(course => {
      if ( course.id == cou.id ) {
        this.coursesList.splice(this.coursesList.indexOf(course),1)
      }
    });
  }

  deleteAllCourses() {
    this.coursesList = []
  }

  editCourse(course: Course) {
    const long = this.coursesList.length;
    for (let i = 0; i < long; i++) {
      if (course.id == this.coursesList[i].id) {
        this.coursesList.splice(i, 1, course);
      }
    }
  }

  getCourseById(courseId: number): any {
    const long = this.coursesList.length;
    for (let i = 0; i < long; i++) {
      if (courseId == this.coursesList[i].id) {
        return this.coursesList[i]
      }
    }
  }

}
