import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAreasComponent } from './all-areas.component';

describe('AllAreasComponent', () => {
  let component: AllAreasComponent;
  let fixture: ComponentFixture<AllAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
