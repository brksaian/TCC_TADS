import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderConsumidorComponent } from './header-consumidor.component';

describe('HeaderConsumidorComponent', () => {
  let component: HeaderConsumidorComponent;
  let fixture: ComponentFixture<HeaderConsumidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderConsumidorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
