import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogStartWorkoutItemComponent } from './dialog-start-workout-item.component';

describe('DialogStartWorkoutItemComponent', () => {
  let component: DialogStartWorkoutItemComponent;
  let fixture: ComponentFixture<DialogStartWorkoutItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogStartWorkoutItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogStartWorkoutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
