import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarEstabelecimentoADMComponent } from './visualizar-estabelecimento-adm.component';

describe('VisualizarEstabelecimentoADMComponent', () => {
  let component: VisualizarEstabelecimentoADMComponent;
  let fixture: ComponentFixture<VisualizarEstabelecimentoADMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarEstabelecimentoADMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarEstabelecimentoADMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
