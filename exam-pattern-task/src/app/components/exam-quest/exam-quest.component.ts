import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/interface/question';
import { ExamService } from 'src/app/service/exam.service';


@Component({
  selector: 'app-exam-quest',
  templateUrl: './exam-quest.component.html',
  styleUrls: ['./exam-quest.component.css']
})
export class ExamQuestComponent implements OnChanges {

  @Input() question:number = 1;
  @Output() answers:EventEmitter<any> = new EventEmitter<any>()
  public questions:Question | undefined;
  constructor(private exam:ExamService) { }

  ngOnChanges(): void {
    this.exam.getQuestions(this.question).subscribe(x=>{ console.log(x);this.questions=x[0];})
  }
  
  public testAnswers:any = {}
  
  getAnswer(test:any,id:number) {
    this.testAnswers[id] = test.target.value;
    console.log(this.testAnswers);
    this.answers.emit(this.testAnswers)
  }
}
