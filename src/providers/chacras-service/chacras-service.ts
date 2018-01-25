import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

/*
  Generated class for the ChacrasServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChacrasServiceProvider {

	private urlAPI = 'http://localhost:3000/chacra';

	constructor(public http: Http) {
	}

	getAllChacras(){
		return this.http.get(this.urlAPI)
		.map(this.extractData)
		.do(res => console.log(res))
		.catch(this.catchError);
	}

	addNewChacra(chacra : any){
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		let options = new RequestOptions({
			headers: headers
		});

		return this.http.post(this.urlAPI, chacra, options)
		.do(res => console.log(res))
		.catch(this.catchError);
	}

	editChacra(chacra : any){
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		let options = new RequestOptions({
			headers: headers
		});

		return this.http.put(this.urlAPI + '/' + chacra.id, chacra, options)
		.do(res => console.log(res))
		.catch(this.catchError);
	}

	deleteChacra(chacraId : any){
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		let options = new RequestOptions({
			headers: headers
		});

		return this.http.delete(this.urlAPI + '/' + chacraId, options)
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
