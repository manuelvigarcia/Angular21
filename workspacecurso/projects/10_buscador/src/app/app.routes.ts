import { Routes } from '@angular/router';
import { AltaController } from './controller/alta-controller/alta-controller';
import { Buscador } from './controller/buscador/buscador';

export const routes: Routes = [
  {
  "path":"alta",
  "component":AltaController
  },
  {
  "path":"buscar",
  "component":Buscador
  }
];
