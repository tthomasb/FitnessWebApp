import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAskDeleteComponent } from './dialog-ask-delete.component';

describe('DialogAskDeleteComponent', () => {
  let component: DialogAskDeleteComponent;
  let fixture: ComponentFixture<DialogAskDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAskDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAskDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
