import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from '../classes/teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  @Input() course: Teacher

  constructor() { }

  ngOnInit(): void {
  }

}
