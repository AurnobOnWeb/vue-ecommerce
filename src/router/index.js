import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Auth/Login.vue";
import SignUp from "../views/Auth/SignUp.vue";
import Wishlist from "../views/Wishlist.vue";
import Cart from "../views/cart.vue";
import Account from "../views/Account.vue";
import ContactUs from "../views/ContactUs.vue";
import AboutUs from "../views/AboutUs.vue";
import Checkout from "../views/Checkout.vue";
import Category from "../views/Category.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
      meta: {
        title: "Shop your desire product | Dmart",
      },
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        title: "Login | Dmart",
      },
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp,
      meta: {
        title: "Sign Up | Dmart",
      },
    },
    {
      path: "/wishlist",
      name: "Wishlist",
      component: Wishlist,
      meta: {
        title: "Wishlisted Product | Dmart",
      },
    },
    {
      path: "/account",
      name: "Account",
      component: Account,
      meta: {
        title: "My Account | Dmart",
      },
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
      meta: {
        title: "Cart | Dmart",
      },
    },
    {
      path: "/contact",
      name: "ContactUs",
      component: ContactUs,
      meta: {
        title: "Contact us | Dmart",
      },
    },
    {
      path: "/about",
      name: "AboutUs",
      component: AboutUs,
      meta: {
        title: "About us | Dmart",
      },
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: Checkout,
      meta: {
        title: "Checkout | Dmart",
      },
    },
    {
      path: "/category",
      name: "Category",
      component: Category,
      meta: {
        title: "Category | Dmart",
      },
    },
  ],
});
router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? "D-mart";
});

export default router;
