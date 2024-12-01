import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardEstabelecimentoAdmComponent } from './card-estabelecimento-adm.component';

describe('CardEstabelecimentoAdmComponent', () => {
  let component: CardEstabelecimentoAdmComponent;
  let fixture: ComponentFixture<CardEstabelecimentoAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEstabelecimentoAdmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEstabelecimentoAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
