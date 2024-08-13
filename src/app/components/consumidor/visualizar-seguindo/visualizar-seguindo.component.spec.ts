import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarSeguindoComponent } from './visualizar-seguindo.component';

describe('VisualizarSeguindoComponent', () => {
  let component: VisualizarSeguindoComponent;
  let fixture: ComponentFixture<VisualizarSeguindoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarSeguindoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarSeguindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
