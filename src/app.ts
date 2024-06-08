import express, { Request, Response } from 'express'
import cors from 'cors'
import { routes } from './app/routes'

const app = express()

// parsers
app.use(express.json())
app.use(cors())

// routers

app.use('/api/v1', routes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.all('*', (req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  })
  next()
})



export default app
