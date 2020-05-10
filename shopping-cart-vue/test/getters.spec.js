import { getters } from '../src/store';

describe('getters/brandNames', () => {
    it('should return list of products brand names', () => {
        const products = [
            {
                id: 1,
                brand_name: 'apple',
                name: 'iphone 6',
                remaining: 1000,
                price: 4000
            },
            {
                id: 2,
                brand_name: 'samsung',
                name: 'galaxy 10',
                remaining: 10,
                price: 6000
            },
            {
                id: 3,
                brand_name: 'google',
                name: 'search',
                remaining: 1,
                price: 0
            },
            {
                id: 4,
                brand_name: 'facebook',
                name: 'react',
                remaining: 1000,
                price: 4000
            },
        ]

        const result = ['apple', 'samsung', 'google', 'facebook'];
        const state = { products };
        expect(getters.brandNames(state)).toEqual(result);
    });
})

describe('getters/totalAmount', () => {
    it('should return the total amount of all items in cart', () => {
        const cart = [
            {
                id: 1,
                brand_name: 'apple',
                name: 'iphone 6',
                count: 5,
                price: 4
            },
            {
                id: 2,
                brand_name: 'samsung',
                name: 'galaxy 10',
                count: 10,
                price: 6
            },
            {
                id: 3,
                brand_name: 'google',
                name: 'search',
                count: 1,
                price: 8
            },
            {
                id: 4,
                brand_name: 'facebook',
                name: 'react',
                count: 12,
                price: 4
            },
        ]

        const result = 136;
        const state = { cart }; 
        expect(getters.totalAmount(state)).toEqual(result);
    })
})