import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/Login.vue";
import Carpetas from "../views/core/Carpetas.vue";
import Documentos from "../views/core/Documentos.vue";
import Relacion from "../views/core/Relacion.vue";
import Rol_documento from "../views/core/Rol_documento.vue";
import Carpeta_usuario from "../views/core/Carpeta_usuario.vue";
import Estado_documento from "../views/core/Estado_documento.vue";
import Relacion_documento from "../views/core/Relacion_documento.vue";
import EditDocumento from "../views/radicacion/EditDocumento.vue";
import EditDocumentov2 from "../views/radicacion/EditDocumentov2.vue";
import Radicado from "../views/radicacion/Radicado.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/organizacional/grupo",
    name: "Grupo",
    component: () => import("../views/organizacional/Grupo.vue"),
  },
  {
    path: "/organizacional/rol",
    name: "Rol",
    component: () => import("../views/organizacional/Rol.vue"),
  },
  {
    path: "/organizacional/multiempresa",
    name: "Multiempresa",
    component: () => import("../views/organizacional/Multiempresa.vue"),
  },
  {
    path: "/organizacional/multiempresa/detalle-empresa/:id",
    name: "DetalleEmpresa",
    component: () => import("../views/organizacional/DetalleEmpresa.vue"),
  },
  {
    path: "/organizacional/multiempresa/crear-empresa",
    name: "CrearEmpresa",
    component: () => import("../views/organizacional/CrearEmpresa.vue"),
  },
  {
    path: "/organizacional/multiempresa/edital-empresa/:id",
    name: "EditarEmpresa",
    component: () => import("../views/organizacional/EditarEmpresa.vue"),
  },
  {
    path: "/organizacional/afiliacion",
    name: "Afiliacion",
    component: () => import("../views/organizacional/Afiliacion.vue"),
  },
  {
    path: "/organizacional/persona",
    name: "Persona",
    component: () => import("../views/organizacional/Persona.vue"),
  },
  {
    path: "/organizacional/tipo_id",
    name: "Tipo_ID",
    component: () => import("../views/organizacional/Tipo_ID.vue"),
  },
  {
    path: "/organizacional/version",
    name: "Version",
    component: () => import("../views/organizacional/Version.vue"),
  },
  {
    path: "/core/documentos",
    name: "Documentos",
    component: Documentos,
  },
  {
    path: "/core/carpetas",
    name: "Carpetas",
    component: Carpetas,
  },
  {
    path: "/core/relacion",
    name: "Relacion",
    component: Relacion,
  },
  {
    path: "/core/rol_doc",
    name: "Rol_doc",
    component: Rol_documento,
  },
  {
    path: "/core/carpeta_usuario",
    name: "Carpeta_usuario",
    component: Carpeta_usuario,
  },
  {
    path: "/core/estado_documento",
    name: "Estado_documento",
    component: Estado_documento,
  },
  {
    path: "/core/relacion_documento",
    name: "Relacion_documento",
    component: Relacion_documento,
  },
  {
    path: "/terceros/terceros",
    name: "Terceros",
    component: () => import("../views/terceros/Terceros.vue"),
  },
  {
    path: "/terceros/contactos",
    name: "Contactos",
    component: () => import("../views/terceros/Contactos.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/edit-documento",
    name: "EditDoc",
    component: EditDocumento,
  },
  {
    path: "/edit-documentov2",
    name: "EditDocv2",
    component: EditDocumentov2,
  },
  {
    path: "/radicado",
    name: "Radicado",
    component: Radicado,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
