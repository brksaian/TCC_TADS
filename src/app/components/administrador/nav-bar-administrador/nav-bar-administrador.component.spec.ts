import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAdministradorComponent } from './nav-bar-administrador.component';

describe('NavBarAdministradorComponent', () => {
  let component: NavBarAdministradorComponent;
  let fixture: ComponentFixture<NavBarAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarAdministradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
