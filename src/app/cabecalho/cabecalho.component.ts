import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { PlaylistInterface } from 'src/app/interfaces/playlist.Interface';


@Component({
  selector: 'header',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  NomePlaylist:string='Bike songs';
 
 
  constructor(private services:PlaylistService) {      
  
  }

  ngOnInit() {
   
  }

}
