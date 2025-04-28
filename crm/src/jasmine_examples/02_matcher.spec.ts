xdescribe('matcher',() => {
    it('toEqual vs toBe', () => {

        expect(3).toBe(3);
        expect(3).toEqual(3);

        expect({a: 3}).not.toBe({a: 3});
        expect({a: 3}).toEqual({a: 3});
    });

    // Wahr / Falsch
    it('true / false / defined / null', () => {
        let temp; // unfefinded
        expect(temp).not.toBeDefined();
        expect(temp).toBeUndefined();

        expect(temp).toBeFalsy(); // Cast (==)
        expect(temp).not.toBeFalse(); // Kein Cast (===)

        temp = null; // object
        expect(temp).toBeNull();

        temp = '';
        expect(temp).toBeFalsy();

        temp = null;
    });
})