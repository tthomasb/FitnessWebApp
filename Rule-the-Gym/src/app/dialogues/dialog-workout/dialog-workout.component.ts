import { Component, OnInit, Input } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
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

  // Open the dialog to add an exercise
  addExercise() {
    const dialogRef = this.dialog.open(DialogWorkoutAddExerciseComponent, {
      width: '90%',
      height: '90%',
      data: {workout: this.data}
    });
  }
}
