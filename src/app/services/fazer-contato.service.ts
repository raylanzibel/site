import { Injectable } from '@angular/core';
import { iEMail } from 'src/interfaces/IEMail';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { iFormContato } from 'src/interfaces/iFormContato';

@Injectable({
  providedIn: 'root'
})
export class FazerContatoService {
  private sApiUrl: string = "http://localhost:8080/api/sendmail";
  private oEMail: iEMail = {
      MailFrom: ""
    , MailBody: ""
  };

  constructor(private httpCli: HttpClient) {
    // objeto injetado
  }

  enviarEmail(oFormContato: iFormContato) {
    this.oEMail.MailFrom    = oFormContato.email;
    this.oEMail.MailBody    = `${oFormContato.nome}\n${oFormContato.email}\n${oFormContato.telefone}\n${oFormContato.mensagem}`;
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }
      )
    };
    this.httpCli.post<iEMail>(this.sApiUrl, JSON.stringify(this.oEMail), httpOptions).subscribe();
  }
}
