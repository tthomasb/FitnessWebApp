import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionComponent } from './nutrition.component';

describe('NutritionComponent', () => {
  let component: NutritionComponent;
  let fixture: ComponentFixture<NutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
