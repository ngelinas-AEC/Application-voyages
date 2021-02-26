import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitsCubaComponent } from './forfaits-cuba.component';

describe('ForfaitsCubaComponent', () => {
  let component: ForfaitsCubaComponent;
  let fixture: ComponentFixture<ForfaitsCubaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitsCubaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitsCubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
