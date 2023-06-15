import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Set_History, Set } from 'src/app/models/models';
import { DialogStartWorkoutTimeComponent } from '../../dialog-start-workout-time/dialog-start-workout-time.component';
import { MatButton } from '@angular/material/button';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-dialog-start-workout-item-history',
  templateUrl: './dialog-start-workout-item-history.component.html',
  styleUrls: ['./dialog-start-workout-item-history.component.scss']
})

export class DialogStartWorkoutItemHistoryComponent {
  @Input() history?:Set_History
  @Input() index!: number;
  @Input() set!: Set;
  sets: Set[] = [
    { set_id: 0, workout_exercise_id: 0, reps: 0, weight: 0, pause: 0 },
  ];
  @ViewChild("finish") finishButton?:MatButton
  newHistory!:Set_History

  constructor(public dialog: MatDialog, public dataService:DataServiceService) {}
  
  ngOnInit(): void {
   this.newHistory={set_id:0,set_history_id:0,reps:0,weight:0,record_time:new Date()}
   if(this.history)   {
    this.newHistory=this.history;
   }
  }

  // Open the dialog to set the start time
  startTime() {
    const dialogRef = this.dialog.open(DialogStartWorkoutTimeComponent, {
      width: '300px',
      height: '300px',
      data: {"set":this.set} 
    });
    this.finishButton!.disabled = true
    this.dataService.safeSetHistoryData(this.newHistory,this.set?.set_id);
  }  
}
