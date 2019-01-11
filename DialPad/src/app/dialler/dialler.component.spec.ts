import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiallerComponent } from './dialler.component';

describe('DiallerComponent', () => {
  let component: DiallerComponent;
  let fixture: ComponentFixture<DiallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
