import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilWebNotificacoesComponent } from './perfil-web-notificacoes.component';

describe('PerfilWebNotificacoesComponent', () => {
  let component: PerfilWebNotificacoesComponent;
  let fixture: ComponentFixture<PerfilWebNotificacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilWebNotificacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilWebNotificacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
