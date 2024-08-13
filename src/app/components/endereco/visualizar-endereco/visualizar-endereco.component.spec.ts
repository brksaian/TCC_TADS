import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarEnderecoComponent } from './visualizar-endereco.component';

describe('VisualizarEnderecoComponent', () => {
  let component: VisualizarEnderecoComponent;
  let fixture: ComponentFixture<VisualizarEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarEnderecoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
