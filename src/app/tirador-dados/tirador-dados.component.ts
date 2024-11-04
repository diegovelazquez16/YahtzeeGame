import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tirador-dados',
  template: `
    <div class="tirador-dados">
      <div *ngFor="let dado of dados; let i = index">
        <app-dado [valor]="dado" [ngClass]="{ 'bloqueado': dadosBloqueados[i] }"></app-dado>
        <button *ngIf="oportunidad === 2 && !dadosBloqueados[i] && puedeBloquear"
                (click)="bloquearDado(i)">
          Bloquear
        </button>
      </div>
      <button (click)="tirarDados()" [disabled]="tiradasRestantes === 0">
        Tirar ({{ tiradasRestantes }} restantes)
      </button>
    </div>
  `,
  styleUrls: ['./tirador-dados.component.css']
})
export class TiradorDadosComponent {
  dados: number[] = Array(5).fill(1); 
  dadosBloqueados: boolean[] = Array(5).fill(false); 
  tiradasRestantes: number = 3;
  oportunidad: number = 1;
  puedeBloquear: boolean = false; 

  @Output() dadosTirados = new EventEmitter<number[]>();

  tirarDados() {
    if (this.tiradasRestantes > 0) {
      this.dados = this.dados.map((valor, i) => this.dadosBloqueados[i] ? valor : Math.floor(Math.random() * 6) + 1);
      
      this.tiradasRestantes--;
      
      this.dadosTirados.emit(this.dados);
      
      this.aplicarReglas();
    }
  }

  aplicarReglas() {
    const conteos = this.dados.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

    if (this.oportunidad === 1) {
      for (const valor in conteos) {
        if (conteos[valor] === 3) {
          this.bloquearDadosConValor(Number(valor));
          break;
        }
      }
    } else if (this.oportunidad === 2) {
      for (const valor in conteos) {
        if (conteos[valor] === 2) {
          this.puedeBloquear = true; 
          break;
        }
      }
    } else if (this.oportunidad === 3) {
      this.dadosBloqueados = this.dadosBloqueados.map((bloqueado, i) => !bloqueado && conteos[this.dados[i]] !== 1);
    }

    this.oportunidad++;
  }

  bloquearDadosConValor(valor: number) {
    this.dadosBloqueados = this.dados.map(dado => dado === valor);
  }

  bloquearDado(index: number) {
    if (this.puedeBloquear) {
      this.dadosBloqueados[index] = true;
      this.puedeBloquear = false; 
    }
  }

  reiniciarTiradas() {
    this.dados = Array(5).fill(1); 
    this.dadosBloqueados = Array(5).fill(false); 
    this.tiradasRestantes = 3;
    this.oportunidad = 1;
    this.puedeBloquear = false;
  }
}
