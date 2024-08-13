import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaConsumidorComponent } from './conta-consumidor.component';

describe('ContaConsumidorComponent', () => {
  let component: ContaConsumidorComponent;
  let fixture: ComponentFixture<ContaConsumidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContaConsumidorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContaConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
