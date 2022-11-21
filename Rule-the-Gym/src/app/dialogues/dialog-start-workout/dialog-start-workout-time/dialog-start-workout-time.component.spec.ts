import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStartWorkoutTimeComponent } from './dialog-start-workout-time.component';

describe('DialogStartWorkoutTimeComponent', () => {
  let component: DialogStartWorkoutTimeComponent;
  let fixture: ComponentFixture<DialogStartWorkoutTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogStartWorkoutTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogStartWorkoutTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
