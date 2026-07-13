import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MenuCursos } from './app/controller/menu/menu';

bootstrapApplication(MenuCursos, appConfig).catch((err) => console.error(err));
