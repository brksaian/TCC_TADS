import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-aviso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-aviso.component.html',
  styleUrls: ['./modal-aviso.component.css']
})
export class ModalAvisoComponent implements OnInit {
  @Input() tipo: 'sucesso' | 'erro' | 'atencao' = 'sucesso';
  @Input() titulo: string = '';
  @Input() mensagem: string = '';
  @Input() tempoFechar: number = 10000; // Tempo até fechar em milissegundos (10 segundos)

  mostrarModal = true;

  ngOnInit(): void {
    // Fecha a modal automaticamente após o tempo especificado
    setTimeout(() => {
      this.mostrarModal = false;
    }, this.tempoFechar);
  }

  fecharModal() {
    this.mostrarModal = false;
  }
}
