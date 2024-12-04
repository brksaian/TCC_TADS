import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Consumidor, getNome } from '../../../shared/interface';

@Component({
  selector: 'app-card-consumidor',
  standalone: true,
  imports: [],
  templateUrl: './card-consumidor.component.html',
  styleUrl: './card-consumidor.component.css'
})
export class CardConsumidorComponent {
  @Input() consumidor!: Consumidor;

  getNome = getNome;

  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigate(['/perfil', this.consumidor.id]);
  }
}
