import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FilaInterface } from 'src/app/interfaces/fila.interface';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  Counter:number=0;
  FilaObserver: Observable<FilaInterface>;
  Fila:FilaInterface[] = [];
  constructor(private store: Store<FilaInterface>) { 
     this.FilaObserver = store.select('addFila');
     this.FilaObserver.subscribe((res:FilaInterface) => {
       
        this.Fila.push(res);
        this.Counter = this.Fila.length;
        console.log('Fila', this.Fila);
     });
     
    }

  ngOnInit() {
   
  }

}
