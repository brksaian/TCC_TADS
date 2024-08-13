import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNotificacaoComponent } from './listar-notificacao.component';

describe('ListarNotificacaoComponent', () => {
  let component: ListarNotificacaoComponent;
  let fixture: ComponentFixture<ListarNotificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarNotificacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarNotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
