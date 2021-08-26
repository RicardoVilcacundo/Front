import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const Icons = () => import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Maps = () => import(/* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const ListAdmin = () => import(/* webpackChunkName: "common" */ "@/pages/Administradores/ListAdmin.vue");
const ListCliente = () => import(/* webpackChunkName: "common" */ "@/pages/Clientes/ListCliente.vue");
const ListProducto = () => import(/* webpackChunkName: "common" */ "@/pages/Productos/ListProducto.vue");
const EditAdmin = () => import(/* webpackChunkName: "common" */ "@/pages/Administradores/EditAdmin.vue");
const DeleteAdmin = () => import(/* webpackChunkName: "common" */ "@/pages/Administradores/DeleteAdmin.vue");
const NewAdmin = () => import(/* webpackChunkName: "common" */ "@/pages/Administradores/NewAdmin.vue");
const Login = () => import(/* webpackChunkName: "common" */ "@/pages/Login.vue");
const ListaAdministracion = () => import(/* webpackChunkName: "common" */ "@/pages/ListaAdministracion.vue");


const routes = [
  {
  path: '/login',
  name: 'login',
  component: Login
},
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/login",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "administradores",
        name: "administradores",
        component: ListAdmin
      },
      {
        path: "clientes",
        name: "clientes",
        component: ListCliente
      },
      {
        path: "productos",
        name: "productos",
        component: ListProducto
      },
      {
        path: "administradores/:adminId/edit",
        name: "edit",
        component: EditAdmin
      },
      {
        path: 'administradores/:adminId/delete',
        name: 'DeleteAdmin',
        component: DeleteAdmin
      },
      {
        path: 'administradores/new',
        name: 'NewAdmin',
        component: NewAdmin
      },
      {
        path: 'listaAdministracion',
        name: 'listaAdministracion',
        component: ListaAdministracion
      }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
