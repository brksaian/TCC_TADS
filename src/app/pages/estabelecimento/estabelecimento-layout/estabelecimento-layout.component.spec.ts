import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoLayoutComponent } from './estabelecimento-layout.component';

describe('EstabelecimentoLayoutComponent', () => {
  let component: EstabelecimentoLayoutComponent;
  let fixture: ComponentFixture<EstabelecimentoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstabelecimentoLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstabelecimentoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
