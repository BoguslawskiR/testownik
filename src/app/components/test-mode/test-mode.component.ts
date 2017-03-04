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

    constructor(
      private _ts: TestsService,
      private _route: ActivatedRoute
    ){

    }

    ngOnInit(){
        this._route.params.switchMap(p=> this._ts.getTest(p["testId"])).subscribe(t => {
            this.test = t;
            console.log(this.test);
            this.getQuestion();
        })
    }

     getQuestion(){
        console.log("fnc")
        let rand = Math.floor((Math.random() * this.test.questions.length));
        this.question = this.test.questions[rand];
        console.log(this.question)
        this.checkVal=false;
    }

    check(){
        this.checkVal=true;
    }


}