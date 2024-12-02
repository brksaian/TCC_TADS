import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilWebMenuComponent } from './perfil-web-menu.component';

describe('PerfilWebMenuComponent', () => {
  let component: PerfilWebMenuComponent;
  let fixture: ComponentFixture<PerfilWebMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilWebMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilWebMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
