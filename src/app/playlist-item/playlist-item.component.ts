import { Component, OnInit , Input} from '@angular/core';
import { Playlist } from 'src/app/models/playlist';
import { FilaService } from 'src/app/services/fila/fila.service';
import { Store } from '@ngrx/store';
import { PlaylistInterface } from 'src/app/interfaces/playlist.Interface';
import { INCREMENT, DECREMENT, RESET } from 'src/app/reducer/addFila';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.css']
})
export class PlaylistItemComponent implements OnInit {

  @Input() music:Playlist;

  constructor(private service:FilaService, private store: Store<AppState>) { }

  ngOnInit() {
    console.log('mod ', this.music);
  }

  addFila(){
    console.log('chamou fn');
    this.store.dispatch({ type: INCREMENT });
    //this.service.addFila(Model);
  }

}
