import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { ValentineMusicComponent } from '../../components/valentine-music/valentine-music.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    ValentineMusicComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;



  ngAfterViewInit() {
      setTimeout(() => {
        if (this.sidenav) {
          console.log("Sidenav cargado correctamente");
        }
      });
    }

    toggleSidenav() {
      if (this.sidenav) {
        this.sidenav.toggle();
      }
    }
}
