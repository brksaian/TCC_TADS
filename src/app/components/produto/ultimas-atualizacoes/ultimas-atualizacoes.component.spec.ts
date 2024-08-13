import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimasAtualizacoesComponent } from './ultimas-atualizacoes.component';

describe('UltimasAtualizacoesComponent', () => {
  let component: UltimasAtualizacoesComponent;
  let fixture: ComponentFixture<UltimasAtualizacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltimasAtualizacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UltimasAtualizacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
