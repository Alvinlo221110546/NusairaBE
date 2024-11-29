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
// import { predictionService } from './models/PredictionService.js';
import contactRoutes from './routes/Contact.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3020;


app.use(express.json());  
app.use(express.urlencoded({ extended: false })); 


const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      'https://nusaira.vercel.app', 
      'http://localhost:5173', 
      'https://nusaira-be.vercel.app'
    ];

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept', 'x-requested-with'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Apply CORS middleware before routes
app.use(cors(corsOptions));

// Preflight request handler for all routes
app.options('*', cors(corsOptions));

// Middleware to add CORS headers manually for additional safety
app.use((req, res, next) => {
  const origin = req.get('origin');
  const allowedOrigins = [
    'https://nusaira.vercel.app', 
    'http://localhost:5173', 
    'https://nusaira-be.vercel.app'
  ];

  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, X-Requested-With, Accept, x-requested-with');
    res.header('Access-Control-Allow-Credentials', 'true');
  }
  
  next();
});
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
app.use('/api/contact', contactRoutes);


//ini akan dipakai untuk prediksi
// predictionService.startScheduler();



app.listen(port, async () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});