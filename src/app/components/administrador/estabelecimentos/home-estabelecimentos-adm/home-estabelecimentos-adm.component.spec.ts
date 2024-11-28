import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEstabelecimentosADMComponent } from './home-estabelecimentos-adm.component';

describe('HomeEstabelecimentosADMComponent', () => {
  let component: HomeEstabelecimentosADMComponent;
  let fixture: ComponentFixture<HomeEstabelecimentosADMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeEstabelecimentosADMComponent] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEstabelecimentosADMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
