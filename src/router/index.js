import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";
import Order from "../views/order.vue";
import Index from "../views/index.vue";
import Detail from "../views/datail.vue";
import Product from "../views/product.vue";
import OrderConfirm from "../views/orderConfirm.vue";
import OrderPay from "../views/orderPay.vue";
import OrderList from "../views/orderList.vue";
import Cart from "../views/cart.vue";
import Aliay from "../views/aliay.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "index",
        component: Index
      },
      {
        path: "/product/:id",
        name: "product",
        component: Product
      },
      {
        path: "/datail/:id",
        name: "detail",
        component: Detail
      }
    ]
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  {
    path: "/aliay",
    name: "aliay",
    component: Aliay
  },
  {
    path: "/order",
    name: "order",
    component: Order,
    children: [
      {
        path: "/order/confirm",
        name: "confirm",
        component: OrderConfirm
      },
      {
        path: "list",
        name: "list",
        component: OrderList
      },
      {
        path: "pay",
        name: "pay",
        component: OrderPay
      }
    ]
  }
];
const router = new VueRouter({
  routes
});

export default router;
