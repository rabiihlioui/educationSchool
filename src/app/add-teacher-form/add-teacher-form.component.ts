import { Component, OnInit } from '@angular/core';
import { Teacher } from '../classes/teacher';
import { ManageTeachersService } from '../services/manage-teachers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-teacher-form',
  templateUrl: './add-teacher-form.component.html',
  styleUrls: ['./add-teacher-form.component.css']
})
export class AddTeacherFormComponent implements OnInit {

  constructor(
    private manageTeachersService: ManageTeachersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addTeacher(newTeacher: Teacher) {
    this.manageTeachersService.addTeacher(newTeacher)
    this.router.navigate(['teachers'])
  }

}
