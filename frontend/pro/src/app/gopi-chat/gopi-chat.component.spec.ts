import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopiChatComponent } from './gopi-chat.component';

describe('GopiChatComponent', () => {
  let component: GopiChatComponent;
  let fixture: ComponentFixture<GopiChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GopiChatComponent]
    });
    fixture = TestBed.createComponent(GopiChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
