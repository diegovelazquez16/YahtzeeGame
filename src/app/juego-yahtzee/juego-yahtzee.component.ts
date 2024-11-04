import { Component, ViewChild } from '@angular/core';
import { TiradorDadosComponent } from '../tirador-dados/tirador-dados.component'; 
@Component({
  selector: 'app-juego-yahtzee',
  template: `
    <div class="juego-yahtzee">
      <app-tirador-dados (dadosTirados)="actualizarValoresDados($event)" #tirador></app-tirador-dados>
      <app-puntuacion [valoresDados]="valoresDados"></app-puntuacion>
      <button (click)="reiniciarJuego()">Reiniciar Juego</button>
    </div>
  `,
  styleUrls: ['./juego-yahtzee.component.css']
})
export class JuegoYahtzeeComponent {
  @ViewChild('tirador') tirador!: TiradorDadosComponent; 
  valoresDados: number[] = [];

  actualizarValoresDados(valores: number[]) {
    this.valoresDados = valores;
  }

  reiniciarJuego() {
    this.tirador.reiniciarTiradas(); 
    this.valoresDados = [];
  }
}
