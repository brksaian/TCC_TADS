import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPromocaoComponent } from './listar-promocao.component';

describe('ListarPromocaoComponent', () => {
  let component: ListarPromocaoComponent;
  let fixture: ComponentFixture<ListarPromocaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPromocaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarPromocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
