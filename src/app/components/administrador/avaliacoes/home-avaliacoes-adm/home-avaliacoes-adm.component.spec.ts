import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAvaliacoesADMComponent } from './home-avaliacoes-adm.component';

describe('HomeAvaliacoesADMComponent', () => {
  let component: HomeAvaliacoesADMComponent;
  let fixture: ComponentFixture<HomeAvaliacoesADMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAvaliacoesADMComponent] // Alterado para HomeAvaliacoesADMComponent
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAvaliacoesADMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
