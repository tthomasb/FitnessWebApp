import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Exercise, Set_History, WorkoutExercise, Set } from 'src/app/models/models';
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
      data: {"workout_id":this.data.data.workout_id},
    });
    dialogRef.afterClosed().subscribe((e)=>{
      this.ngOnInit();
    })
  }

  // Safe History after start workout timer or finish workout
  // Need a fix (Siehe: DC Johannes)
  safeSetHistoryData() {
    // console.log()
    // this.dataService.safeSetHistoryData(this.set_History[index]);
  }
}
