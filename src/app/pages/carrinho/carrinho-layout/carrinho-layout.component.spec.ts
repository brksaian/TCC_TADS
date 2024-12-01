import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoLayoutComponent } from './carrinho-layout.component';

describe('CarrinhoLayoutComponent', () => {
  let component: CarrinhoLayoutComponent;
  let fixture: ComponentFixture<CarrinhoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrinhoLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrinhoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
