import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderVisualizarEstabelecimentoComponent } from './header-visualizar-estabelecimento.component';

describe('HeaderVisualizarEstabelecimentoComponent', () => {
  let component: HeaderVisualizarEstabelecimentoComponent;
  let fixture: ComponentFixture<HeaderVisualizarEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderVisualizarEstabelecimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderVisualizarEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
