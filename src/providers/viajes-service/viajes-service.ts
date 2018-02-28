import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as Constants from '../api-service/api-service';
import 'rxjs/Rx';

@Injectable()
export class ViajesServiceProvider {

	private urlAPI = Constants.urlAPI + '/viaje';

	constructor(public http: Http) {
	}

	getAllViajes(){
  		return this.http.get(this.urlAPI)
  		.map(this.extractData)
        .do(res => console.log(res))
        .catch(this.catchError);
  	}

  	addNewViaje(data : any){

  	  let headers = new Headers({
  	  'Content-Type': 'application/json'
  	  });

  	  let options = new RequestOptions({
  	    headers: headers
  	  });

  	  return this.http.post(this.urlAPI, data, options)
  	    .do(res => console.log(res))
  	    .catch(this.catchError);
  	}

    addNewViajeWithIngresos(data : any){

      let headers = new Headers({
      'Content-Type': 'application/json'
      });

      let options = new RequestOptions({
        headers: headers
      });

      return this.http.post(this.urlAPI + '/withIngresos', data, options)
        .do(res => console.log(res))
        .catch(this.catchError);
    }

  	editViaje(viaje : any){

  	  let headers = new Headers({
  	  'Content-Type': 'application/json'
  	  });

  	  let options = new RequestOptions({
  	    headers: headers
  	  });

  	  return this.http.put(this.urlAPI + '/' + viaje.id, viaje, options)
  	    .do(res => console.log(res))
  	    .catch(this.catchError);
  	}

  	deleteViaje(viajeId : any){
  	  let headers = new Headers({
  	  'Content-Type': 'application/json'
  	  });

  	  let options = new RequestOptions({
  	    headers: headers
  	  });

  	  return this.http.delete(this.urlAPI + '/' + viajeId, options)
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
