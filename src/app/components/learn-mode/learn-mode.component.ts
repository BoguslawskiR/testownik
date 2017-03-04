import { Component, OnInit } from '@angular/core';
import { TestsService } from '../../services/tests.service';
import { Router, ActivatedRoute } from '@angular/router'
import 'rxjs';

@Component({
  selector: 'learn',
  templateUrl: './learn-mode.component.html',
  styleUrls: ['./learn-mode.component.css']
})
export class LearnComponent implements OnInit {

    private test


    constructor(
      private _ts: TestsService,
      private _route: ActivatedRoute
    ){

    }

    ngOnInit(){
        this._route.params.switchMap(p=> this._ts.getTest(p["testId"])).subscribe(t => {
            this.test = t;
            console.log(this.test);
            
        })
    }

   

}