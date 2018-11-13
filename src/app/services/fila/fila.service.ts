import { Injectable } from '@angular/core';
import { ActionReducer, Action } from '@ngrx/store';
import { MusicaInterface } from 'src/app/interfaces/musica.interface';
import { FilaInterface } from 'src/app/interfaces/fila.interface';

let Fila:FilaInterface[] = [];

@Injectable({
  providedIn: 'root'
})

export class FilaService {
   
  filaInterface:FilaInterface;
  
  constructor() { }

  addMusica(Musica:any){    
    this.filaInterface =  Musica.Musica;
    Fila.push(this.filaInterface);
    console.log('Insert ',Fila);
    return Fila;

  }

  removeMusica(id:any){
    let index:number=0;
    Fila.map((res, index) => {
      this.filaInterface = res;      
      if(this.filaInterface.Musicas.id===id){
        return index;
      } 
    
    });

    console.log('index ', index);

    Fila.splice(id);
    return Fila;
    //Fila.remove()
      //console.log('remove ',musica);
    
  }

}
