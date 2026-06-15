import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-consulta-page',
  imports: [
    FormsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    SelectModule,
    DividerModule
  ],
  templateUrl: './consulta-page.html',
  styleUrl: './consulta-page.css'
})
export class ConsultaPage {

  salas = [
  { id: 1, nombre: 'Primera Sala Penal' },
  { id: 2, nombre: 'Segunda Sala Penal' }
];

salaSeleccionada: any = null;

toca = '';

resultado: any = null;

  buscar() {

    // Simulación mientras no exista API

    this.resultado = {
      fecha: '15/06/2026',
      toca: this.toca,
      juzgadoProcedencia: 'Juzgado Primero Penal',
      expediente: '123/2025',
      dvd: 'Sí',
      resolucionApelada: 'Sentencia',
      fechaResolucion: '10/06/2026',
      compreso: 'No',
      victima: 'Juan Pérez',
      delito: 'Fraude',
      imputado: 'María López',
      apelante: 'Ministerio Público',
      fechaRadicacion: '05/06/2026',
      proyectista: 'Lic. García',
      sentidoResolucion: 'Confirmada',
      observaciones: 'Sin observaciones',
      amparo: '234/2026'
    };

  }

}
