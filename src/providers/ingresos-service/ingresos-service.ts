import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Constants from '../api-service/api-service';
import 'rxjs/Rx';

@Injectable()
export class IngresosServiceProvider {

  private urlAPI = Constants.urlAPI + '/ingreso';

  constructor(public http: Http) {
    
  }

  getAllIngresos(){
  	return this.http.get(this.urlAPI)
  	.map(this.extractData)
  	.do(res => console.log(res))
  	.catch(this.catchError);
  }

  getAllSimplifyIngresos(){
    return this.http.get(this.urlAPI + '/simplifyIngresos')
    .map(this.extractData)
    .do(res => console.log(res))
    .catch(this.catchError);
  }

  getAllIngresosWithViajes(ingresoId){
    return this.http.get(this.urlAPI + '/withViajes/' + ingresoId)
    .map(this.extractData)
    .do(res => console.log(res))
    .catch(this.catchError);
  }

  addNewIngreso(ingreso : any){
  	let headers = new Headers({
  		'Content-Type': 'application/json'
  	});

  	let options = new RequestOptions({
  		headers: headers
  	});

  	return this.http.post(this.urlAPI, ingreso, options)
  	.do(res => console.log(res))
  	.catch(this.catchError);
  }

  editIngreso(ingreso : any){
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({
      headers: headers
    });

    return this.http.put(this.urlAPI + '/' + ingreso.id, ingreso, options)
    .do(res => console.log(res))
    .catch(this.catchError);
  }

  deleteIngreso(ingresoId : any){
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({
      headers: headers
    });

    return this.http.delete(this.urlAPI + '/' + ingresoId, options)
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
