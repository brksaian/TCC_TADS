import { Component, OnInit } from '@angular/core';
import { ConsumidorService } from '../../../services';
import { Consumidor } from '../../../shared/interface';
import { CardConsumidorComponent } from "../card-consumidor/card-consumidor.component";

@Component({
  selector: 'app-visualizar-seguindo',
  standalone: true,
  imports: [CardConsumidorComponent],
  templateUrl: './visualizar-seguindo.component.html',
  styleUrl: './visualizar-seguindo.component.css'
})
export class VisualizarSeguindoComponent implements OnInit {
  consumidores: Consumidor[] = [];

  constructor(private consumidorService: ConsumidorService) {}

  ngOnInit(): void {
    this.consumidorService.getSeguidores().subscribe((data: Consumidor[]) => {
      this.consumidores = data;
    });
  }
}
