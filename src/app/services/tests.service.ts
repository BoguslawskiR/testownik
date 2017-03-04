import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestsService {

    public apiURL = 'https://testownikpwr.herokuapp.com/api/';

    constructor(
        private _http: Http
    ) { 

    }

    public getAllTests(){
        const url = this.apiURL+'tests/';
        let headers: Headers = new Headers({ 
            'Content-Type': 'application/json',
     });
        let options = new RequestOptions({ headers: headers });
        return this._http.get(url, options).map(tests => tests.json());
    }

    public getTest(id){
        const url = this.apiURL+'tests/'+id+'/';
        let headers: Headers = new Headers({ 
            'Content-Type': 'application/json',
     });
        let options = new RequestOptions({ headers: headers });
        return this._http.get(url, options).map(test => test.json());
    }
}