import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocoesEstabelecimentoComponent } from './promocoes-estabelecimento.component';

describe('PromocoesEstabelecimentoComponent', () => {
  let component: PromocoesEstabelecimentoComponent;
  let fixture: ComponentFixture<PromocoesEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromocoesEstabelecimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromocoesEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
