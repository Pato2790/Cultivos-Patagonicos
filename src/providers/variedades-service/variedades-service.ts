import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as Constants from '../api-service/api-service';
import 'rxjs/Rx';

@Injectable()
export class VariedadesServiceProvider {

	private urlAPI = Constants.urlAPI + '/variedad';

	constructor(public http: Http) {
	}

	getAllVariedades(especieId){
  		return this.http.get(this.urlAPI + '/' + especieId)
  		.map(this.extractData)
        .do(res => console.log(res))
        .catch(this.catchError);
  	}

  	private catchError(error : Response)
  	{
  		return Observable.throw(error.json().error || "Server Error");
  	}

  	private extractData(res: Response)
  	{
  		return res.json().data;
  	}
}
