import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEstabelecimentoComponent } from './footer-estabelecimento.component';

describe('FooterEstabelecimentoComponent', () => {
  let component: FooterEstabelecimentoComponent;
  let fixture: ComponentFixture<FooterEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterEstabelecimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
