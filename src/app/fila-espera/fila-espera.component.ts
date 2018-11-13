import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FilaInterface } from 'src/app/interfaces/fila.interface';

@Component({
  selector: 'app-fila-espera',
  templateUrl: './fila-espera.component.html',
  styleUrls: ['./fila-espera.component.css']
})
export class FilaEsperaComponent implements OnInit {

  Counter:number=0;
  FilaObserver: Observable<FilaInterface[]>;
  Fila:FilaInterface[] = [];
  constructor(private store: Store<FilaInterface[]>) { 
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
