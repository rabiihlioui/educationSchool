import { Component, OnInit } from '@angular/core';
import { Student } from '../classes/student';
import { ManageStudentsService } from '../services/manage-students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css']
})
export class AddStudentFormComponent implements OnInit {

  constructor(
    private manageStudentsService: ManageStudentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addStudent(newStudent: Student) {
    this.manageStudentsService.addStudent(newStudent)
    this.router.navigate(['students'])
  }

}
