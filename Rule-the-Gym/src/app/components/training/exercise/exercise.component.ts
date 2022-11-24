import { Component, OnInit } from '@angular/core';
import { ExerciseModel } from 'src/app/models/exercise-model.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogExerciseComponent } from 'src/app/dialogues/dialog-exercise/dialog-exercise.component';


@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
 exercises:ExerciseModel[];
 
 

  constructor(public dialog:MatDialog) { 
    
    this.exercises=[
      new ExerciseModel("Curls","biceps curls","Chest","Dumbell"),
      new ExerciseModel("Curls","biceps curls","biceps","Dumbell")
    ];
   
    
  }

  ngOnInit(): void {}

  /**
   * Open the workout dialog
   */
   getAccordionData(): any {
    const data:any = {
      "toLoop": this.exercises,
      "topLayer": 'muscle',
      "hasStart": false            
    };
    return data;
  }

    openEditExercise(index:number){      
      const dialogRef = this.dialog.open(DialogExerciseComponent, {
        width: '90%',
        height: '90%',
        data:{data: this.exercises, index:index, dialogName:"Edit"}
      });
    }

    openDeleteExercise(index:number){
      // const dialogRef = this.dialog.open(DialogExerciseComponent, {
      //   width: '90%',
      //   height: '90%',
      //   data:{data: this.exercises, index:index}
      // });
      console.log(this.exercises);
      this.exercises.splice(index,1);
      console.log(this.exercises);
    }

   openAddExercise() {
    const dialogRef = this.dialog.open(DialogExerciseComponent, {
      width: '90%',
      height: '90%',
      data:{data:this.exercises,dialogName:"Create"}
    } );
    /**
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    */
  }

  catchDialogEvent(value:any){
    switch(value.event){
      case"start":
      console.log("start Workout was called in exercise!")      
      break;
      case"edit":
      this.openEditExercise(value.source);      
      break;
      case"delete":
      this.openDeleteExercise(value.source);
      break;
    }
  }
}
