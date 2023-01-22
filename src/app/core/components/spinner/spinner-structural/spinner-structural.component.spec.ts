import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerStructuralComponent } from './spinner-structural.component';

describe('SpinnerStructuralComponent', () => {
  let component: SpinnerStructuralComponent;
  let fixture: ComponentFixture<SpinnerStructuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerStructuralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerStructuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
