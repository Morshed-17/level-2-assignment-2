import { TProduct } from './product.interface'
import { Product } from './product.model'

const createProduct = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad)
  return result
}

const getAllProducts = async (searchTerm: unknown) => {
  if (typeof searchTerm === 'string') {
    const result = Product.find({ $text: { $search: searchTerm } })
    return result
  }
  const result = await Product.find()
  return result
}

const getProductById = async (id: string) => {
  const result = await Product.findById(id)
  return result
}

const updateProduct = async (id: string, updatedProduct: TProduct) => {
  const result = await Product.findByIdAndUpdate(
    id,
    {
      $set: {
        ...updatedProduct,
      },
    },
    { new: true },
  )
  return result
}
const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id)
  return result
}

export const productServices = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
}
