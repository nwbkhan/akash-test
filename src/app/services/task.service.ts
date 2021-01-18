import { Injectable } from '@angular/core';
import {UserService} from './user.service';
import {TaskModel} from '../model/task.model';
import {Task} from 'protractor/built/taskScheduler';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public userService: UserService) {
  }

  saveTask(task: TaskModel): TaskModel[] {
    if (!task) {
      return;
    }
    const currentUserTask = this.getCurrentUserTask();
    currentUserTask.push(task);
    this.saveAllTasks(currentUserTask);
    return this.getCurrentUserTask();
  }

  getCurrentUserTask(): TaskModel[] {
    const currentUser = this.userService.getCurrentUser();
    const data = JSON.parse(localStorage.getItem(currentUser + 'TASKS')) as TaskModel[];
    return data ? data : [];
  }

  saveAllTasks(tasks: TaskModel[]): void {
    if (!tasks) {
      return;
    }
    const currentUser = this.userService.getCurrentUser();
    localStorage.setItem(currentUser + 'TASKS', JSON.stringify(tasks));
  }

}
