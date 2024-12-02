import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaEstabelecimentoComponent } from './busca-estabelecimento.component';

describe('BuscaEstabelecimentoComponent', () => {
  let component: BuscaEstabelecimentoComponent;
  let fixture: ComponentFixture<BuscaEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscaEstabelecimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscaEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
