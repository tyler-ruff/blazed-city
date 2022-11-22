import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdBodyComponent } from './md-body.component';

describe('MdBodyComponent', () => {
  let component: MdBodyComponent;
  let fixture: ComponentFixture<MdBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
