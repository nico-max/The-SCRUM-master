import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

/** 
 */

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.crossdomain = true;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    auth: false,
    

  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      axios.defaults.headers.common = {
        Authorization: `Token ${this.state.user.token}`,
      };
    },

    SET_AUTH(state, bool) {
      state.auth = bool;
    },
  },
  actions: {
    async login({ dispatch }, data) {
      await axios
        .post(this.state.paths.login, {
          username: data.user,
          password: data.password,
        })
        .then((response) => {
          var data = response.data;

          return dispatch("getUser", data);
        })
        .catch((error) => {
          throw error;
        });
      //return dispatch("getUser", data);
    },
    async saber( data) {
      await axios
        .post('http://f9fe-34-73-63-229.ngrok.io/bot', {
          body: data
        })
        .then((response) => {
          //var data = response.data;

          console.log(response);
        })
        .catch((error) => {
          throw error;
        });
      //return dispatch("getUser", data);
    },

    logout({ dispatch }) {
      return dispatch("getUser", null);
    },

    getUser({ commit }, data) {
      let bool;

      if (data) {
        bool = true;
      } else {
        bool = false;
      }
      commit("SET_USER", data);
      commit("SET_AUTH", bool);
    },

    //getback
    /** Realiza Solicitudes al backend
     * realiza las solicitudes al backend, con los parametros indicados
     * @param  {object} context Objeto de contexto
     * @param  {object} request Parametros de la solicitud
     * @return {promise}        Promesa de datos a entregar o error
     */
    request_back(context, request) {
      return new Promise((resolve, reject) => {
        axios.defaults.headers.common["Authorization"] = "*";
        let u = request.url;
        let d = request.data;
        let m = request.method;
        let p = request.headers;

        axios({ url: u, data: d, method: m, headers: p }).then(
          function (resp) {
            resolve(resp);
          },
          function (err) {
            reject(err);
          }
        );
      });
    },
  },
  modules: {},
});
