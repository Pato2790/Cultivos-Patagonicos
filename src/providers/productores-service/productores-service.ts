import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ProductoresServiceProvider {

	private urlAPI = 'http://localhost:3000/productor';

  	constructor(public http: Http) {
  	}

  	getAllProductores(){
  		return this.http.get(this.urlAPI)
  			.map(this.extractData)
        .do(res => console.log(res))
        .catch(this.catchError);
  	}

    addNewProductor(data : any){

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

    editProductor(productor : any){

      let headers = new Headers({
      'Content-Type': 'application/json'
      });

      let options = new RequestOptions({
        headers: headers
      });

      return this.http.put(this.urlAPI + '/' + productor.id, productor, options)
        .do(res => console.log(res))
        .catch(this.catchError);
    }

    deleteProductor(productorId : any){
      let headers = new Headers({
      'Content-Type': 'application/json'
      });

      let options = new RequestOptions({
        headers: headers
      });

      return this.http.delete(this.urlAPI + '/' + productorId, options)
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
