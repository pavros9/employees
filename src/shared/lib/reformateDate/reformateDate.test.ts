import { reformateDate } from './reformateDate';

describe('reformateDate', () => {
    test('reformate string date', () => {
        expect(reformateDate('26.10.2022')).toEqual(new Date(2022, 9, 26));
    });
});
