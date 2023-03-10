import { Injectable } from '@angular/core';

import { iFormContato } from 'src/interfaces/iFormContato';

@Injectable({
  providedIn: 'root'
})
export class FazerContatoService {

  constructor (){



  }

  async enviarEmail(oFormContato: iFormContato) {
    const hostName = "";
    const userName = "";
    const passWord = "";
    const srvPort  = 587;
  }
}
