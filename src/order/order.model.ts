import { Schema, model } from 'mongoose'
import { TOrder } from './order.interface'
import { Product } from '../product/product.model'

const orderSchema = new Schema<TOrder>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
})

orderSchema.pre('save', async function (next) {
  const result = await Product.findById(this.productId)
  if (!result) {
    throw new Error("Product does not exists by this productId")
    next()
  }
  next()
})

export const Order = model<TOrder>('Order', orderSchema)
