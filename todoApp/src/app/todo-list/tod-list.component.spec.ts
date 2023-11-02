import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodListComponent } from './tod-list.component';

describe('TodListComponent', () => {
  let component: TodListComponent;
  let fixture: ComponentFixture<TodListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodListComponent]
    });
    fixture = TestBed.createComponent(TodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
