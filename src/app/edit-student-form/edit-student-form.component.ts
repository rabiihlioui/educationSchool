import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageStudentsService } from '../services/manage-students.service';
import { Student } from '../classes/student';

@Component({
  selector: 'app-edit-student-form',
  templateUrl: './edit-student-form.component.html',
  styleUrls: ['./edit-student-form.component.css']
})
export class EditStudentFormComponent implements OnInit {

  studentId: number

  editedStudent: Student

  cinPattern = "^((\\+91-?)|0)?[0-9]{8}$";

  agePattern = "^((\\+91-?)|0)?[0-9]{2}$";

  constructor(
    private activatedRoute: ActivatedRoute,
    private manageStudentsService: ManageStudentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.studentId = this.activatedRoute.snapshot.params['studentId'];
    this.getStudentById(this.studentId);
  }

  editStudent(editedStudent: Student) {
    this.manageStudentsService.editStudent(editedStudent);
    this.router.navigate(['students']);
  }

  getStudentById(teacherId: number): any {
    this.editedStudent = this.manageStudentsService.getStudentById(teacherId);
  }

}
