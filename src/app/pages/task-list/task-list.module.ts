import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListRoutingModule } from './task-list-routing.module';
import { TaskListComponent } from './task-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TaskListComponent],
  imports: [
    CommonModule,
    TaskListRoutingModule,
    FormsModule
  ]
})
export class TaskListModule { }
