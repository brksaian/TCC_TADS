import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top3UsersComponent } from './top3-users.component';

describe('Top3UsersComponent', () => {
  let component: Top3UsersComponent;
  let fixture: ComponentFixture<Top3UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top3UsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Top3UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
