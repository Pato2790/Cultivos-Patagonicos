import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Constants from '../api-service/api-service';
import 'rxjs/Rx';

@Injectable()
export class CuadrosServiceProvider {

	private urlAPI = Constants.urlAPI + '/cuadro';

	constructor(public http: Http) {
	}

	getAllCuadros(){
		return this.http.get(this.urlAPI)
		.map(this.extractData)
		.do(res => console.log(res))
		.catch(this.catchError);
	}

	addNewCuadro(cuadro : any){
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		let options = new RequestOptions({
			headers: headers
		});

		return this.http.post(this.urlAPI, cuadro, options)
		.do(res => console.log(res))
		.catch(this.catchError);
	}

	editCuadro(cuadro : any){
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		let options = new RequestOptions({
			headers: headers
		});

		return this.http.put(this.urlAPI + '/' + cuadro.id, cuadro, options)
		.do(res => console.log(res))
		.catch(this.catchError);
	}

	deleteCuadro(cuadroId : any){
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		let options = new RequestOptions({
			headers: headers
		});

		return this.http.delete(this.urlAPI + '/' + cuadroId, options)
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
