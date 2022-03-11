import { concat } from '../utils/arrays'

describe('Array utils', function () {
    it('concat should concatenate arrays', async () => {
        expect(concat()).toEqual([])
        expect(concat('test')).toEqual(['test'])
        expect(concat('test', 'test')).toEqual(['test'])
        expect(concat('test', 1)).toEqual(['test'])
        expect(concat('test', [1, 2])).toEqual(['test', 1, 2])
        expect(concat('test', ['1', '2'])).toEqual(['test', '1', '2'])
    })
})