import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { LegacyProgressSpinnerMode as ProgressSpinnerMode } from '@angular/material/legacy-progress-spinner';
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
    console.log(this.data.set.pause)
    this.beginnTimer(this.data.set.pause);
  }

  ngOnInit(): void {
    // this.dataService.workoutGetTime(this.data.workout_id)
    // .subscribe((lambda)=>{this.workoutExercises = lambda; console.log(this.workoutExercises)})
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

  // Ideen: 
  // Time aus der Datenbank holen und als lokale Variable speichern, 
  // damit addTime() und removeTime() funktionieren

  // Button to finish the time early (Just stop timer or set timer = 0)
  finishTimeButton() {
    // Evtl. nicht notwendig (Besprechen mit den anderen)
    // time = 0
  }

  // Button to finish the time early (Just stop timer)
  // Get back that the Timer is finish so the window close automatactly
  finishTime() {
    clearInterval(this.sub)
    this.dialogRef.close()
    // Evtl. nicht notwendig (Besprechen mit den anderen)
  }

  changeTime(seconds: number) {
    this.end = new Date(this.end.getTime() + seconds * 1000);
  }
}
