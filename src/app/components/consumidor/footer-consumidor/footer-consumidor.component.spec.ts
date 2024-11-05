import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterConsumidorComponent } from './footer-consumidor.component';

describe('FooterConsumidorComponent', () => {
  let component: FooterConsumidorComponent;
  let fixture: ComponentFixture<FooterConsumidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterConsumidorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
