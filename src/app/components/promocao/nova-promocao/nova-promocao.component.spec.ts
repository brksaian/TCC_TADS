import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaPromocaoComponent } from './nova-promocao.component';

describe('NovaPromocaoComponent', () => {
  let component: NovaPromocaoComponent;
  let fixture: ComponentFixture<NovaPromocaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaPromocaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovaPromocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
