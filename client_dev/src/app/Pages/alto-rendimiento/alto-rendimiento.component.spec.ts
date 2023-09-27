import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltoRendimientoComponent } from './alto-rendimiento.component';

describe('AltoRendimientoComponent', () => {
  let component: AltoRendimientoComponent;
  let fixture: ComponentFixture<AltoRendimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltoRendimientoComponent]
    });
    fixture = TestBed.createComponent(AltoRendimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
