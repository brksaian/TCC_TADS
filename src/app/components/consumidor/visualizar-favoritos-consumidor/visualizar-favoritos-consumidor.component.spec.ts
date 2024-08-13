import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarFavoritosConsumidorComponent } from './visualizar-favoritos-consumidor.component';

describe('VisualizarFavoritosConsumidorComponent', () => {
  let component: VisualizarFavoritosConsumidorComponent;
  let fixture: ComponentFixture<VisualizarFavoritosConsumidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarFavoritosConsumidorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarFavoritosConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
