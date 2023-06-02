import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRoute from './app/modules/users/users.route'

const app: Application = express()
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// using routes
app.use('/api/v1/users', userRoute)

//Testing
app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
