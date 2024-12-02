import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderConsumidorComponent } from '../../../components/consumidor';
import { FooterComponent } from '../../../components/shared';
import { HeaderAdministradorComponent } from "../../../components/administrador/header-administrador/header-administrador.component";

@Component({
  selector: 'app-administrador-layout',
  standalone: true,
  imports: [RouterModule, FooterComponent, HeaderAdministradorComponent],
  templateUrl: './administrador-layout.component.html',
  styleUrl: './administrador-layout.component.css',
})
export class AdministradorLayoutComponent {}
