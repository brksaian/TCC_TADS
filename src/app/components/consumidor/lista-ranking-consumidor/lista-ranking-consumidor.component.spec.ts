import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRankingConsumidorComponent } from './lista-ranking-consumidor.component';

describe('ListaRankingConsumidorComponent', () => {
  let component: ListaRankingConsumidorComponent;
  let fixture: ComponentFixture<ListaRankingConsumidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaRankingConsumidorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaRankingConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
