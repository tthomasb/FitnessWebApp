import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogWorkoutAddExerciseComponent } from 'src/app/dialogues/dialog-workout/dialog-workout-add-exercise/dialog-workout-add-exercise.component';
import { WorkoutData } from 'src/app/models/workout-data.model';

@Component({
  selector: 'app-dialog-workout',
  templateUrl: './dialog-workout.component.html',
  styleUrls: ['./dialog-workout.component.scss'],
})
export class DialogWorkoutComponent implements OnInit {
  @Input() data!:WorkoutData
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addExercise() {
    const dialogRef = this.dialog.open(DialogWorkoutAddExerciseComponent, {
      width: '90%',
      height: '90%',
      data: {workout: this.data}
    });
  }
}
