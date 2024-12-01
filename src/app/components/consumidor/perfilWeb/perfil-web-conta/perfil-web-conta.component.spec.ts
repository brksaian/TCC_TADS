import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilWebContaComponent } from './perfil-web-conta.component';

describe('PerfilWebContaComponent', () => {
  let component: PerfilWebContaComponent;
  let fixture: ComponentFixture<PerfilWebContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilWebContaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilWebContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
