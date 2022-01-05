import { Component, OnInit,EventEmitter,Output} from '@angular/core';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  
  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter()
  
  public exibirPaineLogin(): void{
    this.exibirPainel.emit('login')
  }

  public estd: string = 'app-cadastro'
  constructor() { }

  ngOnInit(): void {
  }
}
