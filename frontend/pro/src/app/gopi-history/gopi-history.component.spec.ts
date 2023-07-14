import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopiHistoryComponent } from './gopi-history.component';

describe('GopiHistoryComponent', () => {
  let component: GopiHistoryComponent;
  let fixture: ComponentFixture<GopiHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GopiHistoryComponent]
    });
    fixture = TestBed.createComponent(GopiHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
