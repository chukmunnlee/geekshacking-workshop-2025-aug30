import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {provideRouter, RouterModule, Routes, withHashLocation} from '@angular/router';

import { App } from './app';
import { Main } from './components/main';
import { Version } from './components/version';

const appRoutes: Routes = [
  { path: '', component: Main },
  { path: 'version', component: Version },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    App, Main, Version
  ],
  imports: [
    BrowserModule, RouterModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes, withHashLocation())
  ],
  bootstrap: [App]
})
export class AppModule { }
