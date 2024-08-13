import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarNotificacaoComponent } from './visualizar-notificacao.component';

describe('VisualizarNotificacaoComponent', () => {
  let component: VisualizarNotificacaoComponent;
  let fixture: ComponentFixture<VisualizarNotificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarNotificacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarNotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
