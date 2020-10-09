import Home from "../19_React-router-dom/home"
import About, { History, Connect} from "../19_React-router-dom/about"
import Detail from "../19_React-router-dom/detail"
import Product from "../19_React-router-dom/Product"
import noMatch from "../19_React-router-dom/noMatch"


const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    component: About,
    routes: [
      {
        path: "/about",
        exact: true,
        component: History
      },
      {
        path: "/about/connect",
        component: Connect
      }
    ]
  },
  {
    path: "/detail",
    component: Detail
  },
  {
    path: "/product/:id",
    component: Product
  },
  {
    component: noMatch
  }
]

export default routes