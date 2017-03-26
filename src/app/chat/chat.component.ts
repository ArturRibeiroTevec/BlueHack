import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  conversa: any[];
  audio: any;

  constructor(private chatService: ChatService, private domSanitizer: DomSanitizer) { 
    this.conversa = [];
  }

  ngOnInit() {
  }

  conversar(texto) {
    this.chatService.conversar(texto.value).subscribe(resposta => {

      let _resposta = resposta;

      this.chatService.falarSom(_resposta).
        subscribe(audio => {
          
          let _audio = this.domSanitizer.bypassSecurityTrustResourceUrl(audio);
          this.conversa.push({'tipo': 'resposta', 'valor': _resposta, 'audio': _audio});
        });

    });

    this.conversa.push({'tipo': 'pergunta', 'valor': texto.value, 'audio': null});
    texto.value = '';
  }

}
