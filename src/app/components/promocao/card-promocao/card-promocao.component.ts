import { Component, Input } from '@angular/core';
import { Promocao } from '../../../shared/interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-promocao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-promocao.component.html',
  styleUrls: ['./card-promocao.component.css']
})
export class CardPromocaoComponent {
  @Input() promocao!: Promocao;
}
