import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterConsumidorComponent, HeaderConsumidorComponent } from '../../../components/consumidor';

@Component({
  selector: 'app-consumidor-layout',
  standalone: true,
  imports: [RouterModule, HeaderConsumidorComponent, FooterConsumidorComponent],
  templateUrl: './consumidor-layout.component.html',
  styleUrl: './consumidor-layout.component.css'
})
export class ConsumidorLayoutComponent {

}
