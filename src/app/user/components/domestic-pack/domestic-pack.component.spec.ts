import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticPackComponent } from './domestic-pack.component';

describe('DomesticPackComponent', () => {
  let component: DomesticPackComponent;
  let fixture: ComponentFixture<DomesticPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomesticPackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomesticPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
