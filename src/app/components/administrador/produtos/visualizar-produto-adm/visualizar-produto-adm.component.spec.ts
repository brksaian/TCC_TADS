import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarProdutoADMComponent } from './visualizar-produto-adm.component';

describe('VisualizarProdutoADMComponent', () => {
  let component: VisualizarProdutoADMComponent;
  let fixture: ComponentFixture<VisualizarProdutoADMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarProdutoADMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarProdutoADMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
