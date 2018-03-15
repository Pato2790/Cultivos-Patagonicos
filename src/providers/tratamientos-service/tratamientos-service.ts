import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Constants from '../api-service/api-service';
import 'rxjs/Rx';

@Injectable()
export class TratamientosServiceProvider {

	private urlAPI = Constants.urlAPI + '/tratamiento';

	constructor(public http: Http) {
	}

    getAllTratamientos(){
  		return this.http.get(this.urlAPI)
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
