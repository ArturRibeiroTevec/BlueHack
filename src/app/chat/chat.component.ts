import { Component, OnInit } from '@angular/core';

import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  respostas: string[];

  constructor(private chatService: ChatService) { 
    this.respostas = [];
  }

  ngOnInit() {
    
  }

  conversar(texto) {
    this.chatService.conversar(texto).subscribe(resposta => {
      this.respostas.push(resposta);
    });
  }

}
