import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  title: string = '';

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  addTask() {
    let task: any = {};
    task.id = 0;
    task.title = this.title;
    task.status = 'Incomplete';
    this.taskService.addTask(task);
    this.router.navigateByUrl('task-list');
  }

}
