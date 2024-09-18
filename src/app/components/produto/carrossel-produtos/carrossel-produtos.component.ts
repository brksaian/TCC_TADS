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

  customOptions: any = {
    loop: false,                // Loop desativado para parar no final
    margin: 10,                 // Espaçamento entre os itens
    nav: true,                  // Botões de navegação ativados
    dots: false,                // Paginador (pontos) desativado
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,               // 1 item em telas pequenas
        nav: true
      },
      600: {
        items: 2,               // 2 itens em telas médias
        nav: true
      },
      1000: {
        items: 3,               // 3 itens em telas grandes
        nav: true
      }
    },
    autoplay: false,            // Autoplay desativado (opcional)
    autoplayTimeout: 5000,      // Tempo de autoplay se ativado
    autoplayHoverPause: true,   // Pausar autoplay ao passar o mouse
  };

}
