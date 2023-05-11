import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciseComponent } from './exercise.component';
import { DataServiceService } from 'src/app/services/data-service.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Exercise } from 'src/app/models/models';
import { RouterTestingModule } from '@angular/router/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { AccordionComponent } from '../../utils/accordion/accordion.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { DialogExerciseComponent } from 'src/app/dialogues/dialog-exercise/dialog-exercise.component';
import { Dialog } from 'src/app/enums/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

describe('ExerciseComponent', () => {
  let component: ExerciseComponent;
  let fixture: ComponentFixture<ExerciseComponent>;
  let mockMatDialog: jasmine.SpyObj<MatDialog>;
  let dataService: jasmine.SpyObj<DataServiceService>;
  let spy: jasmine.SpyObj<DataServiceService>;

  beforeEach(async () => {
    mockMatDialog = jasmine.createSpyObj(MatDialog, ['open']);
    const spy = jasmine.createSpyObj(DataServiceService, ['getAllExercises', 'deleteExercise', 'editExercise']);

    await TestBed.configureTestingModule({
      declarations: [ExerciseComponent, AccordionComponent],
      providers: [
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: DataServiceService, useValue: spy }
      ],
      imports: [MatDialogModule, RouterTestingModule, MatExpansionModule, MatIconModule, HttpClientModule, BrowserAnimationsModule, MatCardModule],
    }).compileComponents();

    dataService = TestBed.inject(DataServiceService) as jasmine.SpyObj<DataServiceService>;
    fixture = TestBed.createComponent(ExerciseComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch exercises on init', () => {
    const expectedExercises: Exercise[] = [{ exercise_id: '1', exercisename: 'Push-up', description: '', muscle: 'Chest', equipment: 'None', user_id: '1' }];
    dataService.getAllExercises.and.returnValue(of(expectedExercises));
    fixture.detectChanges();
    expect(component.exercises).toEqual(expectedExercises);
  });

  describe('getAccordionData', () => {
    it('should return the correct data', () => {
      const exercise = { exercise_id: '1', exercisename: 'Push-up', description: '', muscle: 'Chest', equipment: 'None', user_id: '1' };
      component.exercises = [exercise];

      const expectedData = {
        toLoop: [exercise],
        topLayer: 'muscle',
        type: Dialog.EDIT
      };
      expect(component.getAccordionData()).toEqual(expectedData);
    });
  });

  describe('deleteExercise', () => {
    it('should delete the exercise and update the list', () => {
      const exercise = { exercise_id: '1', exercisename: 'Push-up', description: '', muscle: 'Chest', equipment: 'None', user_id: '1' };
      component.exercises = [exercise];

      spy = TestBed.inject(DataServiceService) as jasmine.SpyObj<DataServiceService>;
      spy.deleteExercise.and.returnValue(of(null));

      component.deleteExercise('1');

      expect(spy.deleteExercise).toHaveBeenCalledWith('1');
      expect(component.getExercises()).toEqual([]);
    });
  });

  describe('catchDialogEvent', () => {
    it('should call the correct method when Dialog.EDIT is received', () => {
      spyOn(component, 'openEditExercise');

      component.catchDialogEvent({ event: Dialog.EDIT, source: 1 });

      expect(component.openEditExercise).toHaveBeenCalledWith(1);
    });
    it('should call the correct method when Dialog.DELETE is received', () => {
      spyOn(component, 'openDeleteExercise');

      component.catchDialogEvent({ event: Dialog.DELETE, source: 1 });

      expect(component.openDeleteExercise).toHaveBeenCalledWith(1);
    });
  });

  // TODO - test openEditExercise
  // TODO - test openDeleteExercise
  // TODO - test openAddExercise

});