import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacoesuserComponent } from './avaliacoesuser.component';

describe('AvaliacoesuserComponent', () => {
  let component: AvaliacoesuserComponent;
  let fixture: ComponentFixture<AvaliacoesuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacoesuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvaliacoesuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
