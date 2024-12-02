import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosSemImagemAdmComponent } from './produtos-sem-imagem-adm.component';

describe('ProdutosSemImagemAdmComponent', () => {
  let component: ProdutosSemImagemAdmComponent;
  let fixture: ComponentFixture<ProdutosSemImagemAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosSemImagemAdmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosSemImagemAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
