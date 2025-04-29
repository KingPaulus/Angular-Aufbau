import { of } from "rxjs"
import { customersMock } from "../api/customers"

export const createCustomerServiceMock = () => {
    const mock = jasmine.createSpyObj('CustomersService',
        [
            'getAll',
            'getById',
            'postOne',
            'putOne',
            'deleteById'
        ]
    )

    mock.getAll.and.returnValues(of(customersMock));
    mock.getById.and.returnValues(of(customersMock[0]));
    mock.postOne.and.returnValues(of(customersMock[0]));
    mock.deleteById.and.returnValues(of({}));
    return mock
};