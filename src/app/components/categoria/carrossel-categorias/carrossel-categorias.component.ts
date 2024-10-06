import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CardCategoriaComponent } from '../card-categoria';

@Component({
  selector: 'app-carrossel-categorias',
  standalone: true,
  imports: [CommonModule, CarouselModule, CardCategoriaComponent],
  templateUrl: './carrossel-categorias.component.html',
  styleUrls: ['./carrossel-categorias.component.css']
})
export class CarrosselCategoriasComponent {
  @Input() categorias: any[] = [];
  currentIndex = signal(0);

  itemsPerPage = computed(() => {
    const width = window.innerWidth;
    console.log('Tamanho da tela:', width);

    if (width <= 240) {
      return 1;
    } else if (width <= 480) {
      return 2;
    } else if (width <= 640) {
      return 3;
    } else if (width <= 768) {
      return 3;
    } else if (width <= 1024) {
      return 5;
    } else if (width <= 1280) {
      return 6;
    } else if (width <= 1536) {
      return 7;
    } else if (width <= 1920) {
      return 8;
    } else if (width <= 2560) {
      return 10;
    } else {
      return 7;
    }
  });

  slide(direction: number) {
    const maxIndex = this.categorias.length - this.itemsPerPage();
    const nextIndex = this.currentIndex() + direction * this.itemsPerPage();

    if (nextIndex < 0) {
      this.currentIndex.set(0);
    } else if (nextIndex > maxIndex) {
      this.currentIndex.set(maxIndex);
    } else {
      this.currentIndex.set(nextIndex);
    }
  }

  get displayedCategories() {
    const start = this.currentIndex();
    const end = start + this.itemsPerPage();
    return this.categorias.slice(start, end);
  }
}

