import { Component } from '@angular/core';

import { FazerContatoService } from 'src/app/services/fazer-contato.service';
import { iFormContato } from 'src/interfaces/iFormContato';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'RTTI';
  msgFezContato: string = '';
  classFezContato: string = '';
  private oFormContato: iFormContato = {
      nome: ""
    , email: ""
    , telefone: ""
    , mensagem: ""
  };
  // binding
  nomeContato: string = "";
  emailContato: string = "";
  foneContato: string = "";
  mensagemContato: string = "";

  constructor(private fazerContatoService: FazerContatoService){
    // serviço injetado
  }

  public fazerContato(){
    this.oFormContato = {
        nome: this.nomeContato
      , email: this.emailContato
      , telefone: this.foneContato
      , mensagem: this.mensagemContato
    };
    this.fazerContatoService.enviarEmail(this.oFormContato);
    this.msgFezContato = 'Mensagem enviada com Sucesso !! Você deverá receber uma cópia.';
    this.classFezContato = 'alert alert-success';
    this.limpaCampos();
    this.apagaInfo(5); 
  }

  public apagaInfo(segundos: number){
    // para remover a div de informação
    setTimeout(() => {
      this.msgFezContato = '';
      this.classFezContato = '';
      }, 1000*segundos
    );
  }

  public limpaCampos(){
    // nao fiz reset no form, fiz manual
    this.nomeContato = "";
    this.emailContato = "";
    this.foneContato = "";
    this.mensagemContato = "";
  }
}