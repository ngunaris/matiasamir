import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCompletoComponent } from './blog-completo.component';

describe('BlogCompletoComponent', () => {
  let component: BlogCompletoComponent;
  let fixture: ComponentFixture<BlogCompletoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogCompletoComponent]
    });
    fixture = TestBed.createComponent(BlogCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
