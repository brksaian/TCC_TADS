import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProdutoSimilarComponent } from './card-produto-similar.component';

describe('CardProdutoSimilarComponent', () => {
  let component: CardProdutoSimilarComponent;
  let fixture: ComponentFixture<CardProdutoSimilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProdutoSimilarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardProdutoSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
