import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const URI = "http://localhost:3001/api/products/2";

export const state = {
  cart: [],
  products: []
};

export const mutations = {
  addProduct({ products }, product) {
    products.push(product);
  },
  addToCart({ cart, products }, product) {
    const itemIndex = cart.findIndex(item => item.id === product.id);

    if (itemIndex === -1) {
      cart.push({ ...product, count: 1 });
    } else {
      cart[itemIndex].count++;
    }

    product.remaining > 1
      ? product.remaining--
      : products.splice(products.indexOf(product), 1);
  },
  deductItemCount({ cart, products }, product) {
    const itemIndex = cart.findIndex(item => item.id === product.id);
    const productIndex = products.findIndex(item => item.id === product.id);
    if (productIndex !== -1) {
		products[productIndex].remaining++;
	} else {
		products.push({
			id: cart[itemIndex].id,
			name: cart[itemIndex].name,
			price: cart[itemIndex].price,
			brand_name: cart[itemIndex].brand_name,
			remaining: 1
		})
	}

	if (cart[itemIndex].count > 1) {
		cart[itemIndex].count--;
	  } else {
		cart.splice(itemIndex, 1);
	  }
  },
  removeItem({ cart, products }, product) {
    const itemIndex = cart.findIndex(item => item.id === product.id);
	const productIndex = products.findIndex(item => item.id === product.id);
    if (productIndex !== -1) {
		products[productIndex].remaining += cart[itemIndex].count;
	} else {
		products.push({
			id: cart[itemIndex].id,
			name: cart[itemIndex].name,
			price: cart[itemIndex].price,
			brand_name: cart[itemIndex].brand_name,
			remaining: cart[itemIndex].count
		})
	}
    cart.splice(itemIndex, 1);
  },
  clearCart(state) {
    state.cart.forEach(item => {
      const productIndex = state.products.findIndex(product => item.id === product.id);
      if (productIndex !== -1) {
        state.products[productIndex].remaining += item.count;
      } else {
        state.products.push({
          id: item.id,
          name: item.name,
          price: item.price,
          brand_name: item.brand_name,
          remaining: item.count
        })
      }
    });
    state.cart = [];
    console.log(state.cart);
  }
};

export const actions = {
  async fetchProducts({ commit, getters }) {
    try {
      const { data } = await axios.get(URI);
      data.forEach(product => {
        // Commit only non-existing products with a size
        if (!getters.brandNames.includes(product.brand_name) && product.size) {
          commit("addProduct", {
            brand_name: product.brand_name,
            name: product.name,
            id: product.gtin14,
            remaining: 10,
            price: Math.floor((parseInt(product.size) * 5) / Math.random()) * 10
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
};

export const getters = {
  brandNames: state => state.products.map(product => product.brand_name),

  totalAmount: state => {
    let amount = 0;

    state.cart.forEach(item => (amount += item.price * item.count));

    return amount;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
