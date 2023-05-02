import { Component, OnInit, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { DialogStartWorkoutTimeComponent } from 'src/app/dialogues/dialog-start-workout/dialog-start-workout-time/dialog-start-workout-time.component';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { DataServiceService } from 'src/app/services/data-service.service';
import { WorkoutData } from 'src/app/models/workout-data.model';
import { Exercise, Set_History, WorkoutExercise } from 'src/app/models/models';
import { Dialog } from 'src/app/enums/dialog';

@Component({
  selector: 'app-dialog-start-workout',
  templateUrl: './dialog-start-workout.component.html',
  styleUrls: ['./dialog-start-workout.component.scss']
})
export class DialogStartWorkoutComponent implements OnInit {

  exercises: Exercise[] = [];
  workoutExercises!:WorkoutExercise[]
  setHistory:Set_History[] = [];
  
  constructor(@Inject (MAT_DIALOG_DATA) public data: any, public dataService: DataServiceService,
  public DialogRef:MatDialogRef<DialogStartWorkoutComponent>,public dialog: MatDialog) { }

  ngOnInit(): void {
    // console.log(this.data)
    this.dataService.getWorkoutExerciseByWorkoutId(this.data.data.workout_id)
    .subscribe((lambda)=>{this.workoutExercises = lambda})
  }

  // Open the dialog to set the start time
  startTime() {
    const dialogRef = this.dialog.open(DialogStartWorkoutTimeComponent, {
      width: '60%',
      height: '60%',
      data: {dialogName:Dialog.START}
    });
  }

  // Open the Dialog to add an exercise
  addExercise() {
    // const dialogRef = this.dialog.open(DialogWorkoutAddExerciseComponent, {
    //   width: '90%',
    //   height: '90%',
    //   data: {"workout_id":this.data.workout.workout_id},
    // });
    // dialogRef.afterClosed().subscribe((e)=>{
    //   this.ngOnInit();
    // })
  }

  loadSetHistoryData(index: number) {
    this.setHistory = []
    this.dataService
      .getSetsByWorkoutExerciseId(
        this.workoutExercises[index].workout_exercise_id
      )
      .subscribe((data) => {
        console.log(data)
        for(let set of data) {
          this.dataService.getSetHistoryBySetId(set.set_id)
          .subscribe((lambda)=>{this.setHistory.push(lambda)})
          this.setHistory.push()
        }
      });
  }

  // Safe History after start workout
  safeSetHistoryData() {        
    this.dataService.safeSetHistoryData(this.data.workout);
  }

  // Safe Data after add exercise -> Add to choose exercise
  safeWorkoutData() {        
    this.dataService.safeWorkout(this.data.workout);
  }

  // Catch the dialog event
  catchDialogEvent(value:any){
    switch(value.event){
      case Dialog.START:
      this.startTime();
      break;
      case Dialog.ADD:
      // this.addExercise(value.source);
      break;
    }
  }
}
