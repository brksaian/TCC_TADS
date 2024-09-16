import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Produto } from '../../../shared/interface';
import { CardProdutoComponent } from '../card-produto';

@Component({
  selector: 'app-carrossel-produtos',
  standalone: true,
  imports: [CommonModule, CarouselModule, CardProdutoComponent],
  templateUrl: './carrossel-produtos.component.html',
  styleUrls: ['./carrossel-produtos.component.css']
})
export class CarrosselProdutosComponent {
  @Input() produtos!: Produto[];

  // Substituir OwlCarouselOConfig por any
  customOptions: any = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };
}
