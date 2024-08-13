import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarListaPromocaoComponent } from './visualizar-lista-promocao.component';

describe('VisualizarListaPromocaoComponent', () => {
  let component: VisualizarListaPromocaoComponent;
  let fixture: ComponentFixture<VisualizarListaPromocaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarListaPromocaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarListaPromocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
