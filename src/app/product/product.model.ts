import { Schema, model } from 'mongoose'
import { TInventory, TProduct, TVariants } from './product.interface'

const variantsSchema = new Schema<TVariants>(
  {
    type: {
      type: String,
      required: [true, 'type is required'],
    },
    value: {
      type: String,
      required: [true, 'value is required'],
    },
  },
  { _id: false },
)
const inventorySchema = new Schema<TInventory>(
  {
    quantity: {
      type: Number,
      required: [true, 'quantity is required'],
    },
    inStock: {
      type: Boolean,
      required: true,
      default: true
    },
  },
  { _id: false },
)

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, 'name is required'],
    unique: true
  },
  description: {
    type: String,
    required: [true, 'description is required'],
  },
  price: {
    type: Number,
    required: [true, 'price is required'],
  },
  category: {
    type: String,
    required: [true, 'category is required'],
  },
  tags: {
    type: [String],
  },
  variants: {
    type: [variantsSchema],
    required: [true, 'variants are required'],
  },
  inventory: {
    type: inventorySchema,
    required: [true, 'inventory is required'],
  },
})

export const Product = model<TProduct>('Product', productSchema)
