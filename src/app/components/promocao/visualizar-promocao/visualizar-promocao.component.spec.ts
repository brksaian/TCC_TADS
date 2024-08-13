import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPromocaoComponent } from './visualizar-promocao.component';

describe('VisualizarPromocaoComponent', () => {
  let component: VisualizarPromocaoComponent;
  let fixture: ComponentFixture<VisualizarPromocaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarPromocaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarPromocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
