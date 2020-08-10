import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CourseComponent } from './course/course.component';
import { BlogComponent } from './blog/blog.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { IdentificationComponent } from './identification/identification.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { MyStudentsComponent } from './my-students/my-students.component';
import { MyTeachersComponent } from './my-teachers/my-teachers.component';
import { BookersComponent } from './bookers/bookers.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { EditCourseFormComponent } from './edit-course-form/edit-course-form.component';

const routes: Routes = [
  { 
    path: '',
    component: HeaderComponent,
    children: 
    [ 
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'aboutUs', component: AboutUsComponent },
      { 
        path: 'courses',
        component: CoursesComponent,
        children:
        [
          { path: 'editCourse/:courseId', component: EditCourseFormComponent }
        ]
      },
      { path: 'courses/addCourse', component: CourseFormComponent },
      { path: 'myCourses', component: MyCoursesComponent },
      { path: 'myStudents', component: MyStudentsComponent },
      { path: 'myTeachers', component: MyTeachersComponent },
      { path: 'bookers', component: BookersComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'teachers', component: TeachersComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'identification', component: IdentificationComponent },
      { path: 'logout', component: LogoutComponent }
    ] 
  },
  { path: '**' , component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
