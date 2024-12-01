import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterConsumidorComponent, HeaderConsumidorComponent } from '../../../components/consumidor';
import { FooterComponent } from '../../../components/shared';

@Component({
  selector: 'app-consumidor-layout',
  standalone: true,
  imports: [RouterModule, HeaderConsumidorComponent, FooterComponent],
  templateUrl: './consumidor-layout.component.html',
  styleUrl: './consumidor-layout.component.css'
})
export class ConsumidorLayoutComponent {

}
