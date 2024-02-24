import express from 'express';
import conectar, {client} from './databases/database.js';
import productController from './controllers/productsController.js';
import tableController from './controllers/tableController.js';

const app = express();
app.use(express.json());

app.use('/productos',productController);
app.use('/tabla', tableController);

const port = 4000;
conectar();

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})