import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Buscador } from './app/controller/buscador/buscador';

bootstrapApplication(Buscador, appConfig).catch((err) => console.error(err));
