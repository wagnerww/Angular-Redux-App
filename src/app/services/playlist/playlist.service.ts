import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MusicaModel } from 'src/app/models/Musica.Model';
import {PlaylistInterface} from 'src/app/interfaces/playlist.Interface';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  Model: MusicaModel;

  constructor(private http:HttpClient) { }

  getPlaylist():Observable<PlaylistInterface>{
      return this.http.get<PlaylistInterface>('http://localhost:3000/Playlist/');
  }
}
