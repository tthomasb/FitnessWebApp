import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DialogStartWorkoutTimeComponent } from './dialog-start-workout-time.component';

describe('DialogStartWorkoutTimeComponent', () => {
  let component: DialogStartWorkoutTimeComponent;
  let fixture: ComponentFixture<DialogStartWorkoutTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatProgressSpinnerModule ],
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

  it('should start timer when component is created', () => {
    expect(component.beginnTimer).toBeTruthy();
  });
});
