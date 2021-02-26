import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitsCostaricaComponent } from './forfaits-costarica.component';

describe('ForfaitsCostaricaComponent', () => {
  let component: ForfaitsCostaricaComponent;
  let fixture: ComponentFixture<ForfaitsCostaricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitsCostaricaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitsCostaricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
