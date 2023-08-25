import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'task-list' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'task-list',
        loadChildren: () =>
          import('./pages/task-list/task-list.module').then((m) => m.TaskListModule),
      },
      {
        path: 'add-task',
        loadChildren: () =>
          import('./pages/add-task/add-task.module').then((m) => m.AddTaskModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
