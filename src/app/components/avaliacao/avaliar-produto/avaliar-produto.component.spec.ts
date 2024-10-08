import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliarProdutoComponent } from './avaliar-produto.component';

describe('AvaliarProdutoComponent', () => {
  let component: AvaliarProdutoComponent;
  let fixture: ComponentFixture<AvaliarProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliarProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvaliarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
