import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderperfilusuariodeslogadoComponent } from './headerperfilusuariodeslogado.component';

describe('HeaderperfilusuariodeslogadoComponent', () => {
  let component: HeaderperfilusuariodeslogadoComponent;
  let fixture: ComponentFixture<HeaderperfilusuariodeslogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderperfilusuariodeslogadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderperfilusuariodeslogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
