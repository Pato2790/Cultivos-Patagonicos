import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Constants from '../api-service/api-service';
import 'rxjs/Rx';

@Injectable()
export class LotesServiceProvider {

	private urlAPI = Constants.urlAPI + '/lote';

	constructor(public http: Http) {
	}

  	getAllLotes(){
		return this.http.get(this.urlAPI)
		.map(this.extractData)
		.do(res => console.log(res))
		.catch(this.catchError);
	}

	addNewLote(lote : any){
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		let options = new RequestOptions({
			headers: headers
		});

		return this.http.post(this.urlAPI, lote, options)
		.do(res => console.log(res))
		.catch(this.catchError);
	}

	editLote(lote : any){
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		let options = new RequestOptions({
			headers: headers
		});

		return this.http.put(this.urlAPI + '/' + lote.id, lote, options)
		.do(res => console.log(res))
		.catch(this.catchError);
	}

	deleteLote(loteId : any){
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		let options = new RequestOptions({
			headers: headers
		});

		return this.http.delete(this.urlAPI + '/' + loteId, options)
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
