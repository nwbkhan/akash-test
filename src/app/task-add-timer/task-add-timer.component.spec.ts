import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddTimerComponent } from './task-add-timer.component';

describe('TaskAddTimerComponent', () => {
  let component: TaskAddTimerComponent;
  let fixture: ComponentFixture<TaskAddTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAddTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAddTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
