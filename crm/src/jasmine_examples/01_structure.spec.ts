class Car {
    color = 'blue';
}

// Focus on this Test
// fdescribe (FOKOS)
// xdescribe (EXlcude)
// describe
xdescribe('Jasmine Tests.', () => {
    let car: Car;

    // afterEach
    // beforeAll - wird nur einmal ausgeführt.
    // afterAll

    beforeEach(() => {
        car = new Car;
    });

    // Spec
    it('should work', () => {

        // Expertation
        // toEqual ist ein Matcher
        expect(1).toEqual(1);
        car.color = 'red';
        expect(car.color).toEqual('red');
    });

    it('should use orignial car', () => {
        expect(car.color).toEqual('blue');
    })

    it('compares', () => {

        // Ist Wert
        const a = {
            color: 'blue'
        };

        // Soll Wert
        const b = {
            color: 'blue'
        };

        expect(a).toEqual(b);
        expect(a).not.toBe(b);
    })
})