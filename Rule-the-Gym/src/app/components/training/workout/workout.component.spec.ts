// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { WorkoutComponent } from './workout.component';
// import { DataServiceService } from 'src/app/services/data-service.service';
// import { of } from 'rxjs';
// import { Dialog } from 'src/app/enums/dialog';
// import { Workout } from 'src/app/models/models';
// import { MatDialog } from '@angular/material/dialog';
// import { RouterTestingModule } from '@angular/router/testing';

// describe('WorkoutComponent', () => {
//   let component: WorkoutComponent;
//   let fixture: ComponentFixture<WorkoutComponent>;
//   let mockDataService: jasmine.SpyObj<DataServiceService>;
//   let mockMatDialog: jasmine.SpyObj<MatDialog>;

//   const mockWorkouts: Workout[] = [
//     { workoutname: 'Workout 1', workout_id: '1', type: '', description: '', user_id: 1 },
//     { workoutname: 'Workout 2', workout_id: '2', type: '', description: '', user_id: 1 },
//   ];

//   beforeEach(async () => {
//     mockDataService = jasmine.createSpyObj<DataServiceService>(['getAllWorkouts', 'CreateWorkout', 'DeleteWorkout']);
//     mockMatDialog = jasmine.createSpyObj<MatDialog>(['open']);

//     await TestBed.configureTestingModule({
//       declarations: [WorkoutComponent],
//       providers: [
//         { provide: DataServiceService, useValue: mockDataService },
//         { provide: MatDialog, useValue: mockMatDialog },
//       ],
//       imports: [ RouterTestingModule ],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(WorkoutComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should initialize workouts and accordionConfig from DataService', () => {
//     mockDataService.getAllWorkouts.and.returnValue(of(mockWorkouts));

//     component.ngOnInit();

//     expect(component.workouts).toEqual(mockWorkouts);
//     expect(component.accordionConfig.toLoop).toEqual(mockWorkouts);
//     expect(component.accordionConfig.topLayer).toEqual('type');
//     expect(component.accordionConfig.type).toEqual(Dialog.START);
//   });

//   it('should open add workout dialog', () => {
//     mockDataService.CreateWorkout.and.returnValue(of({ workout_id: '3' }));
//     const mockDialogRef = jasmine.createSpyObj('dialogRef', ['afterClosed']);
//     mockMatDialog.open.and.returnValue(mockDialogRef);

//     component.openAddWorkout();

//     expect(mockDataService.CreateWorkout).toHaveBeenCalledWith('', '', 1);
//     expect(mockMatDialog.open).toHaveBeenCalledWith(jasmine.any(Function), {
//       width: '90%',
//       height: '90%',
//       data: { workout: jasmine.any(Object), dialogName: Dialog.CREATE },
//     });
//     expect(mockDialogRef.afterClosed).toHaveBeenCalled();
//   });

//   it('should open edit workout dialog', () => {
//     const mockDialogRef = jasmine.createSpyObj('dialogRef', ['afterClosed']);
//     mockMatDialog.open.and.returnValue(mockDialogRef);

//     component.openEditWorkout(0);

//     expect(mockMatDialog.open).toHaveBeenCalledWith(jasmine.any(Function), {
//       width: '90%',
//       height: '90%',
//       data: { workout: mockWorkouts[0], dialogName: Dialog.EDIT },
//     });
//     expect(mockDialogRef.afterClosed).toHaveBeenCalled();
//   });
// });