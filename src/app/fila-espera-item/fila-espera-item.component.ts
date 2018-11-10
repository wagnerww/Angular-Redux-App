import { Component, OnInit, Input } from '@angular/core';
import { MusicaInterface } from 'src/app/interfaces/musica.interface';

@Component({
  selector: 'app-fila-espera-item',
  templateUrl: './fila-espera-item.component.html',
  styleUrls: ['./fila-espera-item.component.css']
})
export class FilaEsperaItemComponent implements OnInit {

@Input() music:MusicaInterface;

  constructor() { }

  ngOnInit() {
    console.log(this.music);
  }

}
