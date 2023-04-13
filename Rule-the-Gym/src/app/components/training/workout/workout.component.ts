import { Component, OnInit } from '@angular/core';
import { ExerciseModel } from 'src/app/models/exercise-model.model';
import { WorkoutData } from 'src/app/models/workout-data.model';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { DialogWorkoutComponent } from 'src/app/dialogues/dialog-workout/dialog-workout.component';
import { DialogEditWorkoutComponent } from 'src/app/dialogues/dialog-edit-workout/dialog-edit-workout.component';
import { DialogStartWorkoutComponent } from 'src/app/dialogues/dialog-start-workout/dialog-start-workout.component';
import { Dialog } from 'src/app/enums/dialog';
import { DialogAskDeleteComponent } from 'src/app/dialogues/dialog-ask-delete/dialog-ask-delete/dialog-ask-delete.component';
import { ExerciseDataModel } from 'src/app/models/exercise-data-model.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit {
  workouts: WorkoutData[];
  typestring: string = 'type';
  accordionConfig: any;
  dataService:DataServiceService;
  constructor(dataService:DataServiceService ,public dialog: MatDialog) {
    //initialize dummy data        
    this.dataService=dataService;
    this.workouts = this.dataService.getAllWorkouts();    
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
    //TODO Fix this
    //create an empty workout
    let newWorkout=new WorkoutData("","","",new Map([[new ExerciseModel(0, 0, '', '','',''),    
    new ExerciseDataModel("","","","")]]));
    this.workouts.push(newWorkout);
    newWorkout.exerciseMap.clear();
    console.log(this.workouts);

    //Open dialog with empty workout
    const dialogRef = this.dialog.open(DialogEditWorkoutComponent, {
      width: '90%',
      height: '90%',
      data:{workout:newWorkout, dialogName:Dialog.CREATE}
    });    
     dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
     });
   
  }

  openEditWorkout(index:number) {
    const dialogRef = this.dialog.open(DialogEditWorkoutComponent, {
      width: '90%',
      height: '90%',
      data:{workout:this.workouts[index], dialogName:Dialog.EDIT}
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
     });
    console.log(index)   
  }
  openDeleteWorkout(index:number) {
    const dialogRef = this.dialog.open(DialogAskDeleteComponent, {
      width: '20%',
      height: '25%',
      data:{workouts:this.workouts, index:index}
    });
    const sub = dialogRef.componentInstance.Emitter.subscribe((e) => {
      if(e)this.deleteWorkout(index);
      this.ngOnInit();
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
