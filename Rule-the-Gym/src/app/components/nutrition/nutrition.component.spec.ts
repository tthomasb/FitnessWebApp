import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { NutritionComponent } from './nutrition.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { DialogAddNutritionComponent } from 'src/app/dialogues/dialog-add-nutrition/dialog-add-nutrition.component';
import { Dialog } from 'src/app/enums/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('NutritionComponent', () => {
  let component: NutritionComponent;
  let fixture: ComponentFixture<NutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatDialogModule, MatTabsModule, BrowserAnimationsModule, MatCardModule, MatDividerModule, MatListModule, MatIconModule, MatFormFieldModule ],
      declarations: [ NutritionComponent, DialogAddNutritionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open add nutrition dialog', () => {
    const dialogSpy = spyOn(component.dialog, 'open').and.callThrough();
    component.openAddNutritionDialog();
    expect(dialogSpy).toHaveBeenCalledWith(DialogAddNutritionComponent, jasmine.objectContaining({
      width: '90%',
      height: '90%',
      data: { dialogName: Dialog.ADD }
    }));
  });

  it('should return an array of days for a given month', () => {
    const component = TestBed.createComponent(NutritionComponent).componentInstance;
    const days = component.getDays(2); // February
    expect(days).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]);
  });
  
});
