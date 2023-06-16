import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DataServiceService } from 'src/app/services/data-service.service';
import { WorkoutExercise } from 'src/app/models/models';
import { DialogWorkoutAddExerciseComponent } from '../dialog-workout/dialog-workout-add-exercise/dialog-workout-add-exercise.component';

@Component({
  selector: 'app-dialog-start-workout',
  templateUrl: './dialog-start-workout.component.html',
  styleUrls: ['./dialog-start-workout.component.scss']
})
export class DialogStartWorkoutComponent implements OnInit {

  workoutExercises!:WorkoutExercise[]

  constructor(@Inject (MAT_DIALOG_DATA) public data: any, public dataService: DataServiceService,
  public DialogRef:MatDialogRef<DialogStartWorkoutComponent>,public dialog: MatDialog, private changeRef:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.dataService.getWorkoutExerciseByWorkoutId(this.data.data.workout_id).subscribe((lambda)=>{this.workoutExercises = lambda})
  }

  // Open the Dialog to add an exercise
  addExercise() {
    const dialogRef = this.dialog.open(DialogWorkoutAddExerciseComponent, {
      width: '90%',
      height: '90%',
      minWidth: 370,
      data: {"workout_id":this.data.data.workout_id},
    });
    dialogRef.afterClosed().subscribe((e)=>{
      this.ngOnInit();
    })
  }
}
