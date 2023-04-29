import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddNutritionComponent } from './dialog-add-nutrition.component';

describe('DialogAddNutritionComponent', () => {
  let component: DialogAddNutritionComponent;
  let fixture: ComponentFixture<DialogAddNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddNutritionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
