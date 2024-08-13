import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAvaliacaoADMComponent } from './card-avaliacao-adm.component';

describe('CardAvaliacaoADMComponent', () => {
  let component: CardAvaliacaoADMComponent;
  let fixture: ComponentFixture<CardAvaliacaoADMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAvaliacaoADMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAvaliacaoADMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
