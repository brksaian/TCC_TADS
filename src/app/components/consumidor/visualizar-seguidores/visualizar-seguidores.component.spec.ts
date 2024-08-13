import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarSeguidoresComponent } from './visualizar-seguidores.component';

describe('VisualizarSeguidoresComponent', () => {
  let component: VisualizarSeguidoresComponent;
  let fixture: ComponentFixture<VisualizarSeguidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarSeguidoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarSeguidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
