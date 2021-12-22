import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/interface/question';
import { ExamService } from 'src/app/service/exam.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


questionNo: number = 1;
questions: Question[] = [];
username: string = ""
  constructor(private exam:ExamService,private router:Router,private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
   this.exam.getNoofQuestions().subscribe(res=>{console.log(res);this.questions=res});
    this.actRoute.params.subscribe(res=>this.username=res.username);
  }
  public answerObject: string[] = []

  getAnswersArray(obj:any) {
    this.answerObject = obj
  }

  postResult(){
   this.exam.postResult(this.answerObject).subscribe(res=>{
        this.router.navigate(['examans/'+this.username+"/"+res.id])
    });
    
  }


}
