import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TaskModel} from '../model/task.model';
import * as moment from 'moment';
import {TaskService} from '../services/task.service';


@Component({
  selector: 'app-task-add-timer',
  templateUrl: './task-add-timer.component.html',
  styleUrls: ['./task-add-timer.component.scss']
})
export class TaskAddTimerComponent implements OnInit {
  @Input() taskName: FormControl;
  time = '0000';
  date: Date = new Date();
  datePickerOpen = false;
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  enableSaveButton = false;

  public mask = {
    guide: true,
    showMask: true,
    mask: [/\d/, /\d/, ':', /\d/, /\d/]
  };

  constructor(public taskService: TaskService) {
  }

  checkForChange(): boolean {
    return !!this.taskName.value && (this.time !== '0000' && this.time.length === 4) && !!this.date;
  }

  ngOnInit(): void {
    this.taskName.registerOnChange((val) => {
      this.checkForChange();
    });
  }

  openDatePicker(): void {
    this.datePickerOpen = true;
  }

  saveTaskDate(): void {
    this.datePickerOpen = false;
    console.log('Current date is', this.date);
  }

  closeDatePopup(): void {
    this.datePickerOpen = false;
  }

  saveTask(): void {
    const taskModel: TaskModel = new TaskModel();
    taskModel.name = this.taskName.value;
    taskModel.expire = this.calcExpiredDate();
    taskModel.completed = false;
    taskModel.completed = false;
    taskModel.timeout = false;
    const tasks = this.taskService.saveTask(taskModel);
    console.log(tasks);
    this.resetForm();
  }

  calcExpiredDate(): Date {
    const current = new Date();
    const now = current.toISOString().substr(0, 10);
    const newDate = moment(this.date.toISOString().substr(0, 10));
    const newDateIso = newDate.toDate().toISOString().substr(0, 10);
    if (now !== newDateIso) {
      newDate.set('minutes', current.getMinutes());
      newDate.set('hours', current.getHours());
      newDate.set('seconds', current.getSeconds());
    }
    newDate.add(parseInt(this.time, 10) / 100, 'hours');
    newDate.add(parseInt(this.time, 10) % 1100, 'minutes');
    return newDate.toDate();
  }

  private resetForm(): void {
    this.date = new Date();
    this.time = '00:00';
    this.taskName.setValue('');
  }
}
