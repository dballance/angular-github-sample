import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoPreviewComponent } from './repo-preview.component';

describe('RepoPreviewComponent', () => {
  let component: RepoPreviewComponent;
  let fixture: ComponentFixture<RepoPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
