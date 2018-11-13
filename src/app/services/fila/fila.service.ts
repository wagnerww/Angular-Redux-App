import { Injectable } from '@angular/core';
import { ActionReducer, Action } from '@ngrx/store';
import { MusicaInterface } from 'src/app/interfaces/musica.interface';
import { FilaInterface } from 'src/app/interfaces/fila.interface';

@Injectable({
  providedIn: 'root'
})
export class FilaService {
   
  filaInterface:FilaInterface;

  constructor() { }

  addMusica(Musica:any){
    this.filaInterface =  Musica.Musica;    
    console.log('Insert ',this.filaInterface);
    return this.filaInterface;   
  }

  removeMusica(MusicaArray:FilaInterface[], MusicID:number){
    MusicaArray.map((musica) => {
      console.log('remove ',musica);
    });
  }

}
