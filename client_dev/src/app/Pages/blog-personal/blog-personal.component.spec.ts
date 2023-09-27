import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPersonalComponent } from './blog-personal.component';

describe('BlogPersonalComponent', () => {
  let component: BlogPersonalComponent;
  let fixture: ComponentFixture<BlogPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPersonalComponent]
    });
    fixture = TestBed.createComponent(BlogPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
