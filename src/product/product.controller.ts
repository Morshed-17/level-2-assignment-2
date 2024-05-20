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
        success: true,
        message: 'something went wrong',
        data: err,
      })
  }
}

export const productControllers = {
  createProduct,
}
