import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarCarrinhoComponent } from './visualizar-carrinho.component';

describe('VisualizarCarrinhoComponent', () => {
  let component: VisualizarCarrinhoComponent;
  let fixture: ComponentFixture<VisualizarCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarCarrinhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
