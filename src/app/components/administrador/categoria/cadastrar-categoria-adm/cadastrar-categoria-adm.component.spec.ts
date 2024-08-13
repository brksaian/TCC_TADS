import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCategoriaADMComponent } from './cadastrar-categoria-adm.component';

describe('CadastrarCategoriaADMComponent', () => {
  let component: CadastrarCategoriaADMComponent;
  let fixture: ComponentFixture<CadastrarCategoriaADMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarCategoriaADMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarCategoriaADMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
