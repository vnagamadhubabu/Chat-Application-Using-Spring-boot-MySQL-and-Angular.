import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaviChatComponent } from './ravi-chat.component';

describe('RaviChatComponent', () => {
  let component: RaviChatComponent;
  let fixture: ComponentFixture<RaviChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaviChatComponent]
    });
    fixture = TestBed.createComponent(RaviChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
