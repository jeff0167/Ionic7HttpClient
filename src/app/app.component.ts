import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule, CommonModule],
})
export class AppComponent {

  public environmentInjector = inject(EnvironmentInjector);
  constructor() {}
}
