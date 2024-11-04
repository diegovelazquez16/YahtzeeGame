import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-puntuacion',
  template: `
    <div class="puntuacion">
      <p>Puntuación: {{ puntuacion }}</p>
      <p *ngIf="mensajeObjetivo">{{ mensajeObjetivo }}</p>
    </div>
  `,
  styleUrls: ['./puntuacion.component.css']
})
export class PuntuacionComponent implements OnChanges {
  @Input() valoresDados: number[] = [];
  puntuacion: number = 0;
  mensajeObjetivo: string = '';

  ngOnChanges() {
    this.calcularPuntuacion();
  }

  calcularPuntuacion() {
    const conteos = this.valoresDados.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

    const pares = Object.values(conteos).filter(count => count === 2);
    const triples = Object.values(conteos).filter(count => count >= 3);

    if (triples.length) {
      this.puntuacion = this.valoresDados.reduce((sum, val) => sum + val, 0);
      this.mensajeObjetivo = '¡Objetivo mayor alcanzado!';
    } else if (pares.length) {
      this.puntuacion = pares.length * 2;
      this.mensajeObjetivo = '¡Objetivo menor alcanzado!';
    } else {
      this.puntuacion = 0;
      this.mensajeObjetivo = 'Sin objetivos alcanzados';
    }
  }
}
