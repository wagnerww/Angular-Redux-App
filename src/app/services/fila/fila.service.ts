import { Injectable } from '@angular/core';
import { ActionReducer, Action } from '@ngrx/store';
import { Playlist } from 'src/app/models/playlist';

@Injectable({
  providedIn: 'root'
})
export class FilaService {

  

  constructor() { }

  addFila(Model:Playlist){
    console.log('Insert ',Model);
  }
}
