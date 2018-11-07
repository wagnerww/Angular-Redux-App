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

  addFila(Musica:any){
    this.filaInterface =  Musica.Musica;    
    console.log('Insert ',this.filaInterface);
    return this.filaInterface;   
  }
}
