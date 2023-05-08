import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
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

  constructor(public dataService: DataServiceService) {
    this.beginnTimer(3);
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
      clearInterval(this.sub);
    }
  }

  // Start the timer
  beginnTimer(second: number): void {
    this.begin = new Date();
    this.end = new Date(new Date().getTime() + second * 1000);
    this.sub = setInterval(() => this.calcTime(), 250);
  }

  // Button to finish the time early
  finishTime() {
    
  }

  // Get the Time Data from workoutGetTime.js
  loadExerciseTimeData() {
    
  }

  // Get back that the Timer is finish so the window close automatactly
  safeTimerData() {        
    
  }
}
