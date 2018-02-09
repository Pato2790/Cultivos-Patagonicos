import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Constants from '../api-service/api-service';
import 'rxjs/Rx';

@Injectable()
export class CamionesServiceProvider {

	private urlAPI = Constants.urlAPI + '/camion';

	constructor(public http: Http) {

	}

	getAllCamiones(){
		return this.http.get(this.urlAPI)
		.map(this.extractData)
		.do(res => console.log(res))
		.catch(this.catchError);
	}

	addNewCamion(camion : any){
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		let options = new RequestOptions({
			headers: headers
		});

		return this.http.post(this.urlAPI, camion, options)
		.do(res => console.log(res))
		.catch(this.catchError);
	}

	editCamion(camion : any){
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		let options = new RequestOptions({
			headers: headers
		});

		return this.http.put(this.urlAPI + '/' + camion.id, camion, options)
		.do(res => console.log(res))
		.catch(this.catchError);
	}

	deleteCamion(camionId : any){
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		let options = new RequestOptions({
			headers: headers
		});

		return this.http.delete(this.urlAPI + '/' + camionId, options)
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
