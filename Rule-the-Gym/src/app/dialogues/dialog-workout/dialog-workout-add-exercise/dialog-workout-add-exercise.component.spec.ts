import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogWorkoutAddExerciseComponent } from './dialog-workout-add-exercise.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

describe('DialogWorkoutAddExerciseComponent', () => {
  let component: DialogWorkoutAddExerciseComponent;
  let fixture: ComponentFixture<DialogWorkoutAddExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatDialogModule ],
      declarations: [DialogWorkoutAddExerciseComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogWorkoutAddExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWorkoutAddExerciseComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
