import { Component, OnInit, EventEmitter, Output, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter()

  public exibirPainelCadastro(): void{
    this.exibirPainel.emit('cadastro')
  }

  @ViewChild("formulario")public f: NgForm
  constructor() { }

  ngOnInit(): void {
  }

  public confirmarDados(): void{
      console.log(this.f.value)
  }
}
