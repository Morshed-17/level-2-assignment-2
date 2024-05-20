import { TOrder } from './order.interface'
import { Order } from './order.model'

const createOrder = async (payLoad: TOrder) => {
  const result = await Order.create(payLoad)
  return result
}

const getAllOrders = async () => {
  const result = await Order.find()
  return result
}

const getOrdersByEmail = async (email: string) => {
  const result = await Order.findOne({ email })
  return result
}

export const orderServices = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
}
