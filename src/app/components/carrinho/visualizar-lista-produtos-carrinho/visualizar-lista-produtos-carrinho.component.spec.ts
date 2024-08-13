import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarListaProdutosCarrinhoComponent } from './visualizar-lista-produtos-carrinho.component';

describe('VisualizarListaProdutosCarrinhoComponent', () => {
  let component: VisualizarListaProdutosCarrinhoComponent;
  let fixture: ComponentFixture<VisualizarListaProdutosCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarListaProdutosCarrinhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarListaProdutosCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
