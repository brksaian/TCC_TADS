import { Component, Input } from '@angular/core';
import { Estabelecimento } from '../../../shared/interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-endereco',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-endereco.component.html',
  styleUrls: ['./card-endereco.component.css']
})
export class CardEnderecoComponent {
  @Input() estabelecimento!: Estabelecimento;
}
