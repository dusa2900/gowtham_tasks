import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/service/exam.service';

@Component({
  selector: 'app-exam-ans',
  templateUrl: './exam-ans.component.html',
  styleUrls: ['./exam-ans.component.css']
})
export class ExamAnsComponent implements OnInit {
  public countNo: number = 0;
  public username: string = '';
  public id: number = 0;
  public myAttmptedAns: any;
  public correctAns: any;
  constructor(private exam: ExamService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe((x) => {
      console.log(x);
      this.username = x.username;
      this.exam.getResultById(x.id).subscribe((x) => {
        console.log("myans", x.myAnswers)
        this.myAttmptedAns = x.myAnswers
        this.exam.getCorrectAnswers().subscribe(x => {
          this.correctAns = x;
          for (let key in this.correctAns) {
            console.log(key);
            if (this.correctAns[key] == this.myAttmptedAns[key])
              this.countNo++;
          }
        });
      });
    });
  }

}
