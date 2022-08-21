import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

taskForm !: FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      item : ['', Validators.required]
    })
  }

}
