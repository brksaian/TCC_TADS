import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderVisualizarProdutoComponent } from './header-visualizar-produto.component';

describe('HeaderVisualizarProdutoComponent', () => {
  let component: HeaderVisualizarProdutoComponent;
  let fixture: ComponentFixture<HeaderVisualizarProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderVisualizarProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderVisualizarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
