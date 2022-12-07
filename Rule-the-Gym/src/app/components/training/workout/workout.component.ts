import { Component, OnInit } from '@angular/core';
import { ExerciseModel } from 'src/app/models/exercise-model.model';
import { WorkoutData } from 'src/app/models/workout-data.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogWorkoutComponent } from 'src/app/dialogues/dialog-workout/dialog-workout.component';
import { DialogEditWorkoutComponent } from 'src/app/dialogues/dialog-edit-workout/dialog-edit-workout.component';
import { DialogStartWorkoutComponent } from 'src/app/dialogues/dialog-start-workout/dialog-start-workout.component';
import { Dialog } from 'src/app/enums/dialog';
import { DialogAskDeleteComponent } from 'src/app/dialogues/dialog-ask-delete/dialog-ask-delete/dialog-ask-delete.component';
import { ExerciseDataModel } from 'src/app/models/exercise-data-model.model';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit {
  workouts: WorkoutData[];
  typestring: string = 'type';
  accordionConfig: any;
  constructor(public dialog: MatDialog) {
    //initialize dummy data        
    let testmap=new Map([[new ExerciseModel('handstand', 'biceps curls', 'biceps', 'Dumbells'),new ExerciseDataModel(["3"],["8 -12"],["30"],["20"])]]);
    this.workouts = [
      new WorkoutData(
        'Push',
        'Workout1',
        'Gym',
        new Map([[new ExerciseModel('Bench Press', 'Push dumbells up', 'Chest', 'Dumbells'),
        new ExerciseDataModel(["3"],["8 -12"],["30"],["20"])]]),
        ),

      new WorkoutData(
        'Pull',
        'Workout1',
        'Gym',
        new Map([[new ExerciseModel('Rows', 'Pull the weight to you', 'Back', 'Dumbells'),
        new ExerciseDataModel(["3"],["8 -12"],["30"],["20"])]]),
        ),
        
      new WorkoutData(
        'Legs',
        'Workout1',
        'Calysthenics',
        new Map([[new ExerciseModel('Squat', 'Push yourself away from floor', 'Legs', 'Barbell'),
        new ExerciseDataModel(["3"],["8 -12"],["30"],["20"])]]),
        )
      ];

    
  }

  ngOnInit(): void {
    //set accordionConfig
    this.accordionConfig = this.getAccordionData();
  }

  //Get The Accordion Data
  getAccordionData(): any {
    const data:any = {
      "toLoop": this.workouts,
      "topLayer": 'type',      
      "type": Dialog.START,      
    };
    return data;
  }
  /**
   * Open the workout dialog
   */
  openAddWorkout() {
    const dialogRef = this.dialog.open(DialogWorkoutComponent, {
      width: '90%',
      height: '90%',
      data:{data:this.workouts, dialogName:Dialog.CREATE}
    });

    /**
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    */
  }

  openEditWorkout(index:number) {
    const dialogRef = this.dialog.open(DialogEditWorkoutComponent, {
      width: '90%',
      height: '90%',
      data:{workouts:this.workouts, index:index, dialogName:Dialog.EDIT}
    });

    console.log(index)
    /**
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    */
  }
  openDeleteWorkout(index:number) {
    const dialogRef = this.dialog.open(DialogAskDeleteComponent, {
      width: '20%',
      height: '16%',
      data:{workouts:this.workouts, index:index}
    });
    const sub = dialogRef.componentInstance.Emitter.subscribe((e) => {
      if(e)this.deleteWorkout(index);
    });
    dialogRef.afterClosed().subscribe(() => {
      dialogRef.componentInstance.Emitter.unsubscribe();
    })
  }

  openStartWorkout(index:number) {
    const dialogRef = this.dialog.open(DialogStartWorkoutComponent, {
      width: '90%',
      height: '90%',
      data: {data: this.workouts[index], dialogName:Dialog.START}
    });
    /**
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    */
  }
  deleteWorkout(index:number) {
    this.workouts.splice(index, 1);
  }
  catchDialogEvent(value:any){
    switch(value.event){
      case Dialog.START:
      console.log("start caught");
      this.openStartWorkout(value.source);
      break;
      case Dialog.EDIT:
      this.openEditWorkout(value.source);
      break;
      case Dialog.DELETE:
      this.openDeleteWorkout(value.source);
      break;
    }
  }

}
// function getAccordionData() {
//   throw new Error('Function not implemented.');
// }
