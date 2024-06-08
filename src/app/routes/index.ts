import express from 'express'
import { productRouter } from '../product/product.route'
import { orderRouter } from '../order/order.route'

const router = express.Router()

const routerModules = [
  {
    path: '/products',
    route: productRouter,
  },
  {
    path: '/orders',
    route: orderRouter,
  },
]

export const routes = routerModules.map((item) =>
  router.use(item.path, item.route),
)
