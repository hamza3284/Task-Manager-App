import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  taskList: any;
  status: string = 'All';
  defaultTaskList: any;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.defaultTaskList = this.taskService.tasks;
    this.taskList = [...this.defaultTaskList];
  }

  markComplete(task) {
    this.taskService.markTaskComplete(task);
    this.filterStatus();
  }

  filterStatus() {
    // let filter = [...this.taskList];
    this.taskList = [...this.defaultTaskList];
    if(this.status == 'All') {
      this.taskList = this.taskList;
    } else {
      this.taskList = this.taskList.filter((x) => x.status == this.status);
    }
  }

}
