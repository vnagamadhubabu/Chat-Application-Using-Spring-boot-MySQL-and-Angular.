import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamChatComponent } from './ram-chat.component';

describe('RamChatComponent', () => {
  let component: RamChatComponent;
  let fixture: ComponentFixture<RamChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RamChatComponent]
    });
    fixture = TestBed.createComponent(RamChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
