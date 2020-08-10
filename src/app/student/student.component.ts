import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../classes/student';
import { ManageStudentsService } from '../services/manage-students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: Student

  constructor(
    private manageStudentsService: ManageStudentsService
  ) { }

  ngOnInit(): void {
  }

  deleteStudent() {
    this.manageStudentsService.deleteStudent(this.student);
  }

}
