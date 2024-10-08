import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosSimilaresComponent } from './produtos-similares.component';

describe('ProdutosSimilaresComponent', () => {
  let component: ProdutosSimilaresComponent;
  let fixture: ComponentFixture<ProdutosSimilaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosSimilaresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutosSimilaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
