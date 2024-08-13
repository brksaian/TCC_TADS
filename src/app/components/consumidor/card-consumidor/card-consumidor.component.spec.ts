import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConsumidorComponent } from './card-consumidor.component';

describe('CardConsumidorComponent', () => {
  let component: CardConsumidorComponent;
  let fixture: ComponentFixture<CardConsumidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardConsumidorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
