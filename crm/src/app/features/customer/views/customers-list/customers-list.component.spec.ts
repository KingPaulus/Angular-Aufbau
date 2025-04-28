import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersListComponent } from './customers-list.component';
import { CustomersService } from '../../services/customers.service';
import { of } from 'rxjs';

describe('CustomersListComponent', () => {
  let component: CustomersListComponent;
  let fixture: ComponentFixture<CustomersListComponent>;
  let getAll: () => unknown;

  beforeEach(async () => {
    getAll = jasmine.createSpy('getAll').and.returnValues(of([]));

    await TestBed.configureTestingModule({
      imports: [CustomersListComponent],
      providers: [
        {
          provide: CustomersService,
          useValue: {
            getAll: () => {
              return of([]);
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('loadCustomers', () => {
    it('should exist',() => {
      expect(component.loadCustomers).toBeTruthy();
    })

    it('should return Customers',() => {
      expect(getAll).toHaveBeenCalled();
    })
  })
});
