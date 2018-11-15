import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MusicaInterface } from 'src/app/interfaces/musica.interface';

@Component({
  selector: 'app-fila-espera',
  templateUrl: './fila-espera.component.html',
  styleUrls: ['./fila-espera.component.css']
})
export class FilaEsperaComponent implements OnInit {

  Counter:number=0;
  FilaObserver: Observable<MusicaInterface[]>;
  Fila:MusicaInterface[] = [];
  constructor(private store: Store<MusicaInterface[]>) { 
     this.FilaObserver = store.select('addFila');

     this.FilaObserver.subscribe((res) => {
       console.log('res ',res);
       if(res){
          this.Fila = res;
          this.Counter = res.length;
          console.log('Fila', this.Fila);
       }
     });
     
  }

  ngOnInit() {
   
  }

}
