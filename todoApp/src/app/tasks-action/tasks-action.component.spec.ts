import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksActionComponent } from './tasks-action.component';

describe('TasksActionComponent', () => {
  let component: TasksActionComponent;
  let fixture: ComponentFixture<TasksActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksActionComponent]
    });
    fixture = TestBed.createComponent(TasksActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
