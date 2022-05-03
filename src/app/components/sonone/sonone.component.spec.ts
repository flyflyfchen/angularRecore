import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SononeComponent } from './sonone.component';

describe('SononeComponent', () => {
  let component: SononeComponent;
  let fixture: ComponentFixture<SononeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SononeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SononeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
