# NusAIraBE🐟

## Deskripsi📜

NusairaBE adalah backend untuk aplikasi Nusaira yang mengelola berbagai data terkait budidaya lele, pemasukan, pengeluaran, kualitas air, dan aspek penting lainnya. Backend ini dirancang untuk mendukung pengelolaan data secara efisien dengan menyediakan API untuk berbagai fitur aplikasi Nusaira.

## Struktur Proyek🗂

```
.gitignore

controller/
  AirController.js
  AncoController.js
  BeritaController.js
  BudidayaController.js
  BukuController.js
  ContactController.js
  FavoriteController.js
  KematianController.js
  LoginController.js
  MulaiSiklusController.js
  NotifikasiController.js
  PakanController.js
  PanenController.js
  PemasukanController.js
  PengeluaranController.js
  PenyakitController.js
  PenyakitLeleController.js

database/
  Nusairadb.js

index.js

middleware/

models/

package.json

README.md

routes/

utils/

vercel.json
```

### Penjelasan Direktori🗂️

- **controller/**: Berisi controller untuk berbagai entitas seperti `AirController.js`, `PakanController.js`, dll. 🎮
- **database/**: Berisi konfigurasi dan skrip terkait database, termasuk `Nusairadb.js`.🗃
- **middleware/**: Berisi middleware yang digunakan untuk validasi, otorisasi, dan fungsi lainnya.🛡️
- **models/**: Berisi model untuk berbagai entitas seperti `DataPemasukan.js`, `DataPanen.js`, dll.📚
- **routes/**: Berisi definisi rute untuk API aplikasi.🌐
- **utils/**: Berisi fungsi utilitas yang digunakan dalam aplikasi.⚙️

## Instalasi⚙️

1. Clone repository:

   ```sh
   git clone <https://github.com/praditus343/NusairaBE.git>
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Buat file `.env` di root direktori proyek dan tambahkan konfigurasi berikut:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=yourdatabase
   DB_URL=yourdatabaseurl
   JWT_SECRET=yourjwtsecret
   ```

## Menjalankan Proyek🚀

1. Jalankan server:

   ```sh
   node index.js
   ```

   atau, jika menggunakan `nodemon`:

   ```sh
   nodemon
   ```

2. Akses aplikasi di browser atau API client melalui:

   ```
   http://localhost:3020
   ```

## Contoh Penggunaan📝

### Menambahkan Pemasukan💵

- **Endpoint**: `POST /pemasukan`
- **Contoh Request Body**:
  ```json
  {
    "date": "2023-10-01",
    "kategori": "Penjualan",
    "jumlah": 100,
    "harga": 5000,
    "keterangan": "Penjualan ikan",
    "total": 500000,
    "tambak_id": 1
  }
  ```

### Mendapatkan Semua Pemasukan📊

- **Endpoint**: `GET /pemasukan`
- **Contoh Response**:
  ```json
  [
    {
      "id": 1,
      "date": "2023-10-01",
      "kategori": "Penjualan",
      "jumlah": 100,
      "harga": 5000,
      "keterangan": "Penjualan ikan",
      "total": 500000,
      "tambak_id": 1
    }
  ]
  ```

## Kontribusi🤝

Kami menyambut kontribusi dari siapa saja. Ikuti langkah-langkah berikut untuk berkontribusi:

1. Fork repository ini.
2. Buat branch fitur baru:
   ```sh
   git checkout -b fitur/AmazingFeature
   ```
3. Commit perubahan Anda:
   ```sh
   git commit -m 'Menambahkan fitur AmazingFeature'
   ```
4. Push branch Anda:
   ```sh
   git push origin fitur/AmazingFeature
   ```
5. Buat Pull Request di repository utama.

## Lisensi📜

Proyek ini dilisensikan di bawah lisensi MIT.

## Kontak📧

Jika Anda memiliki pertanyaan lebih lanjut, silakan hubungi kami melalui email:

```
egidanuarta17@gmail.com
alvin.lo2005@gmail.com
ogyarjndra@gmail.com
```