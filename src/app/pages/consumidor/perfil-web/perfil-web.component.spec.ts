import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilWebComponent } from './perfil-web.component';

describe('PerfilWebComponent', () => {
  let component: PerfilWebComponent;
  let fixture: ComponentFixture<PerfilWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
