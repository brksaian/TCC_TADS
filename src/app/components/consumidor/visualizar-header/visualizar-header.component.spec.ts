import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarHeaderComponent } from './visualizar-header.component';

describe('VisualizarHeaderComponent', () => {
  let component: VisualizarHeaderComponent;
  let fixture: ComponentFixture<VisualizarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
