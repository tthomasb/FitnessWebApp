import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

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

  constructor() {
    this.beginnTimer(3);
  }

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

  beginnTimer(second: number): void {
    this.begin = new Date();
    this.end = new Date(new Date().getTime() + second * 1000);
    this.sub = setInterval(() => this.calcTime(), 250);
  }
}
