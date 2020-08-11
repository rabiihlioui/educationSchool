import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CourseComponent } from './course/course.component';
import { BlogComponent } from './blog/blog.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { IdentificationComponent } from './identification/identification.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { MyStudentsComponent } from './my-students/my-students.component';
import { MyTeachersComponent } from './my-teachers/my-teachers.component';
import { BookersComponent } from './bookers/bookers.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { EditCourseFormComponent } from './edit-course-form/edit-course-form.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AddTeacherFormComponent } from './add-teacher-form/add-teacher-form.component';
import { EditTeacherFormComponent } from './edit-teacher-form/edit-teacher-form.component';
import { StudentComponent } from './student/student.component';
import { EditStudentFormComponent } from './edit-student-form/edit-student-form.component';
import { AddStudentFormComponent } from './add-student-form/add-student-form.component';
import { RegistrationsComponent } from './registrations/registrations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    CourseComponent,
    BlogComponent,
    TeachersComponent,
    StudentsComponent,
    PricingComponent,
    ContactComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationComponent,
    ErrorComponent,
    FooterComponent,
    IdentificationComponent,
    MyCoursesComponent,
    MyStudentsComponent,
    MyTeachersComponent,
    BookersComponent,
    CoursesComponent,
    CourseFormComponent,
    EditCourseFormComponent,
    TeacherComponent,
    AddTeacherFormComponent,
    EditTeacherFormComponent,
    StudentComponent,
    EditStudentFormComponent,
    AddStudentFormComponent,
    RegistrationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
