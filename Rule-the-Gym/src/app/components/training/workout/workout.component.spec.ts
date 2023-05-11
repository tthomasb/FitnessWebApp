import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutComponent } from './workout.component';
import { DataServiceService } from 'src/app/services/data-service.service';
import { of } from 'rxjs';
import { Dialog } from 'src/app/enums/dialog';
import { Workout } from 'src/app/models/models';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { AccordionComponent } from '../../utils/accordion/accordion.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';

describe('WorkoutComponent', () => {
  let component: WorkoutComponent;
  let fixture: ComponentFixture<WorkoutComponent>;
  let dataService: DataServiceService;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkoutComponent, AccordionComponent],
      imports: [RouterTestingModule, MatIconModule, MatExpansionModule, HttpClientModule, MatDialogModule],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call openAddWorkout', () => {
    spyOn(component, 'openAddWorkout');
    component.openAddWorkout();
    expect(component.openAddWorkout).toHaveBeenCalled();
  });

  it('should call openEditWorkout', () => {
    spyOn(component, 'openEditWorkout');
    component.workouts = [{ workoutname: "Chest", workout_id: "1", type: "", description: "", user_id: 1 }];
    component.openEditWorkout(1);
    expect(component.openEditWorkout).toHaveBeenCalled();
  });
});
