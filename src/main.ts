import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { inject, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

bootstrapApplication(AppComponent, appConfig)
.then(moduleRef => {
  const appInjector = moduleRef.injector;
  const userAvatar = createCustomElement(AppComponent, {injector: appInjector});
  customElements.define('user-avatar', userAvatar);
})
  .catch((err) => console.error(err));
