import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from '../classes/teacher';
import { ManageTeachersService } from '../services/manage-teachers.service';

@Component({
  selector: 'app-edit-teacher-form',
  templateUrl: './edit-teacher-form.component.html',
  styleUrls: ['./edit-teacher-form.component.css']
})
export class EditTeacherFormComponent implements OnInit {

  teacherId: number

  editedTeacher: Teacher

  constructor(
    private activatedRoute: ActivatedRoute,
    private manageTeachersService: ManageTeachersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.teacherId = this.activatedRoute.snapshot.params['teacherId'];
    this.getTeacherById(this.teacherId);
  }

  editTeacher(editedTeacher: Teacher) {
    this.manageTeachersService.editTeacher(editedTeacher);
    this.router.navigate(['teachers']);
  }

  getTeacherById(teacherId: number): any {
    this.editedTeacher = this.manageTeachersService.getTeacherById(teacherId);
  }

}
