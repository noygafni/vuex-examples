import { mutations } from '../store';

describe('mutations/addToCart', () => {
    it('should add new item to cart and reduce remaining item from products', () => {
        const products = [
            {
                id: 1,
                brand_name: 'apple',
                name: 'iphone 6',
                remaining: 2,
                price: 4000
            },
        ]
        const cart = []
        const state = { products, cart }
        const result = {
            products: [
                {
                    id: 1,
                    brand_name: 'apple',
                    name: 'iphone 6',
                    remaining: 1,
                    price: 4000
                },
            ],
            cart: [
                {
                    id: 1,
                    brand_name: 'apple',
                    name: 'iphone 6',
                    remaining: 2,
                    price: 4000,
                    count: 1
                },  
            ]
        }

        mutations.addToCart(state, products[0]);
        expect(state).toEqual(result);
    });
    it('should add count to existing item in the cart and reduce remaining item from products', () => {
        const products = [
            {
                id: 1,
                brand_name: 'apple',
                name: 'iphone 6',
                remaining: 2,
                price: 4000
            },
        ]

        const cart = [
            {
                id: 1,
                brand_name: 'apple',
                name: 'iphone 6',
                remaining: 2,
                price: 4000,
                count: 1
            },
        ]

        const state = { products, cart }
        const result = {
            products: [
                {
                    id: 1,
                    brand_name: 'apple',
                    name: 'iphone 6',
                    remaining: 1,
                    price: 4000
                },
            ],
            cart: [
                {
                    id: 1,
                    brand_name: 'apple',
                    name: 'iphone 6',
                    remaining: 2,
                    price: 4000,
                    count: 2
                },  
            ]
        }
        
        mutations.addToCart(state, products[0]);
        expect(state).toEqual(result);
    });

    it('should add new item to the cart and remove item from products', () => {
        const products = [
            {
                id: 1,
                brand_name: 'apple',
                name: 'iphone 6',
                remaining: 1,
                price: 4000
            },
        ]
        const cart = []
        const state = { products, cart }
        const result = {
            products: [],
            cart: [
                {
                    id: 1,
                    brand_name: 'apple',
                    name: 'iphone 6',
                    remaining: 1,
                    price: 4000,
                    count: 1
                },  
            ]
        }

        mutations.addToCart(state, products[0]);
        expect(state).toEqual(result);
    });

    it('should add count to existing item in the cart and remove item from products', () => {
        const products = [
            {
                id: 1,
                brand_name: 'apple',
                name: 'iphone 6',
                remaining: 1,
                price: 4000
            },
        ]
        const cart = [
            {
                id: 1,
                brand_name: 'apple',
                name: 'iphone 6',
                remaining: 1,
                price: 4000,
                count: 1
            },  
        ]
        const state = { products, cart }
        const result = {
            products: [],
            cart: [
                {
                    id: 1,
                    brand_name: 'apple',
                    name: 'iphone 6',
                    remaining: 1,
                    price: 4000,
                    count: 2
                },  
            ]
        }

        mutations.addToCart(state, products[0]);
        expect(state).toEqual(result);
    });
})

describe('mutations/deductItemCount', () => {
    it('should reduce item count in cart by 1', () => {
        const products = [
            {
                id: 1,
                brand_name: 'apple',
                name: 'iphone 6',
                remaining: 2,
                price: 4000
            },
        ]

        const cart = [
            {
                id: 1,
                brand_name: 'apple',
                name: 'iphone 6',
                remaining: 2,
                price: 4000,
                count: 3
            },
        ]
        const state = { products, cart }
        const result = {
            products: [
                {
                    id: 1,
                    brand_name: 'apple',
                    name: 'iphone 6',
                    remaining: 2,
                    price: 4000
                },
            ],
            cart: [
                {
                    id: 1,
                    brand_name: 'apple',
                    name: 'iphone 6',
                    remaining: 2,
                    price: 4000,
                    count: 2
                },
            ]
        }

        mutations.deductItemCount(state, products[0]);
        expect(state).toEqual(result);
    });

    it('should remove item from cart', () => {
        const products = [
            {
                id: 1,
                brand_name: 'apple',
                name: 'iphone 6',
                remaining: 2,
                price: 4000
            },
        ]

        const cart = [
            {
                id: 1,
                brand_name: 'apple',
                name: 'iphone 6',
                remaining: 2,
                price: 4000,
                count: 1
            },
        ]
        const state = { products, cart }
        const result = {
            products: [
                {
                    id: 1,
                    brand_name: 'apple',
                    name: 'iphone 6',
                    remaining: 2,
                    price: 4000
                },
            ],
            cart: []
        }

        mutations.deductItemCount(state, products[0]);
        expect(state).toEqual(result);
    })
})