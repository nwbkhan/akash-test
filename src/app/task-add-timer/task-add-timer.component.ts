import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-add-timer',
  templateUrl: './task-add-timer.component.html',
  styleUrls: ['./task-add-timer.component.scss']
})
export class TaskAddTimerComponent implements OnInit {
  @Input() taskName: string;
  @Input() time: string;
  @Input() date: string;
  @Output() save: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

}
