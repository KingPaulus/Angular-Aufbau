import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomersListComponent } from './customers-list.component';
import { CustomersService } from '../../services/customers.service';
import { createCustomerServiceMock } from '../../../../../_mocks_/services/customer.service.mock';

describe('CustomersListComponent', () => {
  let component: CustomersListComponent;
  let fixture: ComponentFixture<CustomersListComponent>;
  let customersService: jasmine.SpyObj<CustomersService>;

  beforeEach(async () => {
    //getAll = jasmine.createSpy('getAll').and.returnValues(of());
    customersService = createCustomerServiceMock();

    await TestBed.configureTestingModule({
      imports: [CustomersListComponent],
      providers: [
        {
          provide: CustomersService,
          useValue: customersService,
          /*useValue: {
            getAll
          } */
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
      expect(component.customers$).toBeTruthy();
    })

    it('should return Customers',() => {
      expect(customersService.getAll).toHaveBeenCalled();
    })
  })
});
