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
    return 1; // Celulares super pequenos ou telas muito compactas
  } else if (width <= 360) {
    return 1; // Celulares pequenos
  } else if (width <= 480) {
    return 2; // Celulares médios
  } else if (width <= 640) {
    return 3; // Celulares grandes e pequenos tablets
  } else if (width <= 768) {
    return 4; // Tablets pequenos em modo retrato
  } else if (width <= 1024) {
    return 5; // Tablets médios e grandes
  } else if (width <= 1280) {
    return 6; // Laptops menores
  } else if (width <= 1440) {
    return 7; // Laptops médios e monitores pequenos
  } else if (width <= 1600) {
    return 8; // Laptops grandes e monitores médios
  } else if (width <= 1920) {
    return 10; // Monitores Full HD
  } else if (width <= 2560) {
    return 13; // Monitores 2K
  } else if (width <= 3440) {
    return 14; // Monitores Ultrawide
  } else if (width <= 3840) {
    return 16; // Monitores 4K
  } else {
    return 20; // Monitores maiores ou resoluções superiores
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

