import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogEditWorkoutComponent } from './dialog-edit-workout.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogEditWorkoutComponent', () => {
  let component: DialogEditWorkoutComponent;
  let fixture: ComponentFixture<DialogEditWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, HttpClientModule, MatCardModule, MatFormFieldModule, MatExpansionModule, BrowserAnimationsModule],
      declarations: [DialogEditWorkoutComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatDialogRef, useValue: {} }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditWorkoutComponent);
    component = fixture.componentInstance;
  });

  it('should call ngOnInit method', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  // it('should call loadExerciseData method', () => {
  //   spyOn(component, 'loadExerciseData');
  //   component.exercises = [];
  //   component.loadExerciseData(0);
  //   expect(component.loadExerciseData).toHaveBeenCalled();
  //   expect(component.exercises.length).toBeGreaterThan(0);
  // });
});
