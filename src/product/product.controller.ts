import { Request, Response } from 'express'
import { productServices } from './product.service'
import { productValidationSchema } from './product.validation'

const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const product = productValidationSchema.parse(data)
    const result = await productServices.createProduct(product)

    res.json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    })
  } catch (err) {
    res.json({
      success: false,
      message: 'something went wrong',
      data: err,
    })
  }
}

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProducts()
    res.json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    })
  } catch (err) {
    res.json({
      success: false,
      message: 'something went wrong',
      data: err,
    })
  }
}
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const result = await productServices.getProductById(productId)
    res.json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    })
  } catch (err) {
    res.json({
      success: false,
      message: 'something went wrong',
      data: err,
    })
  }
}
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const updatedProduct = req.body
    const result = await productServices.updateProduct(productId, updatedProduct)
    res.json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    })
  } catch (err) {
    res.json({
      success: false,
      message: 'something went wrong',
      data: err,
    })
  }
}


export const productControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct
}
