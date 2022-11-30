<template>
  <v-container fluid>
    <!-- App Bar -->
    <v-card class="">
      <v-app-bar
        app
        :height="appBarHeight"
        class="elevation-0 bodyBackground mr-1"
        nav
        extension-height="100%"
        hide-on-scroll
      >
        <v-row>
          <v-col cols="12" md="6" class="pa-0 ma-0">
            <v-card
              color="secondary"
              class="elevation-0 mx-3 my-1 px-4 pb-4 pt-6 rounded-lg d-flex align-center justify-center"
              :height="$vuetify.breakpoint.smAndDown ? '95%' : '65px'"
            >
              <v-row class="pa-0">
                <v-col
                  cols="12"
                  md="3"
                  class="pa-0 ma-0"
                  v-for="item in items"
                  :key="item.title"
                >
                  <v-menu
                    open-on-hover
                    bottom
                    offset-y
                    full-width
                    color="rgb(255, 0, 0, 0.2)"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="secondary"
                        class="elevation-0 pa-0 pt-4 ma-0"
                        :min-height="
                          $vuetify.breakpoint.mdAndUp ? '60px' : '30px'
                        "
                        block
                        v-on="on"
                        v-on:click="cambio_menu(item.menu)"
                        @mouseover="cambio_dropdown_menu(item.menu)"
                        v-bind="attrs"
                      >
                        <v-row class="pa-0">
                          <v-col
                            md="12"
                            xs="6"
                            class="text-center pt-0 pb-0 ma-0"
                          >
                            <v-icon
                              class="secondaryText--text text-center material-icons-outlined"
                              iconColor="secondaryText"
                              >{{ item.iconName }}</v-icon
                            >
                          </v-col>
                          <v-col md="12" xs="6" class="pt-0">
                            <div
                              v-text="item.title"
                              class="secondaryText--text caption text-center"
                            ></div>
                          </v-col>
                        </v-row>
                      </v-btn>
                    </template>
                    <!--Dropdown menu-->
                    <v-list color="rgb(118,118,118, 0.9)">
                      <v-list-item-group v-model="selectedItem" color="primary">
                        <v-list-item
                          v-for="item in menu_dropdown_activo.items"
                          :key="item.title + '_dropdown'"
                          v-on:click="$router.push(item.path)"
                        >
                          <v-list-item-title
                            ><div class="primaryText--text">
                              {{ item.title }}
                            </div></v-list-item-title
                          >
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                    <!--End of dropdown menu-->
                  </v-menu>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <template>
            <v-col
              xs="1"
              md="1"
              v-show="!drawer || (!mini && !open_menu)"
              class="pa-0 ma-0"
            >
              <v-card
                color="secondary"
                class="elevation-0 mx-3 my-1 rounded-lg d-flex align-center justify-center"
                height="65px"
              >
                <v-app-bar-nav-icon
                  @click.stop="menu_click()"
                ></v-app-bar-nav-icon>
              </v-card>
            </v-col>
          </template>
          <v-col md="3" sm="5" xs="5" class="pa-0 mx-0">
            <v-card
              color="secondary"
              class="elevation-0 mx-3 my-1 px-4 py-0 rounded-lg d-flex align-center justify-center"
              height="65px"
            >
              <button flat dark v-on:click="logout">
                <v-icon>mdi-magnify</v-icon>
              </button>
              <v-text-field
                class="pa-0 ma-0 centered-input rounded-pill"
                placeholder="Búsqueda"
                filled
                hide-details
                dense
                rounded
              ></v-text-field>
            </v-card>
          </v-col>
          <v-col xs="5" md="3" sm="5" class="pa-0 ma-0">
            <v-card
              color="secondary"
              class="elevation-0 mx-3 my-1 rounded-lg d-flex align-center justify-center"
              height="65px"
              align-center
            >
              <button flat dark v-on:click="logout">
                <v-icon>mdi-dots-grid</v-icon>
              </button>
              <button flat dark v-on:click="logout">
                <v-icon>mdi-logout</v-icon>
              </button>
            </v-card>
          </v-col>
        </v-row>
      </v-app-bar>
    </v-card>
    <!-- -->

    <!--Side Bar-->
    <v-theme-provider root>
      <v-navigation-drawer
        :mini-variant.sync="mini"
        v-model="drawer"
        :permanent="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
        color="primary"
        class="mr-2"
        :key="drawerWidth"
        mini-variant-width="120px"
        app
        hide-overlay
      >
        <v-list two-line>
          <v-list-item class="px-2">
            <v-app-bar-nav-icon
              class="primaryText--text"
              @click.stop="menu_click()"
            ></v-app-bar-nav-icon>
          </v-list-item>
          <v-list-item class="px-2">
            <v-img
              alt="Vuetify Logo"
              class="shrink"
              contain
              src="../assets/logo-argo-solo.png"
              transition="scale-transition"
              width="50"
            />
            <v-list-item-avatar> </v-list-item-avatar>
          </v-list-item>

          <v-list-item link v-show="!mini">
            <v-list-item-content>
              <v-list-item-title
                v-show="!mini"
                class="text-h6 primaryText--text"
              >
                Sandra Adams
              </v-list-item-title>
              <v-list-item-subtitle v-show="!mini" class="primaryText--text"
                >sandra_a88@gmail.com</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item link v-on:click="home()">
            <v-list-item-icon>
              <v-icon class="primaryText--text">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="primaryText--text"
              >Home</v-list-item-title
            >
          </v-list-item>

          <!--
            Lista de consultas. Comentado antes de implementación

          <v-list-group
            class="primaryText--text"
            active-class="primaryText--text"
            color="primaryText--text"
            nav
          >
            <v-icon slot="prependIcon" class="primaryText--text darken-3"
              >mdi-magnify</v-icon
            >
            <template v-slot:activator>
              <v-list-item-title class="primaryText--text"
                >Consultas</v-list-item-title
              >
            </template>

            <v-list-item
              v-for="item in items_consulta"
              :key="item.title"
              link
              v-on:click="$router.push(item.path)"
              nav
            >
              <v-row class="pt-3" v-show="mini && !open_menu">
                <v-col lg="12" class="text-center pt-2 pb-0 ma-0">
                  <v-icon class="primaryText--text text--darken-2 text-center"
                    >mdi-home</v-icon
                  >
                </v-col>
                <v-col lg="12" class="pt-0">
                  <div
                    v-text="item.title"
                    class="primaryText--text text--darken-3 caption text-center"
                  ></div>
                </v-col>
              </v-row>

              <v-list-item-icon>
                <v-icon class="primaryText--text text--darken-2 pr-12"
                  >mdi-home</v-icon
                >
              </v-list-item-icon>
              <v-list-item-title
                v-text="item.title"
                class="primaryText--text text--darken-3"
              ></v-list-item-title>
            </v-list-item>
          </v-list-group>
          -->
          <v-divider></v-divider>

          <v-list>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title
                  class="text-overline primaryText--text text-center text-wrap"
                  v-show="mini"
                >
                  {{ menu_activo.short_title }}
                </v-list-item-title>
                <v-list-item-title
                  class="text-overline primaryText--text"
                  v-show="!mini"
                >
                  {{ menu_activo.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              link
              v-for="item in menu_activo.items"
              :key="item.title"
              v-on:click="$router.push(item.path)"
            >
              <v-row class="pt-3" v-show="mini && !open_menu">
                <v-col lg="12" class="text-center pt-2 pb-0 ma-0">
                  <v-icon class="primaryText--text text-center"
                    >mdi-home</v-icon
                  >
                </v-col>
                <v-col lg="12" class="pt-0">
                  <div
                    v-text="item.title"
                    class="primaryText--text caption text-center font-weight-medium"
                  ></div>
                </v-col>
              </v-row>
              <v-list-item-icon>
                <v-icon
                  :color="menu_activo.color"
                  class="primaryText--text pr-12"
                  >mdi-home</v-icon
                >
              </v-list-item-icon>
              <v-list-item-title class="primaryText--text">
                {{ item.title }}</v-list-item-title
              >
            </v-list-item>
          </v-list>

          <v-spacer></v-spacer>
          <v-row
            :justify="mini && !open_menu ? 'center' : 'start'"
            class="pt-3 px-3"
          >
            <ThemeChanger></ThemeChanger>
          </v-row>
        </v-list>
      </v-navigation-drawer>
    </v-theme-provider>
  </v-container>
</template>
<script>
import ThemeChanger from "./ThemeChanger.vue";

export default {
  name: "DashHeader",

  components: {
    ThemeChanger,
  },

  data: () => ({
    //closeOnClick: false,
    menu_activo: { title: "", items: [], color: "" },
    menu_dropdown_activo: { title: "", items: [], color: "" },
    drawer: true,
    open_menu: true,
    mode: false,
    componentKey: "minipx",
    items: [
      {
        title: "Administración",
        path: "/",
        menu: "admin",
        iconName: "$icon-tool",
      },
      {
        title: "Acciones",
        path: "/",
        menu: "acciones",
        iconName: "mdi-dots-grid",
      },
      {
        //title: "Mis archivos",
        title: "Creación",
        path: "/",
        menu: "archivo",
        iconName: "mdi-pencil-outline",
      },
      {
        //title: "Mi repositorio",
        title: "Gestión",
        path: "/",
        menu: "repo",
        iconName: "mdi-clipboard-text-outline",
      },

      // { title: 'Organizacional', path: '/', menu: 'org'},
      // { title: 'Core', path: '/', menu: 'core'},
      // { title: 'Terceros', path: '/', menu: 'tercero'},
      // { title: 'Radicacion', path: '/', menu: 'radicado'},
    ],

    /* Organizacional y Terceros */
    items_admon: [
      { title: "Empresas", path: "/organizacional/multiempresa" },
      /** 
      { title: "Rol", path: "rol/organizacional/rol" },
      { title: "Grupo", path: "/organizacional/grupo" },
      { title: "Versión", path: "/organizacional/version" },
      { title: "Persona", path: "/organizacional/persona" },
      { title: "Afiliación", path: "/organizacional/afiliacion" },
      { title: "Tipo Identificación", path: "/organizacional/tipo_id" },
      { title: "Terceros", path: "/terceros/terceros" },
      { title: "Contactos", path: "/terceros/contactos" },
      */
    ],
    items_repo: [
      /** 
      { title: "Carpetas", path: "/core/carpetas" },
      { title: "Relación", path: "/core/relacion" },
      { title: "Documentos", path: "/core/documentos" },
      { title: "Rol documento", path: "/core/rol_doc" },
      { title: "Carpeta usuario", path: "/core/carpeta_usuario" },
      { title: "Estado documento", path: "/core/estado_documento" },
      { title: "Relación documento", path: "/core/relacion_documento" },
      { title: "Bandeja de entrada", path: "/" },
      { title: "Bandeja de salida", path: "/" },
      { title: "Memorandos", path: "/" },
      { title: "Resoluciones", path: "/" },
      { title: "Circulares", path: "/" },
      { title: "Borradores", path: "/" },
      */
    ],

    items_acciones: [
      { title: "Radicado", path: "/edit-documento" },
      { title: "Radicadov2", path: "/edit-documentov2" },
      { title: "Documento", path: "/radicado" },
    ],

    items_archivo: [
      /** 
      { title: "Administrar archivo", path: "/", menu: "admin" },
      { title: "Administrar TRD", path: "/", menu: "repo" },
      { title: "Prestamos", path: "/", menu: "acciones" },
      { title: "Inventario documental", path: "/", menu: "archivo" },
      { title: "Disposicion final", path: "/", menu: "archivo" },
      { title: "Consulta Archivo", path: "/", menu: "archivo" },
      { title: "Transferencia documentales", path: "/", menu: "archivo" },
      */
    ],

    org: false,
    core: false,
    tercero: false,

    admon: false,
    repo: false,
    acciones: false,
    archivo: false,

    items_consulta: [
      { title: "Clasica", path: "/" },
      { title: "Reportes", path: "/" },
      { title: "Expedientes", path: "/" },
    ],

    items_documentos: [
      { title: "Bandeja de entrada", path: "/" },
      { title: "Bandeja de salida", path: "/" },
      { title: "Memorandos", path: "/" },
      { title: "Resoluciones", path: "/" },
      { title: "Circulares", path: "/" },
      { title: "Borradores", path: "/" },
    ],

    items_procesos: [{ title: "Procesos disciplinarios", path: "/" }],

    items_organizacional: [
      { title: "Rol", path: "/organizacional/rol" },
      { title: "Grupo", path: "/organizacional/grupo" },
      { title: "Versión", path: "/organizacional/version" },
      { title: "Persona", path: "/organizacional/persona" },
      { title: "Afiliación", path: "/organizacional/afiliacion" },
      { title: "Tipo Identificación", path: "/organizacional/tipo_id" },
    ],

    items_core: [
      { title: "Carpetas", path: "/core/carpetas" },
      { title: "Relación", path: "/core/relacion" },
      { title: "Documentos", path: "/core/documentos" },
      { title: "Rol documento", path: "/core/rol_doc" },
      { title: "Carpeta usuario", path: "/core/carpeta_usuario" },
      { title: "Estado documento", path: "/core/estado_documento" },
      { title: "Relación documento", path: "/core/relacion_documento" },
    ],

    items_Terceros: [
      { title: "Terceros", path: "/terceros/terceros" },
      { title: "Contactos", path: "/terceros/contactos" },
    ],

    items_radicacion: [
      { title: "Radicado", path: "/edit-documento" },
      { title: "Radicadov2", path: "/edit-documentov2" },
      { title: "Documento", path: "/radicado" },
    ],
  }),
  methods: {
    //Drawer
    async menu_click() {
      if (this.$vuetify.breakpoint.smAndDown) {
        this.drawer = !this.drawer;
      } else {
        this.drawer = false;
        this.open_menu = !this.open_menu;
      }
    },
    //Menu
    cambio_menu(opcion) {
      switch (opcion) {
        case "admin":
          (this.menu_activo.title = "Administración"),
            (this.menu_activo.short_title = "Admin istración"),
            (this.menu_activo.color = "primaryText--text darken-1"),
            (this.menu_activo.items = this.items_admon);
          this.$router.push("/core/carpetas");
          break;

        case "repo":
          //(this.menu_activo.title = "Repositorio"),
          (this.menu_activo.title = "Creación"),
            (this.menu_activo.color = "primaryText--text "),
            (this.menu_activo.items = this.items_repo);
          this.$router.push("/core/carpetas");
          break;

        case "acciones":
          //(this.menu_activo.title = "Acciones"),
          (this.menu_activo.title = "Acciones"),
            (this.menu_activo.color = "primaryText--text "),
            (this.menu_activo.items = this.items_acciones);
          this.$router.push("/core/carpetas");
          break;

        case "archivo":
          //(this.menu_activo.title = "Archivo"),
          (this.menu_activo.title = "Gestión"),
            (this.menu_activo.color = "primaryText--text "),
            (this.menu_activo.items = this.items_archivo);
          this.$router.push("/core/carpetas");
          break;

        case "core":
          (this.menu_activo.title = "Core"),
            (this.menu_activo.color = "primaryText--text "),
            (this.menu_activo.items = this.items_core);
          this.$router.push("/core/carpetas");
          break;

        case "org":
          (this.menu_activo.title = "Organizacional"),
            (this.menu_activo.color = "primaryText--text "),
            (this.menu_activo.items = this.items_organizacional);
          this.$router.push("/organizacional/rol");
          break;

        case "tercero":
          (this.menu_activo.title = "Terceros"),
            (this.menu_activo.items = this.items_Terceros);
          this.$router.push("/terceros/terceros");
          break;

        case "radicado":
          (this.menu_activo.title = "radicacion"),
            (this.menu_activo.items = this.items_radicacion);
          this.$router.push("/radicado");
          break;

        case "radicadov2":
          (this.menu_activo.title = "radicacion version 2"),
            (this.menu_activo.items = this.items_radicacion);
          this.$router.push("/radicadov2");
          break;

        default:
          this.$router.push("/");
          break;
      }
    },

    //Dropdown Menu
    cambio_dropdown_menu(opcion) {
      switch (opcion) {
        case "admin":
          (this.menu_dropdown_activo.title = "Administración"),
            (this.menu_dropdown_activo.short_title = "Admin istración"),
            (this.menu_dropdown_activo.color = "primaryText--text darken-1"),
            (this.menu_dropdown_activo.items = this.items_admon);

          break;

        case "repo":
          (this.menu_dropdown_activo.title = "Repositorio"),
            (this.menu_dropdown_activo.color = "primaryText--text "),
            (this.menu_dropdown_activo.items = this.items_repo);

          break;

        case "acciones":
          (this.menu_dropdown_activo.title = "Acciones"),
            (this.menu_dropdown_activo.color = "primaryText--text "),
            (this.menu_dropdown_activo.items = this.items_acciones);

          break;

        case "archivo":
          (this.menu_dropdown_activo.title = "Archivo"),
            (this.menu_dropdown_activo.color = "primaryText--text "),
            (this.menu_dropdown_activo.items = this.items_archivo);

          break;

        case "core":
          (this.menu_dropdown_activo.title = "Core"),
            (this.menu_dropdown_activo.color = "primaryText--text "),
            (this.menu_dropdown_activo.items = this.items_core);

          break;

        case "org":
          (this.menu_dropdown_activo.title = "Organizacional"),
            (this.menu_dropdown_activo.color = "primaryText--text "),
            (this.menu_dropdown_activo.items = this.items_organizacional);

          break;

        case "tercero":
          (this.menu_dropdown_activo.title = "Terceros"),
            (this.menu_dropdown_activo.items = this.items_Terceros);

          break;

        case "radicado":
          (this.menu_dropdown_activo.title = "radicacion"),
            (this.menu_dropdown_activo.items = this.items_radicacion);

          break;

        case "radicadov2":
          (this.menu_dropdown_activo.title = "radicacion version 2"),
            (this.menu_dropdown_activo.items = this.items_radicacion);

          break;

        default:
          break;
      }
    },

    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login");
    },

    forceRerender() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        this.componentKey = "minipx";
      } else {
        this.componentKey = "fullpx";
      }
    },

    home() {
      this.$router.push("/");
    },
  },
  computed: {
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    xsWidth() {
      return this.$vuetify.breakpoint.xs;
    },
    mini() {
      return this.$vuetify.breakpoint.mdAndUp && !this.open_menu;
    },
    drawerWidth() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        if (this.open_menu) {
          return "300px";
        } else {
          return "80px";
        }
      } else {
        return "300px";
      }
    },
    appBarHeight() {
      if (this.$vuetify.breakpoint.sm) {
        return "260%";
      } else if (this.$vuetify.breakpoint.xs) {
        return "260%";
      } else {
        return "80px";
      }
    },
    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
  },
};
</script>
