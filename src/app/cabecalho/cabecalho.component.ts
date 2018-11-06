import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  counter: Observable<number>;
  constructor(private store: Store<AppState>) { 
     this.counter = store.select('addFila');
    }

  ngOnInit() {
   
  }

}
