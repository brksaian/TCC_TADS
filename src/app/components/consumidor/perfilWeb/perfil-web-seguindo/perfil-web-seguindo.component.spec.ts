import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilWebSeguindoComponent } from './perfil-web-seguindo.component';

describe('PerfilWebSeguindoComponent', () => {
  let component: PerfilWebSeguindoComponent;
  let fixture: ComponentFixture<PerfilWebSeguindoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilWebSeguindoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilWebSeguindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
