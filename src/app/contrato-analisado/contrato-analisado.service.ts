import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ContratoService {

  constructor(private _http: Http) { }

  listarAnalise(){
    let headers = new Headers();

    headers.append('Authorization', 'Basic ' +
      btoa('e35e3763-dc99-464e-8d5d-c09af4a7c586:TF6yKEiUoPQh'));
    
    return this._http.get('https://gateway.watsonplatform.net/retrieve-and-rank/api/v1/solr_clusters/sc3542da4a_07e1_499b_a2c9_54ea8c682ab9/solr/contratoGoogle/select?q=propriedade intelectual&wt=json',
          {
            headers: headers
          }
        )
        .map((res: Response ) => {
            return res.json().response.docs
        })
        .catch((error: any) => Observable.throw( console.log(error) || 'Server error'));

    
  }
    

}
