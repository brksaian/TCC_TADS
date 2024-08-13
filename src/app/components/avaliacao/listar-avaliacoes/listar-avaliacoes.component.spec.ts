import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAvaliacoesComponent } from './listar-avaliacoes.component';

describe('ListarAvaliacoesComponent', () => {
  let component: ListarAvaliacoesComponent;
  let fixture: ComponentFixture<ListarAvaliacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarAvaliacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarAvaliacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
