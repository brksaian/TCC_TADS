import { Component, OnInit } from '@angular/core';
import { ConsumidorService } from '../../../services';
import { Consumidor } from '../../../shared/interface';
import { CardConsumidorComponent } from "../card-consumidor/card-consumidor.component";

@Component({
  selector: 'app-visualizar-seguidores',
  standalone: true,
  imports: [CardConsumidorComponent],
  templateUrl: './visualizar-seguidores.component.html',
  styleUrl: './visualizar-seguidores.component.css'
})
export class VisualizarSeguidoresComponent implements OnInit {
  consumidores: Consumidor[] = [];

  constructor(private consumidorService: ConsumidorService) {}

  ngOnInit(): void {
    this.consumidorService.getSeguidores().subscribe((data: Consumidor[]) => {
      this.consumidores = data;
    });
  }
}
