import Vue from "vue";
import Vuex from "vuex";
import urlConfig from "./url-config";
import radicadoUrlConfig from "./radicado-url-config";
import organizacionalUrlConfig from "./organizacional-url-config";
("@/url-congig");
import axios from "axios";

/** (Provisional) Conexión hacia Back End
 */
axios.defaults.headers.common["Authorization"] = "";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.crossdomain = true;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    auth: false,
    //URLs separadas
    //Array de URL
    paths: urlConfig,
    radicado_routes: radicadoUrlConfig,
    organizacional_routes: organizacionalUrlConfig,
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
        let u = request.url;
        let d = request.data;
        let m = request.method;
        let p = request.params;

        axios({ url: u, data: d, method: m, params: p }).then(
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
