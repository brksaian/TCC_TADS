import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilWebSeguidoresComponent } from './perfil-web-seguidores.component';

describe('PerfilWebSeguidoresComponent', () => {
  let component: PerfilWebSeguidoresComponent;
  let fixture: ComponentFixture<PerfilWebSeguidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilWebSeguidoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilWebSeguidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
