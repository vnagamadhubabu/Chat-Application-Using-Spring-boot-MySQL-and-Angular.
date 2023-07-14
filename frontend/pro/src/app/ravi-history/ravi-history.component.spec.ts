import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaviHistoryComponent } from './ravi-history.component';

describe('RaviHistoryComponent', () => {
  let component: RaviHistoryComponent;
  let fixture: ComponentFixture<RaviHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaviHistoryComponent]
    });
    fixture = TestBed.createComponent(RaviHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
