import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: any = [
    { id: 1, title: 'Task 1', status: 'Completed'},
    { id: 2, title: 'Task 2', status: 'Completed'},
    { id: 3, title: 'Task 3', status: 'Incomplete'},
    { id: 4, title: 'Task 4', status: 'Incomplete'},
    { id: 5, title: 'Task 5', status: 'Incomplete'}
  ];

  constructor() { }

  markTaskComplete(task) {
    let taskItem = this.tasks.filter(x => x.id == task.id);
    if(taskItem[0].status=='Incomplete') {
      taskItem[0].status = 'Completed';
    } else {
      taskItem[0].status = 'Incomplete';
    }
  }

  addTask(task) {
    let lastIndex = this.tasks.length;
    task.id = lastIndex + 1;
    this.tasks.push(task);
  }
}
