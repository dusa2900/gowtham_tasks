import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamQuestComponent } from './exam-quest.component';

describe('ExamQuestComponent', () => {
  let component: ExamQuestComponent;
  let fixture: ComponentFixture<ExamQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamQuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
