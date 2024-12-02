import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProdutosSemCategoriaComponent } from './listar-produtos-sem-categoria.component';

describe('ListarProdutosSemCategoriaComponent', () => {
  let component: ListarProdutosSemCategoriaComponent;
  let fixture: ComponentFixture<ListarProdutosSemCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarProdutosSemCategoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarProdutosSemCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
