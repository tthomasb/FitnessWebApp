import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dialog } from 'src/app/enums/dialog';
import { DataServiceService } from 'src/app/services/data-service.service';
import { DialogEditWorkoutComponent } from '../../dialog-edit-workout/dialog-edit-workout.component';
import { Exercise } from 'src/app/models/models';

@Component({
  selector: 'app-dialog-workout-add-exercise',
  templateUrl: './dialog-workout-add-exercise.component.html',
  styleUrls: ['./dialog-workout-add-exercise.component.scss'],
})
export class DialogWorkoutAddExerciseComponent implements OnInit {
  @Input() search: string = '';
  Allexercises: Exercise[]=[];
  dataService:DataServiceService;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public MatDialogRef: MatDialogRef<DialogEditWorkoutComponent>,
    public dialog: MatDialog, dataService:DataServiceService
  ) {
    this.dataService=dataService;
    this.dataService.getAllExercises().subscribe((data)=>{
      	this.Allexercises=data;
    });
  }

  ngOnInit(): void {
    
  }

  // Get Data for Accordion
  getAccordionData(): any {
    const data: any = {
      toLoop: this.Allexercises,
      topLayer: 'muscle',
      type: Dialog.ADD,
    };
    return data;
  }

  // Catch Dialog Event
  catchDialogEvent(value: any) {
    switch (value.event) {
      case Dialog.START:
        break;
      case Dialog.EDIT:
        break;
      case Dialog.DELETE:
        break;
      case Dialog.ADD:              
        this.AddExercise(value.source);
    }
  }

  AddExercise(index:number){     
    this.dataService.createWorkoutExercise(this.data.workout_id,this.Allexercises[index].exercise_id).subscribe((data)=>{
    });    
  }
}
