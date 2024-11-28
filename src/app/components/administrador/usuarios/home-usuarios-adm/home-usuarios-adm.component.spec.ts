import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUsuariosADMComponent } from './home-usuarios-adm.component';

describe('HomeUsuariosADMComponent', () => {
  let component: HomeUsuariosADMComponent;
  let fixture: ComponentFixture<HomeUsuariosADMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeUsuariosADMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUsuariosADMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
