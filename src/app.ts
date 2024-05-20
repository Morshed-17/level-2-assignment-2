import express, { Request, Response } from 'express'
import cors from 'cors'
import { productRouter } from './product/product.route'
const app = express()

// parsers
app.use(express.json())
app.use(cors())

// routers

app.use('/api/products', productRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
