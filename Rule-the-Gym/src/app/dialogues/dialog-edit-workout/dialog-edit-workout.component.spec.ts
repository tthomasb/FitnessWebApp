import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogEditWorkoutComponent } from './dialog-edit-workout.component';

describe('DialogEditWorkoutComponent', () => {
  let component: DialogEditWorkoutComponent;
  let fixture: ComponentFixture<DialogEditWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogEditWorkoutComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditWorkoutComponent);
    component = fixture.componentInstance;
    spyOn(component, 'ngOnInit');
    fixture.detectChanges();
  });

  it('should call ngOnInit method', () => {
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should call safeExerciseData method with correct values', () => {
    const workoutId = 1;
    const set = {
      set_id: 1,
      workout_exercise_id: 1,
      reps: 1,
      weight: 1,
      pause: 1
    };
    component.sets = [set];
    spyOn(component.dataService, 'editSet');
    component.safeExerciseData(workoutId);
    expect(component.dataService.editSet).toHaveBeenCalledWith(set.set_id, set.reps, set.weight, set.pause);
  });
});
