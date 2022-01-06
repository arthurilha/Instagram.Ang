import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {


  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'nome_usuario': new FormControl(null),
    'senha': new FormControl(null)
  })
  
  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter()
  
  public exibirPaineLogin(): void{
    this.exibirPainel.emit('login')
  }

  public estd: string = 'app-cadastro'
  constructor() { }

   
  public cadastrarUsuario():void{
    console.log(this.formulario)
  }
  ngOnInit(): void {
  }
}
