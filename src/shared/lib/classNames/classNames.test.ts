import { classNames } from './classNames';

describe('classNames', () => {
    test('empty classNames', () => {
        expect(classNames('')).toEqual('');
    });

    test('only class', () => {
        expect(classNames('someClass')).toEqual('someClass');
    });

    test('with mods', () => {
        expect(
            classNames('', {
                red: true,
                blue: true,
                black: false,
                green: undefined,
            }),
        ).toBe('red blue');
    });

    test('with additional', () => {
        expect(classNames('', {}, ['black', 'green', 'blue'])).toEqual(
            'black green blue',
        );
    });

    test('all', () => {
        expect(classNames('blue', { black: true }, ['green'])).toEqual(
            'blue black green',
        );
    });
});
