export const state = () => ({
  loading:false,
  baseURl:'https://203f-195-158-16-45.ngrok-free.app/',
  basket: [],
  account:null
})
export const mutations = {
  addToBasket(state,product) {
      state.basket.push(product)
  },
  fetchAccount (state,accountdata){
    console.log(accountdata)
     state.account=accountdata
  }
}
export const actions = {
  addToBasket({ commit, state }, item) {
    commit('addToBasket', item)
  },
  fetchAccount({ commit, state }, accountData) {
    commit('fetchAccount', accountData)
  }
}