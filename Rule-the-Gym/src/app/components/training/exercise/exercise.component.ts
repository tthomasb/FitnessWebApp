import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ExerciseModel } from 'src/app/models/exercise-model.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogExerciseComponent } from 'src/app/dialogues/dialog-exercise/dialog-exercise.component';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  exercises: ExerciseModel[];

  Musclegroup = this._formBuilder.group({
    chest: false,
    back: false,
    arms: false,
    biceps: false,
  });

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {
    this.exercises = [
      new ExerciseModel('Curls', 'biceps curls', 5, 4, 60, 'biceps'),
      new ExerciseModel('Curls', 'biceps curls', 5, 4, 60, 'biceps'),
    ];
  }

  ngOnInit(): void {}

  /**
   * Open the workout dialog
   */
   openAddExercise() {
    const dialogRef = this.dialog.open(DialogExerciseComponent, {
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
