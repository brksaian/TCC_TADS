import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import Swiper from 'swiper';
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

  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // Telas muito pequenas (smartphones)
        320: {
          slidesPerView: 1, // Um card visível
        },
        // Telas pequenas (smartphones maiores ou tablets pequenos)
        480: {
          slidesPerView: 1, // Um card visível
        },
        // Telas médias (tablets)
        640: {
          slidesPerView: 2, // Dois cards visíveis
        },
        // Telas médias-grandes (tablets maiores ou laptops pequenos)
        768: {
          slidesPerView: 2, // Dois cards visíveis
        },
        // Telas grandes (laptops)
        1024: {
          slidesPerView: 3, // Três cards visíveis
        },
        // Telas muito grandes (monitores maiores)
        1280: {
          slidesPerView: 4, // Quatro cards visíveis
        },
        // Telas de desktops grandes
        1360: {
          slidesPerView: 4, // Quatro cards visíveis
        },
        // Telas de desktops muito grandes
        1600: {
          slidesPerView: 5, // Cinco cards visíveis
        },
        // Telas ultragrandes (monitores widescreen)
        1920: {
          slidesPerView: 6, // Seis cards visíveis
        },
        // Telas muito largas (monitores ultrawide ou setups multimonitor)
        2400: {
          slidesPerView: 7, // Sete cards visíveis
        },
      },
    });
  }

}
