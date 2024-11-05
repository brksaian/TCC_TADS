import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingConsumidorComponent } from './ranking-consumidor.component';

describe('RankingConsumidorComponent', () => {
  let component: RankingConsumidorComponent;
  let fixture: ComponentFixture<RankingConsumidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingConsumidorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RankingConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
