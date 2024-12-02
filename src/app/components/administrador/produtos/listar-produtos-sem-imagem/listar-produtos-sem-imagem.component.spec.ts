import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProdutosSemImagemComponent } from './listar-produtos-sem-imagem.component';

describe('ListarProdutosSemImagemComponent', () => {
  let component: ListarProdutosSemImagemComponent;
  let fixture: ComponentFixture<ListarProdutosSemImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarProdutosSemImagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarProdutosSemImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
