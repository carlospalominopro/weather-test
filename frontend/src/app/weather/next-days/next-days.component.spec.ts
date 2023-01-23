import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextDaysComponent } from './next-days.component';

describe('NextDaysComponent', () => {
  let component: NextDaysComponent;
  let fixture: ComponentFixture<NextDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextDaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
