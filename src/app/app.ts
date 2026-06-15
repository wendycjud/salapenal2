import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [ButtonModule],
  template: `
    <p-button label="Guardar"></p-button>
  `
})
export class App {}
