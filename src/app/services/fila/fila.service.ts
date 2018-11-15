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

  removeMusica(MusicaIn:any){  
    let index:number=0;
    let Musica:MusicaInterface =  MusicaIn.Musica;
    console.log('musica ',Musica);   
   
    Fila.map((res:MusicaInterface, index) => {
      index ++;     
      console.log('filar ',res);
      if(Musica.id===res.id){
        console.log('achou ',index);
        return index;
      }
    
    });

    console.log('index ', index);

    Fila.splice(index);
    return Fila;
    //Fila.remove()
      //console.log('remove ',musica);
    
  }

}
