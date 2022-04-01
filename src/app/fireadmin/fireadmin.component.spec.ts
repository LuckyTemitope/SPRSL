import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireadminComponent } from './fireadmin.component';

describe('FireadminComponent', () => {
  let component: FireadminComponent;
  let fixture: ComponentFixture<FireadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FireadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
