import { Component, OnInit,EventEmitter,Output} from '@angular/core';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  
  public estd: string = 'app-cadastro'
  constructor() { }

  ngOnInit(): void {
  }
  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter()
  public exibirPaineLogin(): void{
    console.log('oloco')
   
  }
}
