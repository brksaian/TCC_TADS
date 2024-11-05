import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AvaliacaoService, EstabelecimentoService, ProdutoService, UserService } from '../../../../services';
import { Avaliacao, Estabelecimento, PrecoProduto, Produto } from '../../../../shared/interface';
import { AvaliarProdutoComponent } from '../../../avaliacao/avaliar-produto/avaliar-produto.component';
import { ProdutosSimilaresComponent } from '../produtos-similares';

@Component({
  selector: 'app-header-visualizar-produto',
  standalone: true,
  imports: [CommonModule, ProdutosSimilaresComponent, AvaliarProdutoComponent],
  templateUrl: './header-visualizar-produto.component.html',
  styleUrl: './header-visualizar-produto.component.css'
})
export class HeaderVisualizarProdutoComponent implements OnInit {
  @Input() produto!: Produto;

  precos: PrecoProduto[] = [];
  avaliacoes: Avaliacao[] = [];
  loadingPrecos = false;
  loadingAvaliacoes = false;
  errorPrecos: string | null = null;
  errorAvaliacoes: string | null = null;
  estabelecimentoNome: string | null = null;

  constructor(private produtoService: ProdutoService,
    private estabelecimentoService: EstabelecimentoService,
    private avaliacaoService: AvaliacaoService,
    private userService: UserService
  ) {

  }

  ngOnInit() {
    this.fetchPrecos();
    this.fetchAvaliacoes();
  }

  fetchPrecos() {
    this.loadingPrecos = true;
    this.errorPrecos = null;

    this.produtoService.getPrecosProdutoById(this.produto.id).subscribe({
      next: (precos) => {
        this.precos = precos;
        this.loadingPrecos = false;
      },
      error: (err) => {
        this.errorPrecos = 'Erro ao carregar os preços';
        this.loadingPrecos = false;
      },
    });
  }

  fetchAvaliacoes() {
    this.loadingAvaliacoes = true;
    this.errorAvaliacoes = null;

    this.produtoService.getAvaliacoesProduto(this.produto.id).subscribe({
      next: (avaliacoes) => {
        this.avaliacoes = avaliacoes;
        this.loadingAvaliacoes = false;
      },
      error: (err) => {
        this.errorAvaliacoes = 'Erro ao carregar as avaliações';
        this.loadingAvaliacoes = false;
      },
    });
  }

  getEstrelasMedia(): number {
    if (this.avaliacoes.length === 0) return 0;

    const totalEstrelas = this.avaliacoes.reduce((total, avaliacao) => total + avaliacao.estrelas, 0);
    return totalEstrelas / this.avaliacoes.length;
  }

  getMenorPreco(): { preco: number, estabelecimento_id: number } | null {
    if (this.precos.length === 0) return null;
    const menorPreco = this.precos.reduce((prev, current) => (prev.preco < current.preco ? prev : current));
    return { preco: menorPreco.preco, estabelecimento_id: menorPreco.estabelecimento_id };
  }

  getQuantidadeAvaliacoes(): number {
    return this.avaliacoes.length;
  }

  getNomeEstabelecimento(estabelecimento_id: number): void {
    this.estabelecimentoService.getEstabelecimentoById(estabelecimento_id).subscribe({
      next: (estabelecimento: Estabelecimento) => {
        console.log(estabelecimento.nome);
        this.estabelecimentoNome = estabelecimento.nome;
      },
      error: (err) => {
        console.error('Erro ao buscar o estabelecimento:', err);
        this.estabelecimentoNome = 'Desconhecido';
      }
    });
  }


  adicionarLista() {
    console.log('Adicionar à Lista clicado');
  }

  favoritar() {
    console.log('Favoritar clicado');
  }

  showModal = false;

  avaliar() {
    this.showModal = true;
  }

  fecharModal() {
    this.showModal = false;
  }

  enviarAvaliacao(avaliacao: { estrelas: number, comentario: string }) {
    const novaAvaliacao: Avaliacao = {
      id: 0,
      created_at: new Date().toUTCString(),
      produto_id: this.produto.id,
      estrelas: avaliacao.estrelas,
      comentario: avaliacao.comentario,
      usuario_id: this.userService.getIdUsuarioLogado()
    };
    this.avaliacaoService.salvarAvaliacao(novaAvaliacao).subscribe({
      next: (response) => {
        console.log('Avaliação salva com sucesso:', response);
        this.fecharModal();
      },
      error: (err) => {
        console.error('Erro ao salvar a avaliação:', err);
        this.fecharModal();
      }
    });
  }

}
