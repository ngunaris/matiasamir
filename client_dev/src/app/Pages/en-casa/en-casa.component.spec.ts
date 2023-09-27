import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnCasaComponent } from './en-casa.component';

describe('EnCasaComponent', () => {
  let component: EnCasaComponent;
  let fixture: ComponentFixture<EnCasaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnCasaComponent]
    });
    fixture = TestBed.createComponent(EnCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
