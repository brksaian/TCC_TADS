import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizualizarNotaComponent } from './vizualizar-nota.component';

describe('VizualizarNotaComponent', () => {
  let component: VizualizarNotaComponent;
  let fixture: ComponentFixture<VizualizarNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VizualizarNotaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VizualizarNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
