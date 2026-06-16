import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-consulta-page',
  standalone: true,
  imports: [
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    SelectModule
  ],
  templateUrl: './consulta-page.html',
})
export class ConsultaPage {

  salas = [
    { id: 1, nombre: 'Primera Sala Penal' },
    { id: 2, nombre: 'Segunda Sala Penal' },
    { id: 3, nombre: 'Tercera Sala Penal' }
  ];

  salaSeleccionada: any = null;

  toca = '';

  resultado: any = null;

  buscar(): void {

    this.resultado = {
      fecha: '15/06/2025',
      toca: this.toca,
      expediente: '456/2025',
      juzgadoProcedencia: 'Juzgado Primero Penal',
      fechaRadicacion: '10/06/2025',

      victima: 'Juan Pérez',
      imputado: 'María López',
      apelante: 'Ministerio Público',
      delito: 'Fraude',

      resolucionApelada: 'Sentencia Definitiva',
      fechaResolucion: '12/06/2025',
      sentidoResolucion: 'Confirmada',

      dvd: 'Sí',
      compreso: 'No',
      proyectista: 'Lic. García',
      amparo: '123/2025',

      observaciones: 'Sin observaciones.'
    };

  }

}