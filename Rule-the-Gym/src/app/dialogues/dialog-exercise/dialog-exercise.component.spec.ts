import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExerciseComponent } from './dialog-exercise.component';

describe('DialogExerciseComponent', () => {
  let component: DialogExerciseComponent;
  let fixture: ComponentFixture<DialogExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogExerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
