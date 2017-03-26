/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContratoAnalisadoComponent } from './contrato-analisado.component';

describe('ContratoAnalisadoComponent', () => {
  let component: ContratoAnalisadoComponent;
  let fixture: ComponentFixture<ContratoAnalisadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoAnalisadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoAnalisadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
