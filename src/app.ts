import express, { Request, Response } from 'express'
import cors from 'cors'
import { productRouter } from './product/product.route'
import { orderRouter } from './order/order.route'
const app = express()

// parsers
app.use(express.json())
app.use(cors())

// routers

app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
