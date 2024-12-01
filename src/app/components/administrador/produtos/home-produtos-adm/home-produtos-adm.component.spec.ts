import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProdutosADMComponent } from './home-produtos-adm.component';

describe('HomeProdutosADMComponent', () => {
  let component: HomeProdutosADMComponent;
  let fixture: ComponentFixture<HomeProdutosADMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProdutosADMComponent] // Alterado para HomeProdutosADMComponent
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProdutosADMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
