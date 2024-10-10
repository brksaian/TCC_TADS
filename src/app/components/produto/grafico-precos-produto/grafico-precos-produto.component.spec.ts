import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoPrecosProdutoComponent } from './grafico-precos-produto.component';

describe('GraficoPrecosProdutoComponent', () => {
  let component: GraficoPrecosProdutoComponent;
  let fixture: ComponentFixture<GraficoPrecosProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoPrecosProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficoPrecosProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
