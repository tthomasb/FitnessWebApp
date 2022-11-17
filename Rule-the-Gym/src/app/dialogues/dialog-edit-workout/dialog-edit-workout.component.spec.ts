import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditWorkoutComponent } from './dialog-edit-workout.component';

describe('DialogEditWorkoutComponent', () => {
  let component: DialogEditWorkoutComponent;
  let fixture: ComponentFixture<DialogEditWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditWorkoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
