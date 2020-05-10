import { mutations } from '../src/store';

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
    it('should reduce item count in cart by 1 and increase existing product remaning by 1', () => {
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
                    remaining: 3,
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

    it('should remove item from cart and increase the product remaning by 1', () => {
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
                    remaining: 3,
                    price: 4000
                },
            ],
            cart: []
        }

        mutations.deductItemCount(state, products[0]);
        expect(state).toEqual(result);
    });

    it('should reduce item from cart by 1 and create non existing product with remaining of 1', () => {
        const products = []

        const cart = [
            {
                id: 1,
                brand_name: 'apple',
                name: 'iphone 6',
                remaining: 2,
                price: 4000,
                count: 2
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
                    count: 1
                },
            ]
        }

        mutations.deductItemCount(state, cart[0]);
        expect(state).toEqual(result);
    });

    it('should remove item from cart and create non existing product with remaining of 1', () => {
        const products = []

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
            ]
        }

        mutations.deductItemCount(state, cart[0]);
        expect(state).toEqual(result);
    });
});

describe('mutations/removeItem', () => {
    it('remove item from cart and add the item count to an existing the product', () => {
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
                    remaining: 5,
                    price: 4000
                },
            ],
            cart: []
        }

        mutations.removeItem(state, products[0]);
        expect(state).toEqual(result);
    });

    it('remove item from cart and create non existing product with remaining as the item count', () => {
        const products = [
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
                    remaining: 3,
                    price: 4000
                },
            ],
            cart: []
        }

        mutations.removeItem(state, cart[0]);
        expect(state).toEqual(result);
    });
    
});

describe('mutations/clearCart', () => {
    it('clear the cart and add the count of items to existing products', () => {
        const products = [
            {
                id: 1,
                brand_name: 'apple',
                name: 'iphone 6',
                remaining: 1,
                price: 4000
            },
            {
                id: 2,
                brand_name: 'samsung',
                name: 'galaxy 10',
                remaining: 2,
                price: 6000
            },
            {
                id: 3,
                brand_name: 'google',
                name: 'search',
                remaining: 3,
                price: 0
            },
            {
                id: 4,
                brand_name: 'facebook',
                name: 'react',
                remaining: 4,
                price: 4000
            },
        ]

        const cart = [
            {
                id: 1,
                brand_name: 'apple',
                name: 'iphone 6',
                count: 1,
                price: 4000
            },
            {
                id: 2,
                brand_name: 'samsung',
                name: 'galaxy 10',
                count: 2,
                price: 6000
            },
            {
                id: 3,
                brand_name: 'google',
                name: 'search',
                count: 3,
                price: 0
            },
            {
                id: 4,
                brand_name: 'facebook',
                name: 'react',
                count: 4,
                price: 4000
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
                {
                    id: 2,
                    brand_name: 'samsung',
                    name: 'galaxy 10',
                    remaining: 4,
                    price: 6000
                },
                {
                    id: 3,
                    brand_name: 'google',
                    name: 'search',
                    remaining: 6,
                    price: 0
                },
                {
                    id: 4,
                    brand_name: 'facebook',
                    name: 'react',
                    remaining: 8,
                    price: 4000
                },
            ],
            cart: []
        }

        mutations.clearCart(state);
        expect(state).toEqual(result);
    });

    it('clear the cart and create all the items as products with remaining as the item count', () => {
        const products = []

        const cart = [
            {
                id: 1,
                brand_name: 'apple',
                name: 'iphone 6',
                count: 1,
                price: 4000
            },
            {
                id: 2,
                brand_name: 'samsung',
                name: 'galaxy 10',
                count: 2,
                price: 6000
            },
            {
                id: 3,
                brand_name: 'google',
                name: 'search',
                count: 3,
                price: 0
            },
            {
                id: 4,
                brand_name: 'facebook',
                name: 'react',
                count: 4,
                price: 4000
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
                {
                    id: 2,
                    brand_name: 'samsung',
                    name: 'galaxy 10',
                    remaining: 2,
                    price: 6000
                },
                {
                    id: 3,
                    brand_name: 'google',
                    name: 'search',
                    remaining: 3,
                    price: 0
                },
                {
                    id: 4,
                    brand_name: 'facebook',
                    name: 'react',
                    remaining: 4,
                    price: 4000
                },
            ],
            cart: []
        }

        mutations.clearCart(state);
        expect(state).toEqual(result);
    });

    it('clear the cart and create two non existing products with remaining as the items count, and add the count of items to existing products', () => {
        const products = [
            {
                id: 1,
                brand_name: 'apple',
                name: 'iphone 6',
                remaining: 1,
                price: 4000
            },
            {
                id: 2,
                brand_name: 'samsung',
                name: 'galaxy 10',
                remaining: 2,
                price: 6000
            },
        ]

        const cart = [
            {
                id: 1,
                brand_name: 'apple',
                name: 'iphone 6',
                count: 1,
                price: 4000
            },
            {
                id: 2,
                brand_name: 'samsung',
                name: 'galaxy 10',
                count: 2,
                price: 6000
            },
            {
                id: 3,
                brand_name: 'google',
                name: 'search',
                count: 3,
                price: 0
            },
            {
                id: 4,
                brand_name: 'facebook',
                name: 'react',
                count: 4,
                price: 4000
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
                {
                    id: 2,
                    brand_name: 'samsung',
                    name: 'galaxy 10',
                    remaining: 4,
                    price: 6000
                },
                {
                    id: 3,
                    brand_name: 'google',
                    name: 'search',
                    remaining: 3,
                    price: 0
                },
                {
                    id: 4,
                    brand_name: 'facebook',
                    name: 'react',
                    remaining: 4,
                    price: 4000
                },
            ],
            cart: []
        }

        mutations.clearCart(state);
        expect(state).toEqual(result);
    });
});