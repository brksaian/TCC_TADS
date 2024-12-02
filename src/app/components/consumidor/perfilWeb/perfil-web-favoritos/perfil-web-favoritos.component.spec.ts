import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilWebFavoritosComponent } from './perfil-web-favoritos.component';

describe('PerfilWebFavoritosComponent', () => {
  let component: PerfilWebFavoritosComponent;
  let fixture: ComponentFixture<PerfilWebFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilWebFavoritosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilWebFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
