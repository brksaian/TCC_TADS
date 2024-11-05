import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumidorLayoutComponent } from './consumidor-layout.component';

describe('ConsumidorLayoutComponent', () => {
  let component: ConsumidorLayoutComponent;
  let fixture: ComponentFixture<ConsumidorLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumidorLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsumidorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
