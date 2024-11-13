import cors from "cors";
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import tambakRoutes from './routes/TambakRoutes.js';
import siklusRoutes from './routes/MulaiSiklus.js';
import kematianRoutes from './routes/Kematian.js';
import dataPakanRoutes from './routes/Pakan.js';
import dataPanenRoutes from './routes/Panen.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3020;


app.use(express.json());  
app.use(express.urlencoded({ extended: false })); 

const corsOptions = {
  origin: 'http://localhost:5173',  
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
};
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'public')));

// Routing
app.use('/tambak', tambakRoutes);
app.use('/siklus',siklusRoutes );
app.use('/kematian',kematianRoutes );
app.use('/penyakit',kematianRoutes );
app.use('/pakan', dataPakanRoutes);
app.use('/panen', dataPanenRoutes); 

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
