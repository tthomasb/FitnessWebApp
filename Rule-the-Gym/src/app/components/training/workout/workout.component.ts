import { Component, OnInit } from '@angular/core';
import { ExerciseModel } from 'src/app/models/exercise-model.model';
import { WorkoutData } from 'src/app/models/workout-data.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogWorkoutComponent } from 'src/app/dialogues/dialog-workout/dialog-workout.component';
import { Sets } from 'src/app/models/sets.model';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit {
  workouts: WorkoutData[];
  constructor(public dialog: MatDialog) {
    this.workouts = [
      new WorkoutData('Biceps1', [
        new ExerciseModel('Curls', 'biceps curls','biceps',"Dumbell")
      ],new Sets([12,12,12],[30,30,30],60,[20,20,20]),"Gym"),
      
      new WorkoutData('Biceps1', [
        new ExerciseModel('Curls', 'biceps curls','biceps',"Dumbell")
      ],new Sets([12,12,12],[30,30,30],60,[20,20,20]),"Gym"),

    ];
  }

  ngOnInit(): void {}

  /**
   * Open the workout dialog
   */
  openAddWorkout() {
    const dialogRef = this.dialog.open(DialogWorkoutComponent, {
      width: '90%',
      height: '90%',
    });

    /**
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    */
  }
}
