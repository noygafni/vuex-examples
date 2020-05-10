import { actions } from '../src/store';
import axios from 'axios';

jest.mock('axios');

async function basicTest(mockGetters, times) {
    const data = {
        data: [
            {
                gtin14: 1,
                brand_name: 'apple',
                name: 'iphone 6',
                size: 1000,
            },
            {
                gtin14: 2,
                brand_name: 'samsung',
                name: 'galaxy 10',
                size: 10,
            },
            {
                gtin14: 3,
                brand_name: 'google',
                name: 'search',
                size: 1,
            },
            {
                gtin14: 4,
                brand_name: 'facebook',
                name: 'react',
                size: 1000,
            },
        ]
    }

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    const commitSpy = jest.fn();
    await actions.fetchProducts({ commit: commitSpy, getters: mockGetters });
    expect(commitSpy).toHaveBeenCalledTimes(times);
}

describe('actions/fetchProducts', () => {

    it('should save all fetched products to store', async () => {
        
        const mockGetters = {
            brandNames: []
        }
        await basicTest(mockGetters, 4);
    });

    it('should save only 3 fetched products to store', async () => {
        const mockGetters = {
            brandNames: ['apple']
        }
        await basicTest(mockGetters, 3);
    });

    it('should not save any fetched products to store', async () => {
        const mockGetters = {
            brandNames: ['apple', 'samsung', 'google', 'facebook']
        }
        await basicTest(mockGetters, 0);
    })
})