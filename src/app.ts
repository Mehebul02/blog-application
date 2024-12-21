import express, { Application, Request, Response } from "express";
import cors from 'cors'
import router from "./app/routes";
import globalErrorHandle from "./app/middleWares/globalErrorHandling";
import notFound from "./app/middleWares/notFound";
const app: Application = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/', router)

app.get('/', (req: Request, res: Response) => {
    res.send({
        status: true,
        message: "Server is running"
    })
})


// globalErrorHandle 

app.use(globalErrorHandle)
app.use(notFound)

export default app