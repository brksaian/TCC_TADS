import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecosEstabelecimentoComponent } from './enderecos-estabelecimento.component';

describe('EnderecosEstabelecimentoComponent', () => {
  let component: EnderecosEstabelecimentoComponent;
  let fixture: ComponentFixture<EnderecosEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnderecosEstabelecimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnderecosEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
