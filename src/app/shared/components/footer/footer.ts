import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../../atoms/logo/logo.component';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LogoComponent],
  template: `
    <footer
      class="relative bg-[var(--color-primary)] text-white overflow-hidden py-12"
    >
      <!-- IMAGEN DECORATIVA -->
      <img
        src="footer-completo.png"
        alt=""
        class="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none z-0"
      />

      <!-- CONTENIDO -->
      <div class="max-w-3xl mx-auto px-6 py-8 z-10 relative text-center">
        <!-- Texto institucional -->
        <p class="text-white/90 text-sm">
          Fortaleciendo el estado de derecho a través de la innovación procesal
          y el compromiso con la ciudadanía de Oaxaca.
        </p>

        <!-- Redes -->
        <div class="flex justify-center gap-3 mt-6">
          <a
            href="https://www.facebook.com/TSJOAX/"
            target="_blank"
            class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
          >
            <img src="redes/facebook.svg" class="w-5 h-5" />
          </a>

          <a
            href="https://x.com/tsjoaxaca"
            target="_blank"
            class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
          >
            <img src="redes/X-twitter.svg" class="w-5 h-5" />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
          >
            <img src="redes/instagram.svg" class="w-5 h-5" />
          </a>

          <a
            href="https://www.youtube.com/user/PoderJudicialOaxaca"
            target="_blank"
            class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
          >
            <img src="redes/youtube.svg" class="w-5 h-5" />
          </a>

          <a
            href="https://www.tiktok.com/@tsjoaxaca"
            target="_blank"
            class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
          >
            <img src="redes/tiktok.svg" class="w-5 h-5" />
          </a>
        </div>

        <!-- Contacto -->
        <div class="mt-8 space-y-4 text-sm text-white/80">
          <p>
            <strong>
              Conmutador (951) 5016680<br />
              JusticiaTel (800) 719 2232
            </strong>
          </p>

          <p>
            <strong>
              Av. Gerardo Pandal Graf No. 1,<br />
              Agencia de Policía Reyes Mantecón,<br />
              San Bartolo Coyotepec, Oaxaca.
            </strong>
          </p>
        </div>
      </div>
    </footer>

    <!-- BARRA INFERIOR -->
    <div
      class="px-6 py-3 bg-gradient-to-r from-[#5a1414] via-[#8b2c2c] to-[#5a1414] flex flex-col md:flex-row justify-center items-center gap-2"
    >
      <p class="text-white/90 text-xs">
        © {{ year }} Derechos reservados, Poder Judicial del Estado de Oaxaca.|
        Politica de privacidad
      </p>
    </div>
  `,
})
export class FooterComponent {
 
  year = new Date().getFullYear();
}
