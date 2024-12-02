import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentosPendentesAprovacaoComponent } from './estabelecimentos-pendentes-aprovacao.component';

describe('EstabelecimentosPendentesAprovacaoComponent', () => {
  let component: EstabelecimentosPendentesAprovacaoComponent;
  let fixture: ComponentFixture<EstabelecimentosPendentesAprovacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstabelecimentosPendentesAprovacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstabelecimentosPendentesAprovacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
