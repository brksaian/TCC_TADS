import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEstabelecimentosComponent } from './listar-estabelecimentos.component';

describe('ListarEstabelecimentosComponent', () => {
  let component: ListarEstabelecimentosComponent;
  let fixture: ComponentFixture<ListarEstabelecimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarEstabelecimentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarEstabelecimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
