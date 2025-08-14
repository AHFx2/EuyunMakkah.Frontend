import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbageDetails } from './garbage-details';

describe('GarbageDetails', () => {
  let component: GarbageDetails;
  let fixture: ComponentFixture<GarbageDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarbageDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarbageDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
