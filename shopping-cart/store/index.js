import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const URI = 'https://c0rs.herokuapp.com/https://www.datakick.org/api/items'

export const state = {
	cart: [],
	products: []
}

export const mutations = {
	addProduct({ products }, product) {
		products.push(product)
	},
	addToCart({ cart, products }, product) {
		const itemIndex = cart.findIndex(item => item.id === product.id)

		if (itemIndex === -1) {
			cart.push({ ...product, count: 1 })
		} else {
			cart[itemIndex].count++
		}

		product.remaining > 1
			? product.remaining--
			: products.splice(products.indexOf(product), 1)
	},
	deductItemCount({ cart }, product) {
		const itemIndex = cart.findIndex(item => item.id === product.id)

		cart[itemIndex].count > 1
			? cart[itemIndex].count--
			: cart.splice(itemIndex, 1)
	},
	removeItem({ cart }, product) {
		const itemIndex = cart.findIndex(item => item.id === product.id)

		cart.splice(itemIndex, 1)
	},
	clearCart(state) {
		state.cart = []
	}
}

export const actions = {
	async fetchProducts({ commit, getters }) {
		const { data } = await axios.get(URI);
		data.forEach(product => {
			// Commit only non-existing products with a size
			if (
				!getters.brandNames.includes(product.brand_name) &&
				product.size
			) {
				commit('addProduct', {
					brand_name: product.brand_name,
					name: product.name,
					id: product.gtin14,
					remaining: 10,
					price:
						Math.floor(parseInt(product.size) * 5 / Math.random()) * 10
				})
			}
		})
	}
}

export const getters = {
	brandNames: state => state.products.map(product => product.brand_name),

	totalAmount: state => {
		let amount = 0

		state.cart.forEach(item => (amount += item.price * item.count))

		return amount
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
})
