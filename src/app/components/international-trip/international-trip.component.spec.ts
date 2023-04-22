import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalTripComponent } from './international-trip.component';

describe('InternationalTripComponent', () => {
  let component: InternationalTripComponent;
  let fixture: ComponentFixture<InternationalTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternationalTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
