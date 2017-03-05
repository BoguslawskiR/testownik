import { Component, OnInit } from '@angular/core';
import { TestsService } from '../../services/tests.service';
import { Router, ActivatedRoute } from '@angular/router'
import 'rxjs';

@Component({
  selector: 'test',
  templateUrl: './test-mode.component.html',
  styleUrls: ['./test-mode.component.css']
})
export class TestComponent implements OnInit {

    private test
    private question;
    private checkVal;
    private result = []

    constructor(
      private _ts: TestsService,
      private _route: ActivatedRoute
    ){

    }

    ngOnInit(){
        this._route.params.switchMap(p=> this._ts.getTest(p["testId"])).subscribe(t => {
            this.test = t;

            this.getQuestion();
        })
    }

     getQuestion(){

        let rand = Math.floor((Math.random() * this.test.questions.length));
        this.question = this.test.questions[rand];
        
        this.checkVal=false;

        this.result = []
    }

    check(){
        this.checkVal=true;
        console.log(this.question.answers)
        this.question.answers.forEach(x=>{
            if(x.checked == true && x.is_correct == false) this.result.push('e');
            if(x.checked != true && x.is_correct == true) this.result.push('e');
        })
        console.log(this.result)


    }

    changeVal(i){
        if(this.question.answers[i].checked == true){
            this.question.answers[i].checked = false;
        } else {
            this.question.answers[i].checked = true;
        }

    }


}