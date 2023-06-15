import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-dialog-start-workout-time',
  templateUrl: './dialog-start-workout-time.component.html',
  styleUrls: ['./dialog-start-workout-time.component.scss'],
})

export class DialogStartWorkoutTimeComponent {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value!: number;
  time!: Date;
  begin!: Date;
  end!: Date;
  current!: Date;
  sub!: any;

  constructor(@Inject (MAT_DIALOG_DATA) public data: any ,public dataService: DataServiceService, private dialogRef: DialogRef<DialogStartWorkoutTimeComponent>) {
    this.beginnTimer(this.data.set.pause);
  }

  // Calculate the time
  calcTime(): void {
    this.current = new Date();
    let progress = this.current.getTime() - this.begin.getTime();
    let finish = this.end.getTime() - this.begin.getTime();
    this.value = (progress / finish) * 100;
    this.time = new Date(progress);

    if (this.value >= 100) {
      this.finishTime()
    }
  }

  // Start the timer
  beginnTimer(second: number): void {
    this.begin = new Date();
    this.end = new Date(new Date().getTime() + second * 1000);
    this.sub = setInterval(() => this.calcTime(), 250);
  }

  // Button to finish the time early (Just stop timer)
  // Get back that the Timer is finish so the window close automatactly
  finishTime() {
    clearInterval(this.sub)
    this.dialogRef.close()
  }

  changeTime(seconds: number) {
    this.end = new Date(this.end.getTime() + seconds * 1000);
  }
}
