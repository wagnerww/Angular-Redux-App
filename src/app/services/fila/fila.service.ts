import { Injectable } from '@angular/core';
import { ActionReducer, Action } from '@ngrx/store';
import { MusicaInterface } from 'src/app/interfaces/musica.interface';

let Fila:MusicaInterface[] = [];

@Injectable({
  providedIn: 'root'
})

export class FilaService {
   
  musicaInterface:MusicaInterface;
    
  constructor() { }

  addMusica(MusicaIn:any){
    this.musicaInterface =  MusicaIn.Musica;
    Fila.push(this.musicaInterface);
    console.log('Insert ',Fila);
    return Fila;

  }

  removeMusica(MusicaIn:any){  
    let index:number=0;
    let Musica:MusicaInterface =  MusicaIn.Musica;
    console.log('musica ',Musica);
    index = Fila.findIndex((res:MusicaInterface) => res.id===Musica.id)
    
    console.log('index ', index);

    Fila.splice(index, 1);
    console.log('Fila status ', Fila);
    return Fila;
    //Fila.remove()
      //console.log('remove ',musica);
    
  }

}
