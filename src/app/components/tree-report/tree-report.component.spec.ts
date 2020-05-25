import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeReportComponent } from './tree-report.component';

describe('TreeReportComponent', () => {
  let component: TreeReportComponent;
  let fixture: ComponentFixture<TreeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
