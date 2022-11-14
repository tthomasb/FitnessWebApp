import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWorkoutAddExerciseComponent } from './dialog-workout-add-exercise.component';

describe('DialogWorkoutAddExerciseComponent', () => {
  let component: DialogWorkoutAddExerciseComponent;
  let fixture: ComponentFixture<DialogWorkoutAddExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogWorkoutAddExerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogWorkoutAddExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
