import { Http, Response, Headers} from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ChatService {

  contexto: string;

  constructor(private _http: Http) { 
    this.contexto = null;
  }
  
  conversar(texto: string) {
    if (this.contexto !== null) {
      return this.conversarComContexto(texto);
    }else {
      return this.conversarsemContexto(texto);
    }
  }
  
  conversarComContexto(texto: string) {
    let headers = new Headers();

    headers.append('Authorization', 'Basic ' +
      btoa('fd34e2f1-91da-44c0-9aae-32b635bddbce:vHf24bFfNkOb'));
    headers.append('Content-Type', 'application/json');

    return this._http.post(
      'https://gateway.watsonplatform.net/conversation/api/v1/workspaces/480aa73d-5ede-4727-8ebe-47de1f253773/message?version=2017-02-03',
      JSON.stringify(
        {'input': {'text': texto},
        'context': {
          'conversation_id':this.contexto
        }
    }),
      {
        headers: headers
      })
      .map((res: Response ) => {
          this.contexto = res.json().context.conversation_id
          return res.json().output.text;
      })
      .catch((error: any) => Observable.throw( console.log(error) || 'Server error')); 
  }

  conversarsemContexto(texto: string) {
    let headers = new Headers();

    headers.append('Authorization', 'Basic ' +
      btoa('fd34e2f1-91da-44c0-9aae-32b635bddbce:vHf24bFfNkOb'));
    headers.append('Content-Type', 'application/json');

    return this._http.post(
      'https://gateway.watsonplatform.net/conversation/api/v1/workspaces/480aa73d-5ede-4727-8ebe-47de1f253773/message?version=2017-02-03',
      JSON.stringify(
        {'input': {'text': texto}
    }),
      {
        headers: headers
      })
      .map((res: Response ) => {
          this.contexto = res.json().context.conversation_id
          return res.json().output.text;
      })
      .catch((error: any) => Observable.throw( console.log(error) || 'Server error'));
  }

  falarSom(texto) {

    let headers = new Headers();

    headers.append('Authorization', 'Basic ' +
      btoa('f48bdf26-4552-4067-a104-429a17733bb6:RdajM5xsZTGm'));

    return this._http.get(
      'https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?accept=audio/wav&text='+texto+'&voice=pt-BR_IsabelaVoice',
      {
        headers: headers
      })
      .map((res: Response ) => {
          return res.url
      })
      .catch((error: any) => Observable.throw( console.log(error) || 'Server error'));

  }

}