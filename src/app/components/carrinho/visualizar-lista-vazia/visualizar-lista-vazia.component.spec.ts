import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarListaVaziaComponent } from './visualizar-lista-vazia.component';

describe('VisualizarListaVaziaComponent', () => {
  let component: VisualizarListaVaziaComponent;
  let fixture: ComponentFixture<VisualizarListaVaziaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarListaVaziaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarListaVaziaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
