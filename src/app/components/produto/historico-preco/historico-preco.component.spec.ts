import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoricoPrecoComponent } from '../../../pages/consumidor/visualizar-produto';


describe('HistoricoPrecoComponent', () => {
  let component: HistoricoPrecoComponent;
  let fixture: ComponentFixture<HistoricoPrecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoPrecoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
