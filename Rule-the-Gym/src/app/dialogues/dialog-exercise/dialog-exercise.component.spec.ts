import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DialogExerciseComponent } from './dialog-exercise.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Dialog } from 'src/app/enums/dialog';

describe('DialogExerciseComponent', () => {
  let component: DialogExerciseComponent;
  let fixture: ComponentFixture<DialogExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatDialogModule, HttpClientModule, MatCardModule, MatFormFieldModule, FormsModule, ReactiveFormsModule ],
      declarations: [DialogExerciseComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: { data: [{exercise_id: '1', exercisename: 'test', description: 'test', muscle: 'test', equipment: 'test'}], index: 0, dialogName: Dialog.EDIT }
        },
        { provide: MatDialogRef, useValue: {} }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the dialog', () => {
    const dialogRef = TestBed.inject(MatDialogRef);
    expect(dialogRef).toBeDefined();
  });
});
