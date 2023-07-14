import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamHistoryComponent } from './ram-history.component';

describe('RamHistoryComponent', () => {
  let component: RamHistoryComponent;
  let fixture: ComponentFixture<RamHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RamHistoryComponent]
    });
    fixture = TestBed.createComponent(RamHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
