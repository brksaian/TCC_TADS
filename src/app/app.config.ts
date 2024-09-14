import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),  // Fornece o HttpClient para toda a aplicação
    provideRouter(routes)  // Fornece as rotas da aplicação
  ]
};
