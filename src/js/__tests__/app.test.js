import Character from '../app';

test('тест класса родителя Character', () => {
    const input = new Character('Max', 'Bowman');
    const expected = {
        name: 'Max', type: 'Bowman', health: 100, level: 1,
    };

    expect(input).toEqual(expected);
});

test('number of characters in the name', () => {
    expect(() => {
        const ch1 = new Character('Jhofastasthewind', 'Bowman');
    }).toThrowError('имя должно содержать от 2 до 10 сиволов');
});