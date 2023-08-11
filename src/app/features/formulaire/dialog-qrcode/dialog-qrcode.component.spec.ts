import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogQrcodeComponent } from './dialog-qrcode.component';

describe('DialogQrcodeComponent', () => {
  let component: DialogQrcodeComponent;
  let fixture: ComponentFixture<DialogQrcodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogQrcodeComponent]
    });
    fixture = TestBed.createComponent(DialogQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
