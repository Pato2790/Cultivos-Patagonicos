import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class IngresosServiceProvider {

  private urlAPI = 'http://localhost:3000/ingreso';

  constructor(public http: Http) {
    
  }

  getAllIngresos(){
  	return this.http.get(this.urlAPI)
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

  private catchError(error : Response)
  {
  	return Observable.throw(error.json().error || "Server Error");
  }

  private extractData(res: Response)
  {
  	return res.json().data;
  }

}
