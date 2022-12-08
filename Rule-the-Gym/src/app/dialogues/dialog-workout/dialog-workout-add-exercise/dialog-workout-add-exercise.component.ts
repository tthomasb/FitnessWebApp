import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { Component, Input, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ExerciseComponent } from 'src/app/components/training/exercise/exercise.component';
import { Dialog } from 'src/app/enums/dialog';
import { ExerciseDataModel } from 'src/app/models/exercise-data-model.model';
import { ExerciseModel } from 'src/app/models/exercise-model.model';
import { WorkoutData } from 'src/app/models/workout-data.model';
import { DataServiceService } from 'src/app/services/data-service.service';
import { DialogEditWorkoutComponent } from '../../dialog-edit-workout/dialog-edit-workout.component';

@Component({
  selector: 'app-dialog-workout-add-exercise',
  templateUrl: './dialog-workout-add-exercise.component.html',
  styleUrls: ['./dialog-workout-add-exercise.component.scss'],
})
export class DialogWorkoutAddExerciseComponent implements OnInit {
  @Input() search: string = '';
  Allexercises: ExerciseModel[];
  dataService:DataServiceService;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public MatDialogRef: MatDialogRef<DialogEditWorkoutComponent>,
    public dialog: MatDialog, dataService:DataServiceService
  ) {
    this.dataService=dataService;
    this.Allexercises = this.dataService.getAllExercises();
  }

  ngOnInit(): void {
    console.log(this.data);
  }
  getAccordionData(): any {
    const data: any = {
      toLoop: this.Allexercises,
      topLayer: 'muscle',
      type: Dialog.ADD,
    };
    return data;
  }
  catchDialogEvent(value: any) {
    switch (value.event) {
      case Dialog.START:
        break;
      case Dialog.EDIT:
        break;
      case Dialog.DELETE:
        break;
      case Dialog.ADD:              
        this.AddExercise(value.source);
    }
  }
  AddExercise(index:number){              
      this.data.workout.exerciseMap.set(this.Allexercises[index],{});
      console.log('Added Exercise');
  }

  // AddExercise(index: number) {
  //   // console.log(this.data);
  //   if (this.data.dialogName === Dialog.EDIT) {
  //     console.log(this.data.index);
  //     this.data.workouts[this.data.index].exercises.push(
  //       this.Allexercises[index]
  //     );
  //     console.log(this.data.workouts[this.data.index]);
  //   }
  //   if (this.data.dialogName === Dialog.CREATE) {
  //     this.data.workouts;
  //     //Todo add new workout
  //   }
  // }
}
