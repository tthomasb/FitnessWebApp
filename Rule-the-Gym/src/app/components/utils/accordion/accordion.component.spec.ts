import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from './accordion.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { By } from '@angular/platform-browser';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  let dialogEventSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatCardModule, MatButtonModule, MatDialogModule, BrowserAnimationsModule, MatExpansionModule ],
      declarations: [ AccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    component.Data = {
      toLoop: [
        { workoutname: 'Workout 1', type: 'type 1', topLayer: 'Layer 1' },
        { workoutname: 'Workout 2', type: 'type 2', topLayer: 'Layer 2' },
        { exercisename: 'Exercise 1', description: 'desc 1', topLayer: 'Layer 1' },
        { exercisename: 'Exercise 2', description: 'desc 2', topLayer: 'Layer 2' }
      ],
      topLayer: 'topLayer1',
      type: 'start'
    };
    dialogEventSpy = spyOn(component.dialogEvent, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
