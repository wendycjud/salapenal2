import { Routes } from '@angular/router';

import { MainLayout } from './layouts/main-layout/main-layout';
import { ConsultaPage } from './features/consulta/pages/consulta-page/consulta-page';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: ConsultaPage
      }
    ]
  }
];
