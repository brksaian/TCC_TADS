import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProdutoADMComponent } from './editar-produto-adm.component';

describe('EditarProdutoADMComponent', () => {
  let component: EditarProdutoADMComponent;
  let fixture: ComponentFixture<EditarProdutoADMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarProdutoADMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarProdutoADMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
