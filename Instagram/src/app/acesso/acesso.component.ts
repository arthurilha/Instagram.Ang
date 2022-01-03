import { Component, OnInit } from '@angular/core';
import { style, trigger, state, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.scss'],
  animations:[
    trigger('animacao-banner', [
      state('criado', style({
        opacity: 1
      })),
      transition(
        'void => criado',[
          style({opacity:0 , transform: 'translate(-50px, 0px)'}),
          animate('500ms 0s ease-in-out')
        ])
    ]),
    trigger('animacao-painel', [
      state('criado', style({
        opacity: 1
      })),
      transition(
        'void => criado',[
          style({opacity:0 , transform: 'translate(60px, 0px)'}),
          animate('500ms 0s ease-in-out')
        ])
    ])
  ]
})
export class AcessoComponent implements OnInit {

  public estadoBanner: string = 'criado'
  public estadoPainel: string = 'criado'

  public cadastro: boolean = false
  
  public exibirPainel(event: string): void{
    this.cadastro = event === 'cadastro' ? true : false
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
