import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Paises } from './app/controller/paises/paises';

bootstrapApplication(Paises, appConfig).catch((err) => console.error(err));
