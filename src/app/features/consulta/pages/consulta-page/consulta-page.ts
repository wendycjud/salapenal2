import { Component, inject, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

import { ConsultaService } from '../../services/consulta';
import { Consulta } from '../../../../core/interfaces/consulta.interface';

@Component({
  selector: 'app-consulta-page',
  standalone: true,
  imports: [FormsModule, CardModule, ButtonModule, InputTextModule, SelectModule],
  templateUrl: './consulta-page.html',
})
export class ConsultaPage {
  private consultaService = inject(ConsultaService);
  private ngZone = inject(NgZone);
  salas = [
    {
      label: '1ra. Sala Unitaria',
      value: '1ra. SALA UNITARIA',
    },
    {
      label: '2da. Sala Unitaria',
      value: '2da. SALA UNITARIA',
    },
    {
      label: '3ra. Sala Unitaria',
      value: '3ra. SALA UNITARIA',
    },
    {
      label: 'Tradicional Colegiada',
      value: 'TRADICIONAL COLEG',
    },
    {
      label: 'J.O. Colegiada',
      value: 'J.O. COLEGIADA',
    },
    {
      label: 'Tradicional',
      value: 'TRADICIONAL',
    },
  ];

  salaSeleccionada: string | null = null;

  toca = '';

  resultado: Consulta | null = null;

  private formatearFecha(fecha: string): string {
    if (!fecha) {
      return '';
    }

    const d = new Date(fecha);

    const dia = String(d.getDate()).padStart(2, '0');
    const mes = String(d.getMonth() + 1).padStart(2, '0');
    const anio = d.getFullYear();

    return `${dia}/${mes}/${anio}`;
  }

  busquedaRealizada = false;
  loading = false;
  mensajeError = '';
  buscar(): void {
    if (!this.salaSeleccionada || !this.toca) {
      return;
    }
    this.busquedaRealizada = true;
    this.loading = true;
    this.mensajeError = '';
    this.resultado = null;

    this.consultaService.buscar(this.salaSeleccionada, this.toca).subscribe({
      next: (response: any) => {
        console.log('RESPUESTA RECIBIDA', new Date());
        this.loading = false;
        if (!response.ok) {
          this.mensajeError = response.message;

          return;
        }

        const data = response.data;

        this.resultado = {
          toca: data['N° DE TOCA'] ?? '',

          recepcion: this.formatearFecha(data['RECEPCION']),

          juzgadoProcedencia: data['JUZGADO DE PROCEDENCIA'] ?? '',

          expediente: data['CAUSA PENAL'] ?? '',

          dvd: data['DVD'] ?? '',

          conPreso: data['CON PRESO'] ?? '',

          lugarCereso: data['LUGAR DEL CEREZO'] ?? '',

          resolucionApelada: data['RESOLUCION APELADA'] ?? '',

          fechaResolucion: this.formatearFecha(data['FECHA RESOLUCION']),

          imputado: data['IMPUTADO'] ?? '',

          delito: data['DELITO (S)'] ?? '',

          victima: data['VICTIMA'] ?? '',

          apelante: data['APELANTE'] ?? '',

          fechaRadicacion: this.formatearFecha(data['FECHA DE RADICACION']),

          proyectista: data['PROYECTISTA'] ?? '',

          sentidoResolucion: data['SENTIDO DE RESOLUCION'] ?? '',

          promueveAmparo: data['PROMUEVE AMPARO'] ?? '',

          observaciones: data['OBSERVACIONES'] ?? '',
        };

        console.log(this.resultado);
        console.log('RESULTADO ASIGNADO', new Date());

        console.log('loading:', this.loading);
        console.log('resultado existe:', !!this.resultado);
      },

      error: (error) => {
        this.loading = false;
        console.error('Error al consultar:', error);
      },
    });
  }
}
