import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './Proyecto/pages/Home/home.component';
@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Solo si usas Angular 16+
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, CommonModule ], // Solo si usas Standalone Components
})
export class AppComponent {
title = 'mi-proyecto';

  sidenavOpen = false;

    toggleSidenav() {
      this.sidenavOpen = !this.sidenavOpen;
    }

}
