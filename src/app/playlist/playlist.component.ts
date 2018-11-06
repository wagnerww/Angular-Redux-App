import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import {PlaylistInterface} from 'src/app/interfaces/playlist.Interface';
import { Playlist } from 'src/app/models/playlist';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlist : PlaylistInterface;
  Model:Playlist;

  constructor(private services:PlaylistService) { }

  ngOnInit() {
   this.services.getPlaylist().subscribe(res => {
      this.playlist = res;
   });
  }

}
