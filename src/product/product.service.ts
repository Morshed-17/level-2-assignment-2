import { TProduct } from './product.interface'
import { Product } from './product.model'

const createProduct = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad)
  return result
}

const getAllProducts = async () => {
  const result = await Product.find()
  return result
}

const searchMovies = async (searchTerm: unknown) => {
  const result = Product.find({ $text: { $search: searchTerm as string } })
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

export const productServices = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  searchMovies,
}
