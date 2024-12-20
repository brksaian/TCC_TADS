import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoEnderecoComponent } from './novo-endereco.component';

describe('NovoEnderecoComponent', () => {
  let component: NovoEnderecoComponent;
  let fixture: ComponentFixture<NovoEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoEnderecoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovoEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
