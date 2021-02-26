import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitMiniComponent } from './forfait-mini.component';

describe('ForfaitMiniComponent', () => {
  let component: ForfaitMiniComponent;
  let fixture: ComponentFixture<ForfaitMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitMiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
