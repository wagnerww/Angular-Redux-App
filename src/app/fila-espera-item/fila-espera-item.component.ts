import { Component, OnInit, Input } from '@angular/core';
import { MusicaInterface } from 'src/app/interfaces/musica.interface';
import { FilaService } from 'src/app/services/fila/fila.service';
import { Store } from '@ngrx/store';
import { removeMusica } from 'src/app/reducer/addFila';

@Component({
  selector: 'app-fila-espera-item',
  templateUrl: './fila-espera-item.component.html',
  styleUrls: ['./fila-espera-item.component.css']
})
export class FilaEsperaItemComponent implements OnInit {

@Input() music:MusicaInterface;

  constructor(private service:FilaService, private store: Store<any>) { }

  ngOnInit() {
    
  }

  removeMusica(Musica){
    this.store.dispatch({ type: removeMusica,  Musica })
  }

}
