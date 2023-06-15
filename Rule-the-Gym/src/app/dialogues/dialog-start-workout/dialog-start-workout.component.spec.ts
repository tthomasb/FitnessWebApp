import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogStartWorkoutComponent } from './dialog-start-workout.component';

describe('DialogStartWorkoutComponent', () => {
  let component: DialogStartWorkoutComponent;
  let fixture: ComponentFixture<DialogStartWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogStartWorkoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogStartWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
