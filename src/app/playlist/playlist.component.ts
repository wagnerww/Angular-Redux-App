import { Component, OnInit, Output} from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import {PlaylistInterface} from 'src/app/interfaces/playlist.Interface';
import { MusicaModel } from 'src/app/models/Musica.Model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  @Output() nome:string;

  playlist : PlaylistInterface;
  Model:MusicaModel;

  constructor(private services:PlaylistService) { }

  ngOnInit() {
    this.services.getPlaylist().subscribe(res => {
      this.playlist = res;
      this.nome = this.playlist.NomePlaylist;
    })
  }

}
