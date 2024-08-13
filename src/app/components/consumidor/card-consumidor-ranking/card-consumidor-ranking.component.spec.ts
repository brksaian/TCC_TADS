import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConsumidorRankingComponent } from './card-consumidor-ranking.component';

describe('CardConsumidorRankingComponent', () => {
  let component: CardConsumidorRankingComponent;
  let fixture: ComponentFixture<CardConsumidorRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardConsumidorRankingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardConsumidorRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
