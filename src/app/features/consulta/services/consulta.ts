import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ConsultaResponse } from '../../../core/interfaces/consulta-response.interface';
@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private http = inject(HttpClient);

  private readonly apiUrl =
    'https://script.google.com/macros/s/AKfycbyt81MVk8SujL26qp-kKtX1FP6F6Z3V_dWGIPZiAbCjQ7GEyNcSfSKgf9MXSda_R6Og/exec';

  buscar(hoja: string, toca: string) {

    const params = new HttpParams()
      .set('hoja', hoja)
      .set('toca', toca);

    return this.http.get<ConsultaResponse>(this.apiUrl, { params });

  }

}
