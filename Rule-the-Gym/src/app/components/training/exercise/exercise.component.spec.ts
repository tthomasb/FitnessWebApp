import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseComponent } from './exercise.component';
import { DataServiceService } from 'src/app/services/data-service.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Exercise } from 'src/app/models/models';
import { RouterTestingModule } from '@angular/router/testing';

// describe('ExerciseComponent', () => {
//   let component: ExerciseComponent;
//   let fixture: ComponentFixture<ExerciseComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ExerciseComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ExerciseComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('ExerciseComponent', () => {
  let component: ExerciseComponent;
  let fixture: ComponentFixture<ExerciseComponent>;
  let mockDataService: jasmine.SpyObj<DataServiceService>;
  let mockMatDialog: jasmine.SpyObj<MatDialog>;

  const mockExercises: Exercise[] = [
    { exercise_id: '1', exercisename: 'Exercise 1', description: '', equipment: '', muscle: '1', user_id: '1' },
    { exercise_id: '2', exercisename: 'Exercise 2', description: '', equipment: '', muscle: '1', user_id: '2' },
  ];

  beforeEach(async () => {
    mockDataService = jasmine.createSpyObj<DataServiceService>(['getAllExercises', 'createExercise', 'deleteExercise']);
    mockMatDialog = jasmine.createSpyObj<MatDialog>(['open']);

    await TestBed.configureTestingModule({
      declarations: [ExerciseComponent],
      providers: [
        { provide: DataServiceService, useValue: mockDataService },
        { provide: MatDialog, useValue: mockMatDialog },
      ],
      imports: [MatDialogModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});