import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallRecieveDialogComponent } from './call-recieve-dialog.component';

describe('CallRecieveDialogComponent', () => {
  let component: CallRecieveDialogComponent;
  let fixture: ComponentFixture<CallRecieveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallRecieveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallRecieveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
