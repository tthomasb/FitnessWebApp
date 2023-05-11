import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStartWorkoutItemHistoryComponent } from './dialog-start-workout-item-history.component';

describe('DialogStartWorkoutItemHistoryComponent', () => {
  let component: DialogStartWorkoutItemHistoryComponent;
  let fixture: ComponentFixture<DialogStartWorkoutItemHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogStartWorkoutItemHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogStartWorkoutItemHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
