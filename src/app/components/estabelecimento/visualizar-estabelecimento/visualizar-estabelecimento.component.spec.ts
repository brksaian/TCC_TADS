import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarEstabelecimentoComponent } from './visualizar-estabelecimento.component';

describe('VisualizarEstabelecimentoComponent', () => {
  let component: VisualizarEstabelecimentoComponent;
  let fixture: ComponentFixture<VisualizarEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarEstabelecimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
