import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Reducers
import { StoreModule } from '@ngrx/store';
import { FilaReducer } from './reducer/Fila.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistItemComponent } from './playlist-item/playlist-item.component';

//Services
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { FilaEsperaComponent } from './fila-espera/fila-espera.component';
import { FilaEsperaItemComponent } from './fila-espera-item/fila-espera-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    PlaylistComponent,
    PlaylistItemComponent,
    FilaEsperaComponent,
    FilaEsperaItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ Fila: FilaReducer })
  ],
  providers: [PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
