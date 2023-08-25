import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTaskRoutingModule } from './add-task-routing.module';
import { AddTaskComponent } from './add-task.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddTaskComponent],
  imports: [
    CommonModule,
    AddTaskRoutingModule,
    FormsModule
  ]
})
export class AddTaskModule { }
