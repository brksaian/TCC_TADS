import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarNotificacoesConsumidorComponent } from './visualizar-notificacoes-consumidor.component';

describe('VisualizarNotificacoesConsumidorComponent', () => {
  let component: VisualizarNotificacoesConsumidorComponent;
  let fixture: ComponentFixture<VisualizarNotificacoesConsumidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarNotificacoesConsumidorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarNotificacoesConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
