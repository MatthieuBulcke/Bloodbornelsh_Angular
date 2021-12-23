import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodbornelshComponent } from './bloodbornelsh.component';

describe('BloodbornelshComponent', () => {
  let component: BloodbornelshComponent;
  let fixture: ComponentFixture<BloodbornelshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodbornelshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodbornelshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
