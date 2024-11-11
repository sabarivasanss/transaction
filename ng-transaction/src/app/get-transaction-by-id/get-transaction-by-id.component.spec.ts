import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTransactionByIDComponent } from './get-transaction-by-id.component';

describe('GetTransactionByIDComponent', () => {
  let component: GetTransactionByIDComponent;
  let fixture: ComponentFixture<GetTransactionByIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTransactionByIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTransactionByIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
