import { Component, OnInit , Input} from '@angular/core';
import { MusicaModel } from 'src/app/models/Musica.Model';
import { FilaService } from 'src/app/services/fila/fila.service';
import { Store } from '@ngrx/store';
import { PlaylistInterface } from 'src/app/interfaces/playlist.Interface';
import { addMusica } from 'src/app/reducer/addFila';
import { MusicaInterface } from 'src/app/interfaces/musica.interface';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.css']
})
export class PlaylistItemComponent implements OnInit {

  @Input() Music:MusicaInterface;

  constructor(private service:FilaService, private store: Store<AppState>) { }

  musicInterface:PlaylistInterface;

  ngOnInit() {
    console.log('mod ', this.Music);
  }

  addFila(Musica:MusicaInterface){
  
    console.log('chamou fn', Musica);
    
    this.store.dispatch({ type: addMusica,  Musica });
    //this.service.addFila(Model);
  }

}
