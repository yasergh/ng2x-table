import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2xTableComponent } from './ng2x-table.component';

describe('Ng2xTableComponent', () => {
  let component: Ng2xTableComponent;
  let fixture: ComponentFixture<Ng2xTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2xTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2xTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
