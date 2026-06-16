import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a routerLink="/" (click)="scrollTop()" class="flex items-center gap-4">
      <img
        src="LogoPJ.svg"
        alt="Poder Judicial del Estado de Oaxaca"
        class="h-20 w-auto object-contain"
        [style.filter]="inverted ? 'brightness(1) invert(0)' : 'none'"
      />
    </a>
  `,
})
export class LogoComponent {
  @Input() inverted = false;

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
