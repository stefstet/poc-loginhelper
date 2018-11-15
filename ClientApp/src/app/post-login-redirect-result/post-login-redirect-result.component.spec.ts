import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLoginRedirectResultComponent } from './post-login-redirect-result.component';

describe('PostLoginRedirectResultComponent', () => {
  let component: PostLoginRedirectResultComponent;
  let fixture: ComponentFixture<PostLoginRedirectResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostLoginRedirectResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLoginRedirectResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
