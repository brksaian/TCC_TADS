import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEstabelecimentoComponent } from './header-estabelecimento.component';

describe('HeaderEstabelecimentoComponent', () => {
  let component: HeaderEstabelecimentoComponent;
  let fixture: ComponentFixture<HeaderEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderEstabelecimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
