import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderConsumidorComponent } from '../../../components/consumidor';
import { FooterComponent } from '../../../components/shared';

@Component({
  selector: 'app-administrador-layout',
  standalone: true,
  imports: [RouterModule, HeaderConsumidorComponent, FooterComponent],
  templateUrl: './administrador-layout.component.html',
  styleUrl: './administrador-layout.component.css',
})
export class AdministradorLayoutComponent {}
