import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CardProdutoComponent } from '../card-produto';

@Component({
  selector: 'app-carrossel-produtos',
  standalone: true,
  imports: [CommonModule, CarouselModule, CardProdutoComponent],
  templateUrl: './carrossel-produtos.component.html',
  styleUrls: ['./carrossel-produtos.component.css']
})
export class CarrosselProdutosComponent {
  @Input() produtos: any[] = [];
  currentIndex = signal(0);

  itemsPerPage = computed(() => {
    const width = window.innerWidth;
    console.log('Tamanho da tela:', width);

    if (width <= 480) {
      return 1;
    } else if (width <= 640) {
      return 1;
    } else if (width <= 768) {
      return 2;
    } else if (width <= 1024) {
      return 2;
    } else if (width <= 1280) {
      return 3;
    } else if (width <= 1536) {
      return 4;
    } else if (width <= 1920) {
      return 5;
    } else if (width <= 2560) {
      return 6;
    } else {
      return 7;
    }
  });


  slide(direction: number) {
    const maxIndex = this.produtos.length - this.itemsPerPage();
    const nextIndex = this.currentIndex() + direction * this.itemsPerPage();

    if (nextIndex < 0) {
      this.currentIndex.set(0);
    } else if (nextIndex > maxIndex) {
      this.currentIndex.set(maxIndex);
    } else {
      this.currentIndex.set(nextIndex);
    }
  }
}
