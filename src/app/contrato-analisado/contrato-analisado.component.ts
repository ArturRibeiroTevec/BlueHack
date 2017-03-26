import { Component, OnInit } from '@angular/core';

import { ContratoService } from './contrato-analisado.service';

@Component({
  selector: 'app-contrato-analisado',
  templateUrl: './contrato-analisado.component.html',
  styleUrls: ['./contrato-analisado.component.css']
})
export class ContratoAnalisadoComponent implements OnInit {

  analises: any;

  constructor(private contratoService: ContratoService) { }

  ngOnInit() {
    this.listarAnalises();
  }

  listarAnalises(){
    this.contratoService.listarAnalise().subscribe(analises => {
      this.analises = analises;
    })
  }
}
