import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamAnsComponent } from './exam-ans.component';

describe('ExamAnsComponent', () => {
  let component: ExamAnsComponent;
  let fixture: ComponentFixture<ExamAnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamAnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
