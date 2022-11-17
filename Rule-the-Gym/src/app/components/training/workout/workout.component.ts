import { Component, OnInit } from '@angular/core';
import { ExerciseModel } from 'src/app/models/exercise-model.model';
import { WorkoutData } from 'src/app/models/workout-data.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogWorkoutComponent } from 'src/app/dialogues/dialog-workout/dialog-workout.component';
import { DialogEditWorkoutComponent } from 'src/app/dialogues/dialog-edit-workout/dialog-edit-workout.component';
import { DialogStartWorkoutComponent } from 'src/app/dialogues/dialog-start-workout/dialog-start-workout.component';
import { Sets } from 'src/app/models/sets.model';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit {
  workouts: WorkoutData[];
  wotype:Set<string>;
  constructor(public dialog: MatDialog) {
    //initialize dummy data
    this.workouts = [
      new WorkoutData('Biceps1', [
        new ExerciseModel('Curls', 'biceps curls','biceps',"Dumbell")
      ],new Sets([12,12,12],[30,30,30],60,[20,20,20]),"Gym"),
      
      new WorkoutData('Biceps1', [
        new ExerciseModel('Curls', 'biceps curls','biceps',"Dumbell")
      ],new Sets([12,12,12],[30,30,30],60,[20,20,20]),"Gym"),

      new WorkoutData('Biceps1', [
        new ExerciseModel('handstand', 'biceps curls','biceps',"Dumbell")
      ],new Sets([12,12,12],[30,30,30],60,[20,20,20]),"Calysthenics"),
    ];

    //loop over data to create top level tree structure
    this.wotype=new Set<string>();
    for(let w of this.workouts){
      this.wotype.add(w.type);
    }
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

  openEditWorkout() {
    const dialogRef = this.dialog.open(DialogEditWorkoutComponent, {
      width: '90%',
      height: '90%',
    });

    /**
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    */
  }

  openStartWorkout() {
    const dialogRef = this.dialog.open(DialogStartWorkoutComponent, {
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
