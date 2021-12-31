import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Imagem } from './img.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [

    trigger('banner',[
        state('escondido', style({
          opacity: 0
        })),
        state('visivel', style({
          opacity: 1
        })),
        transition('escondido <=> visivel', animate('1s ease-in'))
        
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado: string = 'visivel'

  public image : Imagem[] = [
    { estado: 'visivel', url:'/assets/banner-acesso/img_1.jpg'},
    { estado: 'escondido', url:'/assets/banner-acesso/img_2.png'},
    { estado: 'escondido', url:'/assets/banner-acesso/img_3.png'},
    { estado: 'escondido', url:'/assets/banner-acesso/img_4.png'},
    { estado: 'escondido', url:'/assets/banner-acesso/img_5.png'},
  ]
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.logicaRotacao(),4000)
  }
  
 public logicaRotacao(): void{
   
   let idx: number = 0

   for(let i: number = 0; i <= 4; i++){
     if(this.image[i].estado === 'visivel'){
       this.image[i].estado = 'escondido'
       
       idx = i ===4 ? 0 : i+1
       console.log(this.image)
       break
     }
   }

   this.image[idx].estado = 'visivel'

   setTimeout(() => this.logicaRotacao(),4000)
 }

}
