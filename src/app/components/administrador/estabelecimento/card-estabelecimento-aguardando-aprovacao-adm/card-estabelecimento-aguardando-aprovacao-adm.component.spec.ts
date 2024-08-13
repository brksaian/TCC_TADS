import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEstabelecimentoAguardandoAprovacaoADMComponent } from './card-estabelecimento-aguardando-aprovacao-adm.component';

describe('CardEstabelecimentoAguardandoAprovacaoADMComponent', () => {
  let component: CardEstabelecimentoAguardandoAprovacaoADMComponent;
  let fixture: ComponentFixture<CardEstabelecimentoAguardandoAprovacaoADMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEstabelecimentoAguardandoAprovacaoADMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardEstabelecimentoAguardandoAprovacaoADMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
