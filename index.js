import cors from "cors";
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import tambakRoutes from './routes/TambakRoutes.js';
import siklusRouter from './routes/MulaiSiklus.js';
import kematianRoutes from './routes/Kematian.js';
import dataPakanRoutes from './routes/Pakan.js';
import dataPanenRoutes from './routes/Panen.js'
import penyakitRoutes from './routes/Penyakit.js';
import ancoRoutes from './routes/Anco.js';
import penyakitLeleRoutes from './routes/PenyakitLele.js';
import beritaRoutes from './routes/Berita.js';
import notifikasiRoutes from './routes/Notifikasi.js';
import pengeluaranRoutes from './routes/Pengeluaran.js';
import pemasukanRoutes from './routes/Pemasukan.js';
import kualitasAirRoutes from './routes/Air.js';
import tagihanRoutes from './routes/Tagihan.js';
import penggunaRoutes from './routes/Pengguna.js';
import predictionRoutes from './routes/Prediction.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3020;


app.use(express.json());  
app.use(express.urlencoded({ extended: false })); 

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));

const corsOptions = {
  origin: '*',  
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
};
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'public')));

// Routing
app.use('/api/tambak', tambakRoutes); 
app.use('/api', siklusRouter);
app.use('/api', kematianRoutes);
app.use('/api', penyakitRoutes);
app.use('/api', dataPakanRoutes);
app.use('/api', dataPanenRoutes); 
app.use('/api', ancoRoutes);
app.use('/api', penyakitLeleRoutes);
app.use('/api', beritaRoutes);
app.use('/api', notifikasiRoutes);
app.use('/api', pengeluaranRoutes);
app.use('/api', pemasukanRoutes);
app.use('/api', kualitasAirRoutes);
app.use('/api', tagihanRoutes);
app.use('/api', penggunaRoutes);
app.use('/api', predictionRoutes);
app.use('/uploads', express.static('uploads'));


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
