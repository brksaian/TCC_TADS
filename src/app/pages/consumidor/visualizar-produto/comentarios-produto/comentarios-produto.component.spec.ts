import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosProdutoComponent } from './comentarios-produto.component';

describe('ComentariosProdutoComponent', () => {
  let component: ComentariosProdutoComponent;
  let fixture: ComponentFixture<ComentariosProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentariosProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComentariosProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
