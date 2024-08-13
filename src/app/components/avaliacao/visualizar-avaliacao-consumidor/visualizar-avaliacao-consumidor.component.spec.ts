import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarAvaliacaoConsumidorComponent } from './visualizar-avaliacao-consumidor.component';

describe('VisualizarAvaliacaoConsumidorComponent', () => {
  let component: VisualizarAvaliacaoConsumidorComponent;
  let fixture: ComponentFixture<VisualizarAvaliacaoConsumidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarAvaliacaoConsumidorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarAvaliacaoConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
