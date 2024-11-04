import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadoComponent } from './dado/dado.component';
import { TiradorDadosComponent } from './tirador-dados/tirador-dados.component';
import { PuntuacionComponent } from './puntuacion/puntuacion.component';
import { JuegoYahtzeeComponent } from './juego-yahtzee/juego-yahtzee.component';

@NgModule({
  declarations: [
    AppComponent,
    DadoComponent,
    TiradorDadosComponent,
    PuntuacionComponent,
    JuegoYahtzeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
