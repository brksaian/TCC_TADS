import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsumidorADMComponent } from './editar-consumidor-adm.component';

describe('EditarConsumidorADMComponent', () => {
  let component: EditarConsumidorADMComponent;
  let fixture: ComponentFixture<EditarConsumidorADMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarConsumidorADMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarConsumidorADMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
