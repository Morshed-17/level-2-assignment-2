import { Request, Response } from 'express'
import { orderServices } from './order.service'

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body
    const result = await orderServices.createOrder(order)
    res.json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.json({
      success: false,
      message: 'something went wrong',
      data: err.message,
    })
  }
}
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query
    const result = await orderServices.getAllOrders(email)
    if (email) {
      return res.json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      })
    }
    

    res.json({
      success: true,
      message: 'Orders fetched successfully!',
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

export const orderControllers = {
  createOrder,
  getAllOrders,
}
