import { Observable, of } from "rxjs"

const productService = {
    getProducts () {
        return of({
            id: 345,
            price: 245,
        } as any)
    }
}

xdescribe('Spy', () => {
    
    it('Spy On', () => {
        spyOn(productService, 'getProducts')
            .and.callFake(() => {
                return of({})
            })
        const result = productService.getProducts();
        expect(productService.getProducts).toHaveBeenCalled();
        expect(result).toEqual(jasmine.any(Observable));
    });

    it('createSpy(Obj)', () => {
        const fn = jasmine.createSpy('loadProducts'); // Blind-Fuktion
        fn();
        expect(fn).toHaveBeenCalled();

        const loginSerivce = jasmine.createSpyObj('LoginSerivce',
            [
                'login', 'logout'
            ]
        );

        loginSerivce.login();
        expect(loginSerivce.login).toHaveBeenCalled();
    })
})