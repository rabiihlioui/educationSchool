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

  cinPattern = "^((\\+91-?)|0)?[0-9]{8}$";

  agePattern = "^((\\+91-?)|0)?[0-9]{2}$";

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
