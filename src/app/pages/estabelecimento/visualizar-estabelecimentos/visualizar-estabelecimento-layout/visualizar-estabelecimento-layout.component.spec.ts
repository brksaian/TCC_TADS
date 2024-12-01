import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarEstabelecimentoLayoutComponent } from './visualizar-estabelecimento-layout.component';

describe('VisualizarEstabelecimentoLayoutComponent', () => {
  let component: VisualizarEstabelecimentoLayoutComponent;
  let fixture: ComponentFixture<VisualizarEstabelecimentoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarEstabelecimentoLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarEstabelecimentoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
