import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizdoComponent } from './quizdo.component';

describe('QuizdoComponent', () => {
  let component: QuizdoComponent;
  let fixture: ComponentFixture<QuizdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
