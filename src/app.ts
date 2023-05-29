import express, { Application,Request,Response } from "express"
import cors from 'cors';
const app:Application = express()
app.use(cors())

// const port = 3000
//parser add
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req:Request, res:Response) => {
  res.send('Hello world')
})
export default app

