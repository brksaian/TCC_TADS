import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEstabelecimentoADMComponent } from './editar-estabelecimento-adm.component';

describe('EditarEstabelecimentoADMComponent', () => {
  let component: EditarEstabelecimentoADMComponent;
  let fixture: ComponentFixture<EditarEstabelecimentoADMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarEstabelecimentoADMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarEstabelecimentoADMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
