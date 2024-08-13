import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarListaEnderecoComponent } from './visualizar-lista-endereco.component';

describe('VisualizarListaEnderecoComponent', () => {
  let component: VisualizarListaEnderecoComponent;
  let fixture: ComponentFixture<VisualizarListaEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarListaEnderecoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarListaEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
