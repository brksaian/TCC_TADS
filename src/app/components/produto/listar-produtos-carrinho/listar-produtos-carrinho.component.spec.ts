import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProdutosCarrinhoComponent } from './listar-produtos-carrinho.component';

describe('ListarProdutosCarrinhoComponent', () => {
  let component: ListarProdutosCarrinhoComponent;
  let fixture: ComponentFixture<ListarProdutosCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarProdutosCarrinhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarProdutosCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
