import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilWebNotasComponent } from './perfil-web-notas.component';

describe('PerfilWebNotasComponent', () => {
  let component: PerfilWebNotasComponent;
  let fixture: ComponentFixture<PerfilWebNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilWebNotasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilWebNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
