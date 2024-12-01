import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilWebHeaderComponent } from './perfil-web-header.component';

describe('PerfilWebHeaderComponent', () => {
  let component: PerfilWebHeaderComponent;
  let fixture: ComponentFixture<PerfilWebHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilWebHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilWebHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
