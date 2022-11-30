<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="flex-column" fill-height>
        <v-row fluid class="container">
          <v-col
            md="6"
            sm="12"
            xs="12"
            class="primary d-flex align-center align-stretch"
          >
            <v-row fluid>
              <v-col md="12" class="d-flex align-md-end align-sm-center">
                <div class="text-h4 pa-12 secondary--text font-weight-bold">
                  Bienvenido al SGDEA Argo de Infometrika
                </div>
              </v-col>
              <v-col md="12" class="d-flex align-center justify-center">
                <v-img
                  max-width="214"
                  src="../assets/logo-infometrika.png"
                ></v-img>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="6" sm="12" xs="12">
            <v-container fill-height fluid class="flex-column">
              <v-row align="end" justify="center" fluid>
                <v-col cols="12" sm="8">
                  <div
                    class="d-flex flex-column justify-space-between align-center py-10"
                  >
                    <v-img
                      max-width="132"
                      src="../assets/logo-argo.png"
                    ></v-img>
                  </div>
                  <v-theme-provider theme="light" with-background>
                    <v-card
                      color="secondary_light"
                      class="elevation-0 argo-card-secondary-light align-center px-12 pb-10 rounded-xl"
                    >
                      <v-card-text class="mod-padding-0">
                        <v-form ref="loginForm">
                          <div :class="alertLogin ? 'pt-12' : 'pt-6'">
                            <v-alert
                              type="error"
                              v-model="alertLogin"
                              dismissible
                              color="pink"
                              border="left"
                              elevation="2"
                              colored-border
                              icon="mdi-alert-box-outline"
                            >
                              <strong>Error</strong> {{ responseText }}
                            </v-alert>
                          </div>

                          <v-text-field
                            prepend-icon="mdi-account"
                            name="login"
                            label="Usuario"
                            type="text"
                            v-model="username"
                            filled
                            dense
                            rounded
                            class="pt-9"
                            background-color="secondary_dark"
                            :rules="[
                              (val) =>
                                !!val || `Debe ingresar un Nombre de Usuario`,
                            ]"
                            required
                          ></v-text-field>
                          <v-text-field
                            id="password"
                            prepend-icon="mdi-lock"
                            name="password"
                            label="Contraseña"
                            type="password"
                            v-model="password"
                            background-color="secondary_dark"
                            filled
                            dense
                            rounded
                            :rules="[
                              (val) => !!val || `Debe ingresar una contraseña`,
                            ]"
                            required
                          ></v-text-field>
                        </v-form>
                      </v-card-text>
                      <v-card-actions>
                        <v-row
                          align="center"
                          justify="space-around"
                          class="pt-8"
                        >
                          <v-btn
                            rounded
                            block
                            color="success"
                            v-on:click="login()"
                            >Ingresar a ARGO</v-btn
                          >
                        </v-row>
                      </v-card-actions>
                    </v-card>
                  </v-theme-provider>

                  <div class="text-center py-3">
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      elevation="1"
                      small
                      color="secondary"
                    >
                      <v-icon dark> mdi-google </v-icon>
                    </v-btn>
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      elevation="1"
                      small
                      color="secondary"
                    >
                      <v-icon dark> mdi-twitter </v-icon>
                    </v-btn>
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      elevation="1"
                      small
                      color="secondary"
                    >
                      <v-icon dark> mdi-facebook </v-icon>
                    </v-btn>
                    <v-btn :disabled="true" class="ma-1" x-small plain>
                      ¿Se te ha olvidado la contraseña?
                    </v-btn>
                  </div>
                  <v-col md="12" class="align-md-end">
                    <div class="body-2 pa-3 primary--text">
                      Copyleft 2022, Sistema ArgoPhp basado en OrfeoGPL
                      Actualizado por Infometrika SAS
                    </div>
                  </v-col>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  props: {
    source: String,
  },

  data() {
    return {
      username: null,
      password: null,
      responseText: "",
      alertLogin: false,
    };
  },

  methods: {
    async login() {
      if (this.$refs.loginForm.validate()) {
        try {
          let dataq = { user: this.username, password: this.password };

          await this.$store
            .dispatch("login", dataq)
            //.then((value) => {
            //this.responseText = "Data: " + value.data;
            // if(value.response.status==="400"){
            // this.responseText = "Los datos proporcionados son incorrectos"
            // }

            //this.$router.push("/");
            //   })
            .catch((error) => {
              if (!error) {
                // network error
                this.responseText = "Error de conexión";
              } else if (error.response) {
                // The client was given an error response (5xx, 4xx)
                if (error.response.status == "400") {
                  this.responseText =
                    "Los datos proporcionados son incorrectos";
                  this.alertLogin = true;
                }
                //this.responseText = error.response.status;
              } else if (error.request) {
                // The client never received a response, and the request was never left
                this.responseText = error.request.status;
              } else {
                // Anything else
                //return error;
                this.responseText = "El usuario o contraseña no son correctos";
              }
            });
        } catch (error) {
          this.responseText = "No se proporcionó la información: " + error;
        }
      }

      //console.log(this.$store.state.user);

      //   login
    },
    registrar() {
      this.$router.push({ name: "Registrar" });
    },
  },
};
</script>

<style>
.container {
  max-width: 100vw;
  padding: 0px;
}
</style>
