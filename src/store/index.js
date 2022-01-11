import { createStore } from 'vuex'

export default createStore({
  state: {
    sysState: 0,
    superuser: {
      name: "Sakhno",
      password: "3434",
      active: false
    }
  },
  mutations: {
    setState(state, status) {
      state.sysState = status;
    },

    setActive(state, data) {
      if (data.name == state.superuser.name && data.password == state.superuser.password) state.superuser.active = true;
    },

    setFalse(state) {
      state.superuser = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
