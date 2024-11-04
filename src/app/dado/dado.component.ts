import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  template: `
    <div class="dado">
      {{ valor }}
    </div>
  `,
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {
  @Input() valor: number = 1;
}
