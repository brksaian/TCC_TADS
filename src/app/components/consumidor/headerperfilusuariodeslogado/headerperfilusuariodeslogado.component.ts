import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-headerperfilusuariodeslogado',
  standalone: true,
  imports: [],
  templateUrl: './headerperfilusuariodeslogado.component.html',
  styleUrl: './headerperfilusuariodeslogado.component.css',
})
export class HeaderperfilusuariodeslogadoComponent {
  @Input() nome: string = 'Jose Maria';
  @Input() notasCadastradas: number = 30;
  @Input() produtosCadastrados: number = 55;
  @Input() avaliacoes: number = 50;
  @Input() seguindo: number = 50;
  @Input() seguidores: number = 50;
  @Input() estaSeguindo: boolean = false;

  @Output() seguirChange = new EventEmitter<boolean>();

  toggleSeguir(): void {
    this.estaSeguindo = !this.estaSeguindo;
    this.seguirChange.emit(this.estaSeguindo);
  }
}
