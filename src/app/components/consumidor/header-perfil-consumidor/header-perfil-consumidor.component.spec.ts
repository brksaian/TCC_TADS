import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPerfilConsumidorComponent } from './header-perfil-consumidor.component';

describe('HeaderPerfilConsumidorComponent', () => {
  let component: HeaderPerfilConsumidorComponent;
  let fixture: ComponentFixture<HeaderPerfilConsumidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderPerfilConsumidorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderPerfilConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
