import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselProdutosSimilaresComponent } from './carrossel-produtos-similares.component';

describe('CarrosselProdutosSimilaresComponent', () => {
  let component: CarrosselProdutosSimilaresComponent;
  let fixture: ComponentFixture<CarrosselProdutosSimilaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosselProdutosSimilaresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrosselProdutosSimilaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
