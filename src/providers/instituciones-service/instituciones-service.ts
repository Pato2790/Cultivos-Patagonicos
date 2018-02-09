import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Constants from '../api-service/api-service';
import 'rxjs/Rx';

@Injectable()
export class InstitucionesServiceProvider {

	private urlAPI = Constants.urlAPI + '/institucion';

	constructor(public http: Http) {
	}

	getAllInstituciones(){
		return this.http.get(this.urlAPI)
		.map(this.extractData)
		.do(res => console.log(res))
		.catch(this.catchError);
	}

	addNewInstitucion(institucion : any){
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		let options = new RequestOptions({
			headers: headers
		});

		return this.http.post(this.urlAPI, institucion, options)
		.do(res => console.log(res))
		.catch(this.catchError);
	}

	editInstitucion(institucion : any){
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		let options = new RequestOptions({
			headers: headers
		});

		return this.http.put(this.urlAPI + '/' + institucion.id, institucion, options)
		.do(res => console.log(res))
		.catch(this.catchError);
	}

	deleteInstitucion(institucionId : any){
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		let options = new RequestOptions({
			headers: headers
		});

		return this.http.delete(this.urlAPI + '/' + institucionId, options)
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
