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
import { LoginComponent } from './login/login.component';
import { IdentificationComponent } from './identification/identification.component';
import { RegistrationComponent } from './registration/registration.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { 
    path: '',
    component: HeaderComponent,
    children: 
    [ 
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'aboutUs', component: AboutUsComponent },
      { path: 'course', component: CourseComponent },
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
