import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from '../classes/teacher';
import { ManageTeachersService } from '../services/manage-teachers.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  @Input() teacher: Teacher

  constructor(
    private manageTeachersService: ManageTeachersService
  ) { }

  ngOnInit(): void {
  }

  deleteTeacher() {
    this.manageTeachersService.deleteTeacher(this.teacher);
  }

}
