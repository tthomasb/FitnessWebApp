import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Set_History, Set } from 'src/app/models/models';
import { DialogStartWorkoutTimeComponent } from '../../dialog-start-workout-time/dialog-start-workout-time.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-dialog-start-workout-item-history',
  templateUrl: './dialog-start-workout-item-history.component.html',
  styleUrls: ['./dialog-start-workout-item-history.component.scss']
})
export class DialogStartWorkoutItemHistoryComponent {

  @Input() history?:Set_History
  @Input() set?: Set;
  @ViewChild("finish") finishButton?:MatButton
  newHistory!:Set_History

  constructor(public dialog: MatDialog) {}
  
  ngOnInit(): void {
   this.newHistory={set_id:0,set_history_id:0,reps:0,weight:0,record_time:new Date()}
   console.log(this.newHistory)
  }

  // Open the dialog to set the start time
  startTime() {
    const dialogRef = this.dialog.open(DialogStartWorkoutTimeComponent, {
      width: '60%',
      height: '60%',
      data: {"set":this.set} 
    });
    this.finishButton!.disabled = true
  }
  //todo add a set_history
}
