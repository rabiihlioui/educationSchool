import { Injectable } from '@angular/core';
import { Course } from '../classes/course';

@Injectable({
  providedIn: 'root'
})
export class ManageCoursesService {

  coursesList = [
    new Course(1, 'Art & Design',
            'To study art and design is to examine the human condition, interpret it, and then share your view through any number of mediums including, but not limited to, architecture, graphic design, painting, sculpture ....',
            6, 40, 7, '../assets/images/blog_1.jpg'),
    new Course(2, 'Business',
            'An undergraduate business program educates students on the fundamentals they need in order to become business leaders and successful careerists, regardless of the specific career grads find themselves in.',
            6, 40, 7, '../assets/images/blog_2.jpg'),
    new Course(3, 'Computer Science',
            'We offer a range of qualifications in computing. We believe our computing degrees are popular worldwide because we offer excellent tutors and teaching methods – plus outstanding flexibility and accessibility.',
            6, 40, 7, '../assets/images/blog_3.jpg'),
    new Course(4, 'Health & Medicine',
            'A successful healthcare system relies on a the coordinated efforts of many professionals. Doctors, specialists, nurses, and individuals not directly involved in the delivery of healthcare ....',
            6, 40, 7, '../assets/images/blog_4.jpg'),
    new Course(5, 'Humanities',
            'Humanities studies the history and development of human thought and culture. By focusing on several topics, humanities courses seek a broad and interconnected understanding of the human experience. ',
            6, 40, 7, '../assets/images/blog_5.jpg'),
    new Course(6, 'Mathematics',
            'This course offers students new insights into important and widely used mathematical concepts, with a strong focus on numerical and algebraic relationships.... ',
            6, 40, 7, '../assets/images/blog_6.jpg'),
    new Course(7, 'Programming',
            'Computer programming courses focus on helping students develop an understanding of computer networks, operating systems, algorithms, database systems and web design....',
            6, 40, 7, '../assets/images/blog_7.jpg')
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
