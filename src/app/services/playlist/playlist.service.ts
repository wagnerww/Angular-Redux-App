import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Playlist } from 'src/app/models/playlist';
import {PlaylistInterface} from 'src/app/interfaces/playlist.Interface';


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  Model: Playlist;

  constructor(private http:HttpClient) { }

  getPlaylist(){
      return this.http.get<PlaylistInterface>('http://localhost:3000/Musicas/');  
  }
}
