import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoTesteComponent } from './produto-teste.component';

describe('ProdutoTesteComponent', () => {
  let component: ProdutoTesteComponent;
  let fixture: ComponentFixture<ProdutoTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoTesteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutoTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
