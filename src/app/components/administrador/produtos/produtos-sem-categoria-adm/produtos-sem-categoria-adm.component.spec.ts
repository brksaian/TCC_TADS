import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosSemCategoriaAdmComponent } from './produtos-sem-categoria-adm.component';

describe('ProdutosSemCategoriaAdmComponent', () => {
  let component: ProdutosSemCategoriaAdmComponent;
  let fixture: ComponentFixture<ProdutosSemCategoriaAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosSemCategoriaAdmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosSemCategoriaAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
