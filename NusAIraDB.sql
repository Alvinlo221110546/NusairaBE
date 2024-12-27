-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: bgds7th6kdsimftx0g1k-mysql.services.clever-cloud.com:3306
-- Generation Time: Dec 27, 2024 at 05:36 AM
-- Server version: 8.0.22-13
-- PHP Version: 8.2.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bgds7th6kdsimftx0g1k`
--

-- --------------------------------------------------------

--
-- Table structure for table `anco`
--

CREATE TABLE `anco` (
  `id` int NOT NULL,
  `kolam_id` int NOT NULL,
  `tanggal_panen_parsial` date NOT NULL,
  `waktu_pemberian_pakan` varchar(10) NOT NULL,
  `waktu_cek_anco` time NOT NULL,
  `catatan` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `anco`
--

INSERT INTO `anco` (`id`, `kolam_id`, `tanggal_panen_parsial`, `waktu_pemberian_pakan`, `waktu_cek_anco`, `catatan`, `created_at`, `updated_at`) VALUES
(1, 1, '2024-11-15', 'siang', '20:30:00', 'anco', '2024-11-20 07:56:38', '2024-11-20 07:56:38'),
(2, 2, '2024-11-15', 'siang', '20:30:00', 'tes', '2024-12-16 13:00:59', '2024-12-16 13:00:59');

-- --------------------------------------------------------

--
-- Table structure for table `berita`
--

CREATE TABLE `berita` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `image` varchar(255) NOT NULL,
  `excerpt` text,
  `content` text,
  `writer` varchar(255) NOT NULL,
  `image_writer` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `berita`
--

INSERT INTO `berita` (`id`, `title`, `date`, `image`, `excerpt`, `content`, `writer`, `image_writer`, `created_at`, `updated_at`) VALUES
(1, 'Seluk Beluk Usaha Budidaya Ikan Lele', '2024-11-15', 'assets/img/kabar_lele/kbl1.png', 'Kegiatan budidaya ikan lele merupakan salah satu sektor yang sangat menguntungkan dalam dunia perikanan.', 'Usaha budidaya ikan lele merupakan salah satu sektor yang sangat menguntungkan dalam dunia perikanan. Ikan lele dikenal sebagai ikan yang cepat tumbuh dan mudah dibudidayakan. Dengan kebutuhan pasar yang terus meningkat, terutama di Indonesia, usaha ini menjadi peluang yang menjanjikan.\n\nUntuk memulai usaha budidaya lele, langkah pertama yang perlu dilakukan adalah memilih lokasi yang strategis untuk kolam. Kolam yang ideal adalah yang memiliki akses mudah ke sumber air, baik dari sungai, sumur, maupun sistem irigasi. Pemilihan kolam juga harus mempertimbangkan kedalaman dan sirkulasi air, agar kualitas air tetap terjaga. Kolam lele dapat dibuat menggunakan terpal, beton, atau tanah, dengan keunggulan dan kekurangannya masing-masing.\n\nPemilihan bibit lele yang sehat juga sangat menentukan keberhasilan budidaya. Bibit lele yang baik biasanya memiliki ukuran yang seragam dan tidak cacat. Pemberian pakan berkualitas sangat penting untuk memastikan lele tumbuh dengan baik. Pakan utama yang digunakan adalah pelet ikan yang mengandung protein tinggi, namun pemberian pakan alami seperti cacing atau keong juga dapat mempercepat pertumbuhannya.\n\nSelain itu, pengelolaan kualitas air sangat penting dalam budidaya lele. Kondisi air yang ideal untuk lele adalah pH antara 6 hingga 7,5 dengan suhu sekitar 28 hingga 30 derajat Celsius. Penggantian air secara rutin dan penyaringan kolam juga perlu dilakukan agar ikan lele tetap sehat dan bebas dari penyakit.\n\nProses panen biasanya dilakukan setelah ikan mencapai berat sekitar 200 hingga 250 gram per ekor, biasanya 2 hingga 3 bulan setelah penebaran bibit. Hasil panen dapat dipasarkan ke pasar tradisional, restoran, atau dijual dalam bentuk fillet untuk memenuhi permintaan pasar yang terus berkembang.\n\nDengan pengelolaan yang baik, usaha budidaya ikan lele bisa memberikan keuntungan yang cukup besar, dan menjadi pilihan tepat bagi para petani ikan yang ingin memulai bisnis di bidang perikanan.', 'admin', 'assets/img/assets_foto/f2.png', '2024-11-26 03:52:55', '2024-11-26 03:53:21'),
(2, 'Sulap Sungon Kotor Jadi Tempat Budidaya', '2024-10-07', 'assets/img/kabar_lele/kbl2.png', 'Kerja keras komunitas Pecinta Sungai (KPS) dalam mengelola sungai dan memanfaatkan ruang terbatas untuk budidaya ikan lele.', 'Di tengah tantangan lingkungan yang semakin besar, komunitas Pecinta Sungai (KPS) di Indonesia telah menunjukkan bagaimana ruang terbatas seperti sungai yang sebelumnya kotor dapat diubah menjadi tempat yang produktif untuk budidaya ikan lele. Salah satu metode yang diterapkan adalah dengan memanfaatkan kolam terpal atau kolam berbasis teknologi hidroponik untuk mengolah ruang yang ada.\n\nSebagai awal, KPS membersihkan sungai dari sampah dan limbah yang mencemari. Proses ini memerlukan kerja keras dari masyarakat setempat yang berkomitmen untuk menjaga kebersihan sungai dan mengurangi pencemaran. Setelah sungai bersih, mereka mulai membangun kolam-kolam terpal untuk menampung air yang digunakan dalam budidaya lele.\n\nTeknologi ini sangat cocok diterapkan di daerah-daerah dengan ruang terbatas. Kolam terpal menawarkan kelebihan berupa biaya yang lebih rendah dan kemudahan dalam hal pengelolaan air. Sistem sirkulasi air yang terkontrol dengan baik memastikan kualitas air tetap terjaga, sementara ikan lele dapat tumbuh dengan optimal.\n\nSelain itu, program ini juga melibatkan masyarakat sekitar dalam kegiatan budidaya, memberikan kesempatan mereka untuk meningkatkan perekonomian melalui usaha perikanan. Kolaborasi antara pemerintah, komunitas lokal, dan sektor swasta sangat penting dalam mewujudkan usaha budidaya ikan lele yang sukses.\n\nKeberhasilan inisiatif ini menunjukkan bahwa dengan kreativitas dan kerjasama, area yang tadinya terabaikan atau tercemar bisa dikonversi menjadi ruang yang berguna dan produktif. Budidaya lele dengan metode ini tidak hanya menguntungkan dari segi ekonomi, tetapi juga turut membantu menjaga kelestarian lingkungan.', 'admin', 'assets/img/assets_foto/f2.png', '2024-11-26 03:54:47', '2024-11-26 03:54:47'),
(3, 'Budidaya Ikan nan Menguntungkan', '2024-10-18', 'assets/img/kabar_lele/kbl3.png', 'Pembersaran kolam dianggap paling sederhana dalam pengolahan budidaya lele, dan mudah diterapkan bagi peternak pemula.', 'Budidaya ikan lele memang menjadi salah satu usaha yang menguntungkan di sektor perikanan. Salah satu faktor yang membuat budidaya lele menarik adalah proses pembesaran yang relatif mudah dibandingkan dengan jenis ikan lainnya. Kolam yang digunakan untuk pembesaran lele bisa berupa kolam tanah, kolam beton, atau kolam terpal. Setiap jenis kolam memiliki keunggulan dan kekurangannya masing-masing, namun kolam terpal menjadi pilihan yang semakin populer karena biaya yang lebih murah dan perawatannya yang lebih sederhana.\n\nSelain itu, pembuatan kolam lele yang efektif sangat dipengaruhi oleh faktor pemilihan lokasi. Kolam harus dibangun di tempat yang mudah dijangkau, memiliki akses ke sumber air bersih, dan tidak terpapar langsung oleh sinar matahari. Suhu air yang ideal untuk pertumbuhan lele adalah antara 28 hingga 30 derajat Celsius. Oleh karena itu, penting bagi peternak untuk memantau suhu air dengan cermat.\n\nPemberian pakan yang tepat juga sangat penting dalam pembesaran lele. Pakan berupa pelet berkualitas tinggi dan frekuensi pemberian pakan yang tepat akan membantu ikan tumbuh dengan cepat dan sehat. Ikan lele juga dikenal dengan kemampuannya dalam mengonsumsi berbagai jenis pakan alami seperti cacing, keong, dan sisa makanan. Pemberian pakan yang cukup dan bergizi akan memastikan ikan tumbuh optimal dan siap dipanen dalam waktu sekitar 2 hingga 3 bulan.\n\nDengan pengelolaan yang baik, usaha budidaya lele memiliki potensi keuntungan yang sangat besar. Pasar ikan lele, baik untuk konsumsi domestik maupun ekspor, selalu berkembang, memberikan peluang besar bagi para peternak untuk meraih kesuksesan dalam bisnis ini. Dengan dukungan teknologi yang tepat dan manajemen yang efisien, budidaya lele akan terus menjadi bisnis yang menguntungkan di masa depan.', 'admin', 'assets/img/assets_foto/f2.png', '2024-11-26 03:56:10', '2024-11-26 03:56:10'),
(4, 'Menggabungkan Aquaponik', '2024-10-20', 'assets/img/kabar_lele/kbl4.png', 'Aquaponik adalah sistem yang menggabungkan budidaya ikan dengan hidroponik untuk meningkatkan efisiensi dan keberlanjutan usaha perikanan.', 'Aquaponik adalah sebuah sistem yang menggabungkan budidaya ikan (akuakultur) dengan hidroponik (budidaya tanaman tanpa tanah) untuk menciptakan sebuah ekosistem yang saling menguntungkan. Dalam sistem aquaponik, ikan lele dibudidayakan di kolam, dan air yang digunakan untuk kolam tersebut dialirkan ke sistem hidroponik, di mana tanaman seperti sayuran dapat tumbuh tanpa menggunakan tanah.\n\nKeuntungan utama dari sistem aquaponik adalah efisiensi penggunaan air. Dalam sistem konvensional, air sering kali dibuang setelah digunakan untuk budidaya ikan. Namun, dalam sistem aquaponik, air yang mengalir dari kolam ikan mengandung nutrisi yang dibutuhkan oleh tanaman, sementara tanaman tersebut secara alami membantu menyaring air sebelum kembali ke kolam. Ini memungkinkan penggunaan air yang jauh lebih efisien, bahkan di daerah yang kekurangan air.\n\nSelain itu, aquaponik juga mengurangi penggunaan pupuk kimia, karena tanaman mendapat nutrisi dari sisa kotoran ikan. Sistem ini ramah lingkungan, mengurangi limbah dan ketergantungan pada pupuk sintetis. Keberlanjutan sistem ini menjadikannya pilihan yang sangat menarik untuk peternak ikan dan petani yang ingin menerapkan prinsip-prinsip pertanian berkelanjutan.\n\nMeskipun sistem aquaponik memiliki banyak keuntungan, ia juga memerlukan pemahaman teknis dan perawatan yang lebih rumit dibandingkan dengan metode budidaya konvensional. Oleh karena itu, peternak atau petani yang ingin menggunakan sistem aquaponik harus belajar tentang teknik yang tepat, termasuk bagaimana menjaga keseimbangan antara ikan dan tanaman, serta bagaimana mengelola sistem air secara efektif.\n\nMeskipun tantangannya cukup besar, banyak peternak yang berhasil mengembangkan sistem aquaponik sebagai solusi yang menguntungkan dan berkelanjutan dalam budidaya ikan lele dan tanaman sekaligus. Inovasi ini membuka peluang baru bagi sektor pertanian dan perikanan di Indonesia.', 'admin', 'assets/img/assets_foto/f2.png', '2024-11-26 03:58:13', '2024-11-26 03:58:13'),
(5, 'Pembangunan Aquaponik', '2024-10-28', 'assets/img/kabar_lele/kbl5.png', 'Pembangunan aquaponik sebagai sistem yang mengintegrasikan perikanan dan pertanian untuk meningkatkan produktivitas.', 'Pembangunan aquaponik adalah solusi inovatif yang menggabungkan dua sektor penting, yaitu perikanan dan pertanian, dalam satu sistem yang berkelanjutan. Sistem ini mengandalkan simbiosis antara ikan dan tanaman, di mana limbah ikan digunakan untuk memberikan nutrisi bagi tanaman, dan tanaman membantu menyaring air yang kemudian dikembalikan ke kolam ikan. Sistem aquaponik ini memiliki potensi untuk meningkatkan produktivitas, efisiensi penggunaan air, dan mengurangi ketergantungan pada pupuk kimia.\n\nSalah satu keuntungan utama dari sistem aquaponik adalah efisiensi air yang tinggi. Sebagaimana diketahui, air merupakan sumber daya yang terbatas, dan dalam sistem tradisional, banyak air terbuang begitu saja. Namun, dalam sistem aquaponik, air yang digunakan untuk kolam ikan dapat diproses ulang untuk digunakan kembali dalam budidaya tanaman, mengurangi pemborosan air secara signifikan. Ini sangat penting terutama di daerah-daerah yang menghadapi masalah kekurangan air.\n\nSelain itu, sistem aquaponik juga mendukung produksi tanaman yang lebih sehat karena tidak mengandung bahan kimia berbahaya. Tanaman yang dibudidayakan dalam sistem aquaponik cenderung bebas dari pestisida dan menggunakan lebih sedikit pupuk sintetis. Hal ini membuat produk yang dihasilkan lebih ramah lingkungan dan lebih aman untuk konsumsi.\n\nDalam pengembangannya, sistem aquaponik memerlukan investasi awal yang cukup besar, terutama dalam pembuatan infrastruktur seperti kolam ikan, sistem sirkulasi air, dan sistem hidroponik untuk tanaman. Namun, jika dikelola dengan baik, aquaponik bisa menjadi sumber penghasilan yang stabil dan berkelanjutan. Pembangunan sistem aquaponik dapat dilakukan dengan teknologi yang terus berkembang, yang mempermudah petani dan peternak untuk mengelola usaha mereka.\n\nDengan penerapan sistem aquaponik yang lebih luas, Indonesia dapat mengembangkan sektor perikanan dan pertanian yang lebih berkelanjutan, sekaligus memenuhi kebutuhan pangan masyarakat yang terus meningkat.', 'admin', 'assets/img/assets_foto/f2.png', '2024-11-26 03:58:13', '2024-11-26 03:58:13'),
(6, 'Potensi Budidaya Ikan', '2024-10-09', 'assets/img/kabar_lele/kbl6.png', 'Budidaya ikan di Indonesia memiliki potensi yang sangat besar dan bisa terus dikembangkan dengan teknologi yang tepat.', 'Budidaya ikan di Indonesia memiliki potensi yang sangat besar, baik di sektor konsumsi domestik maupun ekspor. Negara ini memiliki sumber daya alam yang melimpah, seperti perairan yang luas dan berbagai jenis ikan yang cocok untuk dibudidayakan. Salah satu ikan yang paling banyak dibudidayakan di Indonesia adalah ikan lele, yang tidak hanya cepat tumbuh tetapi juga memiliki rasa yang lezat, membuatnya menjadi pilihan populer di pasar lokal.\r\n\r\n    Potensi budidaya ikan dapat semakin dimaksimalkan dengan memanfaatkan teknologi terbaru. Penggunaan teknologi untuk pemantauan kualitas air, pakan otomatis, dan sistem budidaya berbasis digital menjadi tren yang terus berkembang dalam industri akuakultur. Dengan adanya teknologi ini, para peternak ikan dapat mengelola usaha mereka dengan lebih efisien, mengurangi kerugian, dan meningkatkan hasil produksi.\r\n\r\n    Selain ikan lele, Indonesia juga memiliki potensi besar dalam budidaya ikan lainnya seperti ikan nila, ikan mas, dan ikan patin. Permintaan akan ikan-ikan ini terus meningkat, baik untuk konsumsi domestik maupun ekspor ke negara-negara Asia dan Eropa. Oleh karena itu, budidaya ikan dapat menjadi salah satu sektor unggulan dalam perekonomian Indonesia.\r\n\r\n    Untuk mendukung pertumbuhan sektor ini, pemerintah Indonesia telah meluncurkan berbagai program bantuan untuk para peternak ikan, seperti penyediaan bibit ikan berkualitas, pelatihan mengenai teknik budidaya yang ramah lingkungan, dan akses ke pasar yang lebih luas. Dengan adanya dukungan ini, budidaya ikan di Indonesia dapat berkembang pesat dan memenuhi kebutuhan pasar yang terus berkembang.\r\n\r\n    Dengan memanfaatkan potensi alam yang ada dan teknologi yang tepat, budidaya ikan di Indonesia tidak hanya bisa memenuhi kebutuhan domestik tetapi juga berpeluang menjadi sektor ekspor yang menjanjikan.', 'admin', 'assets/img/assets_foto/f2.png', '2024-11-26 04:02:41', '2024-11-26 04:02:41'),
(7, 'Inovasi Kolam Terpal Ikan Lele', '2024-10-10', 'assets/img/kabar_lele/kbl7.png', 'Kolam terpal semakin diminati sebagai media budidaya lele karena biayanya yang lebih murah dan fleksibilitas penggunaannya.', 'Kolam terpal untuk budidaya ikan lele kini semakin diminati oleh peternak di Indonesia karena harganya yang lebih terjangkau dan fleksibilitas dalam penggunaannya. Kolam terpal memiliki beberapa keunggulan dibandingkan kolam beton atau kolam tanah, di antaranya kemudahan dalam pembuatan, biaya yang lebih rendah, dan kemampuan untuk dipindahkan sesuai dengan kebutuhan.\r\n\r\n    Penggunaan kolam terpal juga dapat memudahkan peternak dalam mengelola kualitas air, karena kolam terpal lebih mudah dibersihkan dan disterilkan. Selain itu, kolam terpal memiliki ketahanan terhadap perubahan suhu yang lebih baik, menjadikannya pilihan yang cocok untuk daerah-daerah dengan suhu yang tidak stabil.\r\n\r\n    Meskipun demikian, kolam terpal juga memiliki beberapa kekurangan. Salah satunya adalah ketahanan material yang terbatas. Kolam terpal bisa robek jika tidak dirawat dengan baik atau jika terkena benda tajam. Oleh karena itu, perawatan dan pemeliharaan yang cermat sangat diperlukan untuk memastikan kolam terpal tetap tahan lama.\r\n\r\n    Terlepas dari kekurangannya, kolam terpal tetap menjadi solusi yang sangat efektif bagi peternak lele, terutama bagi mereka yang baru memulai usaha budidaya. Kolam ini juga memungkinkan peternak untuk memaksimalkan penggunaan lahan yang terbatas, dengan biaya operasional yang lebih rendah.\r\n\r\n    Inovasi dalam penggunaan kolam terpal ini menunjukkan bagaimana teknologi sederhana dapat digunakan untuk meningkatkan produktivitas dalam budidaya ikan lele, membuka peluang bagi peternak dengan anggaran terbatas untuk mengembangkan usaha mereka secara lebih efisien.', 'admin', 'assets/img/assets_foto/f2.png', '2024-11-26 04:02:41', '2024-11-26 04:02:41'),
(9, 'Menjaga Kualitas Lele Segar untuk Pasar ', '2024-11-30', 'https://res.cloudinary.com/dgl701jmj/image/upload/v1732940263/gije99oktieagcnzbxn9.png', 'Lele merupakan salah satu ikan air tawar yang banyak digemari di Indonesia, baik untuk konsumsi rumah tangga maupun komersial.', 'Lele dikenal sebagai salah satu jenis ikan air tawar yang sangat populer di Indonesia karena memiliki karakteristik pertumbuhan yang cepat, daya tahan tinggi terhadap berbagai kondisi lingkungan air, dan kemampuan beradaptasi yang baik. Hal ini menjadikan lele sebagai komoditas utama dalam budidaya perikanan, terutama untuk memenuhi kebutuhan konsumsi masyarakat yang terus meningkat. Tidak hanya itu, lele juga menjadi pilihan favorit para peternak karena kemudahan dalam proses pemeliharaannya, sehingga memungkinkan budidaya dilakukan baik pada skala kecil maupun besar. Dalam proses budidaya lele, kualitas air di kolam menjadi salah satu faktor utama yang sangat menentukan keberhasilan. Kesehatan ikan sangat dipengaruhi oleh parameter-parameter seperti suhu air, kadar oksigen terlarut, tingkat pH, dan salinitas. Oleh karena itu, pemantauan rutin terhadap parameter-parameter ini wajib dilakukan oleh peternak untuk mencegah timbulnya berbagai masalah, seperti stres pada ikan atau serangan penyakit yang dapat menyebabkan kematian massal. Jika kualitas air tidak terjaga, risiko kerugian bagi peternak akan meningkat secara signifikan. Selain kualitas air, pemberian pakan yang berkualitas tinggi dan sesuai kebutuhan nutrisi ikan menjadi faktor penting lainnya dalam menunjang pertumbuhan lele. Pakan yang diberikan harus mengandung protein, lemak, dan karbohidrat dalam jumlah seimbang agar ikan dapat tumbuh sehat dan mencapai ukuran ideal dalam waktu yang relatif singkat. Dengan pemberian pakan yang tepat, lele tidak hanya akan tumbuh lebih cepat, tetapi juga menghasilkan daging yang berkualitas tinggi, yang sesuai dengan permintaan pasar. Inovasi teknologi dalam budidaya lele juga semakin berkembang pesat seiring dengan kebutuhan untuk meningkatkan efisiensi dan produktivitas. Salah satu inovasi yang banyak diterapkan adalah metode prediksi Sumber Daya Alam (SR). Metode ini memungkinkan peternak untuk mengelola kolam secara lebih intensif dengan bantuan teknologi modern, seperti sistem pemantauan kualitas air secara real-time. Teknologi ini tidak hanya membantu menjaga kondisi air di kolam tetap optimal, tetapi juga memberikan peringatan dini jika terjadi perubahan parameter yang berpotensi merugikan. Dengan demikian, peternak dapat mengambil tindakan pencegahan lebih awal untuk menghindari kerugian. Selain itu, penggunaan teknologi seperti aerasi otomatis, sistem bioflok, dan aplikasi berbasis data untuk pencatatan aktivitas budidaya semakin meningkatkan efisiensi dalam proses produksi. Teknologi-teknologi ini memungkinkan peternak untuk mengurangi penggunaan sumber daya secara berlebihan, mengoptimalkan hasil panen, dan meningkatkan daya saing produk di pasar. Dengan pendekatan ini, produktivitas lele dapat meningkat secara signifikan, tidak hanya untuk memenuhi permintaan pasar domestik, tetapi juga untuk membuka peluang ekspor yang lebih besar ke pasar internasional. Penting bagi peternak lele untuk terus mengikuti perkembangan teknologi dan menerapkan metode terbaru dalam budidaya. Dengan pengelolaan yang tepat dan penerapan teknologi modern, mereka dapat memastikan hasil panen yang berkualitas tinggi, memenuhi standar pasar, dan tetap kompetitif dalam industri perikanan. Budidaya lele yang berkelanjutan tidak hanya mendukung kesejahteraan peternak, tetapi juga berkontribusi pada ketahanan pangan nasional dan pertumbuhan ekonomi daerah. Dalam jangka panjang, keberhasilan budidaya lele dapat membantu menciptakan peluang kerja baru, meningkatkan taraf hidup masyarakat, dan memperkuat sektor perikanan Indonesia sebagai salah satu pilar utama ekonomi nasional.\n', 'admin', 'assets/img/assets_foto/f2.png', '2024-11-30 04:17:51', '2024-12-11 03:19:05'),
(10, 'Meningkatnya Permintaan Lele di Pasar ', '2024-12-11', 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733888260/mjfiuamoi4ag7a6vrarc.webp', 'Permintaan lele di pasar Indonesia terus menunjukkan tren positif. Hal ini menciptakan peluang bagi peternak lokal untuk meningkatkan produksi.', 'Lele, salah satu jenis ikan air tawar yang banyak dikonsumsi di Indonesia, terus menunjukkan peningkatan permintaan di pasar domestik. Mengingat harga yang terjangkau, rasa yang lezat, dan kandungan gizi yang tinggi, lele menjadi pilihan favorit bagi banyak konsumen, baik di rumah tangga maupun restoran. Fenomena ini tidak hanya berdampak positif bagi konsumen, tetapi juga memberikan peluang besar bagi para peternak lele di tanah air. Dalam beberapa tahun terakhir, sektor budidaya lele telah berkembang pesat di berbagai wilayah Indonesia. Peternak lele, baik skala kecil maupun besar, semakin terbantu dengan adanya teknologi budidaya yang lebih efisien dan ramah lingkungan. Selain itu, berbagai program pemerintah yang mendukung pengembangan sektor perikanan juga berperan penting dalam menciptakan ekosistem yang kondusif bagi industri ini. Tingkat konsumsi lele yang terus meningkat didorong oleh faktor harga yang relatif stabil. Berbeda dengan jenis ikan lainnya, harga lele cenderung lebih terjangkau dan tersedia sepanjang tahun. Hal ini menjadikan lele pilihan yang menguntungkan bagi konsumen dengan daya beli terbatas. Selain itu, lele kaya akan protein dan lemak sehat yang penting bagi tubuh, menjadikannya pilihan makanan yang sehat dan bergizi. Para peternak lele kini semakin profesional dalam mengelola usaha mereka. Mereka tidak hanya fokus pada kualitas ikan, tetapi juga memperhatikan teknik budidaya yang ramah lingkungan. Beberapa peternak mulai mengadopsi sistem bioflok, yaitu teknologi yang mengoptimalkan penggunaan pakan dan mempercepat pertumbuhan lele tanpa merusak lingkungan. Selain itu, mereka juga mulai memperkenalkan budidaya lele organik, yang menghasilkan produk ikan yang lebih sehat dan ramah lingkungan, sehingga menarik bagi konsumen yang lebih sadar akan pola makan sehat. Namun, meskipun permintaan lele semakin meningkat, peternak masih menghadapi sejumlah tantangan. Salah satu tantangan terbesar adalah masalah penyakit yang sering menyerang ikan lele, yang dapat mengancam keberhasilan panen. Untuk mengatasi hal ini, banyak peternak lele yang terus melakukan riset dan beradaptasi dengan teknologi baru yang dapat meningkatkan ketahanan ikan terhadap penyakit. Selain itu, fluktuasi harga pakan ikan juga menjadi masalah yang perlu perhatian lebih dari pihak terkait. Dengan segala tantangan yang ada, peluang bisnis budidaya lele tetap menjanjikan. Pemerintah dan berbagai pihak terkait diharapkan dapat terus memberikan dukungan melalui pelatihan, riset, serta kebijakan yang mendukung keberlanjutan usaha peternakan lele. Jika sektor ini terus berkembang, bukan tidak mungkin lele akan semakin menjadi produk unggulan Indonesia di pasar internasional. Kesimpulannya, lele merupakan komoditas yang memiliki prospek cerah di pasar Indonesia. Dengan meningkatkan kualitas budidaya dan pengelolaan yang lebih profesional, para peternak lele bisa meraih keuntungan lebih besar, sementara konsumen tetap mendapatkan pasokan ikan yang berkualitas dan terjangkau. Dukungan dari berbagai pihak akan sangat penting dalam mewujudkan potensi besar sektor budidaya lele di Indonesia.', 'admin', 'assets/img/assets_foto/f2.png', '2024-12-11 03:37:59', '2024-12-11 03:46:58'),
(11, ' Lele, Pilihan Ikan Sehat dan Terjangkau ', '2024-12-12', 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733888432/kk5vcvznprxtci46su4z.jpg', 'Lele menjadi pilihan utama bagi konsumen Indonesia di tengah kenaikan harga ikan lainnya, berkat harganya yang terjangkau.', 'Lele terus menjadi pilihan utama bagi konsumen Indonesia, terutama di tengah lonjakan harga ikan laut yang semakin tinggi. Selain harga yang relatif terjangkau, lele memiliki kandungan protein dan lemak sehat yang baik untuk kesehatan tubuh, menjadikannya pilihan ikan yang ideal untuk berbagai kalangan, mulai dari keluarga hingga restoran. Sebagai ikan air tawar yang mudah dibudidayakan, lele banyak ditemukan di berbagai daerah di Indonesia. Budidaya lele yang efisien dan tidak membutuhkan lahan yang luas membuatnya semakin digemari oleh peternak, baik skala kecil maupun besar. Teknologi budidaya yang semakin berkembang, seperti sistem bioflok dan budidaya organik, turut meningkatkan kualitas dan kuantitas produksi lele, yang semakin banyak diminati konsumen. Namun, di balik prospek cerah budidaya lele, peternak masih menghadapi beberapa tantangan. Salah satunya adalah serangan penyakit yang dapat mengancam kesehatan ikan. Oleh karena itu, peternak perlu terus berinovasi dengan menggunakan teknologi terbaru dan memperhatikan kualitas pakan untuk mencegah kerugian. Meski demikian, peluang bisnis budidaya lele tetap terbuka lebar. Pemerintah dan sektor swasta diharapkan dapat terus mendukung peternak lele melalui program pelatihan dan riset untuk meningkatkan produktivitas dan kualitas ikan lele. Dukungan ini akan sangat penting agar peternak dapat memenuhi permintaan pasar yang terus meningkat. Secara keseluruhan, lele merupakan komoditas yang memiliki prospek cerah di Indonesia, baik untuk konsumsi lokal maupun ekspor, dan peternak yang dapat mengelola usahanya dengan baik akan meraih keuntungan yang signifikan.', 'admin', 'assets/img/assets_foto/f2.png', '2024-12-11 03:40:37', '2024-12-11 03:47:12'),
(12, 'Potensi Budidaya Lele di Indonesia', '2024-12-13', 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733888514/rdfztzreujxzntlredwl.jpg', 'Budidaya lele di Indonesia terus berkembang pesat, membuka peluang bagi peternak untuk meraih keuntungan.', 'Budidaya lele di Indonesia telah berkembang pesat dalam beberapa tahun terakhir. Ikan lele, yang dikenal dengan harga terjangkau dan kandungan gizi yang baik, semakin diminati oleh konsumen. Lele menjadi pilihan utama di pasar domestik, baik untuk konsumsi rumah tangga maupun industri restoran. Dengan permintaan yang terus meningkat, lele menjadi peluang bisnis yang menguntungkan bagi para peternak lokal. Proses budidaya lele yang relatif mudah dan efisien menjadikannya salah satu komoditas yang banyak dibudidayakan. Selain itu, lele tidak memerlukan lahan yang luas, membuatnya cocok untuk berbagai daerah di Indonesia. Teknologi budidaya lele juga semakin berkembang, dengan penerapan sistem bioflok dan penggunaan pakan yang lebih berkualitas untuk meningkatkan produktivitas dan ketahanan ikan. Namun, meskipun memiliki banyak peluang, budidaya lele juga menghadapi beberapa tantangan. Salah satunya adalah ancaman penyakit yang sering menyerang ikan lele, yang dapat merugikan peternak. Untuk itu, penting bagi peternak untuk mengelola usaha dengan baik, termasuk menjaga kualitas air dan pakan serta memonitor kesehatan ikan secara rutin. Selain itu, fluktuasi harga pakan ikan juga menjadi salah satu kendala yang harus dihadapi peternak. Meskipun demikian, dengan dukungan pemerintah melalui program pelatihan dan riset, serta penerapan teknologi yang tepat, para peternak dapat mengatasi tantangan ini. Secara keseluruhan, budidaya lele di Indonesia memiliki prospek yang cerah. Dengan pemanfaatan teknologi dan pengelolaan yang baik, peternak lele bisa meraih keuntungan lebih besar di pasar domestik maupun internasional.', 'admin', 'assets/img/assets_foto/f2.png', '2024-12-11 03:41:59', '2024-12-11 03:47:30');

-- --------------------------------------------------------

--
-- Table structure for table `catfish_production`
--

CREATE TABLE `catfish_production` (
  `id` int NOT NULL,
  `province` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `year` int NOT NULL,
  `volume` decimal(15,2) NOT NULL,
  `total_revenue` decimal(20,2) NOT NULL,
  `market_price` decimal(10,2) NOT NULL,
  `imported_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `catfish_production`
--

INSERT INTO `catfish_production` (`id`, `province`, `city`, `year`, `volume`, `total_revenue`, `market_price`, `imported_at`, `created_at`, `updated_at`) VALUES
(1, 'JAWA TENGAH', 'CILACAP', 2019, 2552880.00, 39075377000.00, 15306.39, '2024-12-01 13:26:07', '2024-12-01 13:26:07', '2024-12-01 13:26:07'),
(2, 'JAWA TENGAH', 'BOYOLALI', 2019, 26996762.00, 431948192000.00, 16000.00, '2024-12-01 13:26:07', '2024-12-01 13:26:07', '2024-12-01 13:26:07'),
(3, 'JAWA TENGAH', 'KEBUMEN', 2019, 923807.00, 14780912000.00, 16000.00, '2024-12-01 13:26:08', '2024-12-01 13:26:08', '2024-12-01 13:26:08'),
(4, 'JAWA BARAT', 'KOTA BANDUNG', 2019, 51015.00, 867255000.00, 17000.00, '2024-12-01 13:26:08', '2024-12-01 13:26:08', '2024-12-01 13:26:08'),
(5, 'JAWA BARAT', 'KOTA BEKASI', 2019, 1232020.00, 21096220000.00, 17123.28, '2024-12-01 13:26:08', '2024-12-01 13:26:08', '2024-12-01 13:26:08'),
(6, 'JAWA BARAT', 'KOTA BOGOR', 2019, 2249790.00, 38246430000.00, 17000.00, '2024-12-01 13:26:08', '2024-12-01 13:26:08', '2024-12-01 13:26:08'),
(7, 'JAWA BARAT', 'KOTA CIREBON', 2019, 73645.00, 1104675000.00, 15000.00, '2024-12-01 13:26:08', '2024-12-01 13:26:08', '2024-12-01 13:26:08'),
(8, 'JAWA BARAT', 'SUBANG', 2019, 2672040.00, 53440800000.00, 20000.00, '2024-12-01 13:26:08', '2024-12-01 13:26:08', '2024-12-01 13:26:08'),
(9, 'JAWA TIMUR', 'TULUNGAGUNG', 2019, 10006869.00, 153563838948.00, 15345.84, '2024-12-01 13:26:09', '2024-12-01 13:26:09', '2024-12-01 13:26:09'),
(10, 'JAWA TIMUR', 'JEMBER', 2020, 7525300.00, 112879500000.00, 15000.00, '2024-12-01 13:26:09', '2024-12-01 13:26:09', '2024-12-01 13:26:09'),
(11, 'JAWA TIMUR', 'MALANG', 2019, 8139701.00, 122095515000.00, 15000.00, '2024-12-01 13:26:09', '2024-12-01 13:26:09', '2024-12-01 13:26:09'),
(12, 'JAWA TIMUR', 'BLITAR', 2019, 10383300.00, 145629300000.00, 14025.34, '2024-12-01 13:26:09', '2024-12-01 13:26:09', '2024-12-01 13:26:09');

-- --------------------------------------------------------

--
-- Table structure for table `contact_messages`
--

CREATE TABLE `contact_messages` (
  `id` int NOT NULL,
  `nama` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `subjek` varchar(255) NOT NULL,
  `pesan` text NOT NULL,
  `tanggal` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` enum('pending','read','processed') DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contact_messages`
--

INSERT INTO `contact_messages` (`id`, `nama`, `email`, `subjek`, `pesan`, `tanggal`, `status`, `created_at`, `updated_at`) VALUES
(1, 'ALVIN . LO', 'alvin.lo2005@gmail.com', 'masalah pada tambak', 'data error', '2024-11-26 12:56:43', 'pending', '2024-11-26 12:56:42', '2024-11-26 12:56:42'),
(8, 'ALVIN . LO', 'alvin.lo2005@gmail.com', 'Supplier', 'saya mau jadi supplier lele dumbo', '2024-11-27 12:41:03', 'read', '2024-11-27 12:41:03', '2024-11-27 13:06:51'),
(10, 'ALVIN . LO', 'alvin.lo2005@gmail.com', 'masalah pada tambak', 'halo', '2024-11-27 12:57:06', 'pending', '2024-11-27 12:57:05', '2024-11-27 12:57:05'),
(11, 'ALVIN . LO', 'alvin.lo2005@gmail.com', 'masalah pada tambak', 'halo', '2024-11-27 12:57:08', 'read', '2024-11-27 12:57:08', '2024-12-16 12:26:21'),
(12, 'ALVIN . LO', 'alvin.lo2005@gmail.com', 'masalah pada tambak', 'halo', '2024-11-27 12:57:14', 'pending', '2024-11-27 12:57:13', '2024-11-27 12:57:13');

-- --------------------------------------------------------

--
-- Table structure for table `data_pakan`
--

CREATE TABLE `data_pakan` (
  `id` int NOT NULL,
  `kolam_id` int NOT NULL,
  `tanggal` date NOT NULL,
  `waktu` time NOT NULL,
  `puasa` tinyint(1) DEFAULT '0',
  `jumlah` decimal(10,2) DEFAULT NULL,
  `catatan` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `data_pakan`
--

INSERT INTO `data_pakan` (`id`, `kolam_id`, `tanggal`, `waktu`, `puasa`, `jumlah`, `catatan`, `created_at`, `updated_at`) VALUES
(1, 1, '2024-11-15', '20:30:00', 1, 1000.00, 'pakan', '2024-11-20 07:19:47', '2024-11-20 07:19:47'),
(2, 2, '2024-12-17', '21:30:00', 0, 1000.00, 'Pakan Grade A', '2024-12-17 02:07:24', '2024-12-17 02:07:24');

-- --------------------------------------------------------

--
-- Table structure for table `data_panen`
--

CREATE TABLE `data_panen` (
  `id` int NOT NULL,
  `kolam_id` int NOT NULL,
  `tanggal` date NOT NULL,
  `berat` decimal(10,2) NOT NULL,
  `size` decimal(10,2) NOT NULL,
  `harga_jual` decimal(15,2) NOT NULL,
  `status` varchar(255) NOT NULL,
  `catatan` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `data_panen`
--

INSERT INTO `data_panen` (`id`, `kolam_id`, `tanggal`, `berat`, `size`, `harga_jual`, `status`, `catatan`, `created_at`, `updated_at`) VALUES
(1, 1, '2024-11-15', 1000.00, 100.00, 10000.00, 'panen', 'panen', '2024-11-20 07:55:47', '2024-11-20 07:55:47'),
(2, 2, '2024-12-18', 1500.00, 50.00, 17000.00, 'parsial', 'Panen Siklus Pertama', '2024-12-17 02:08:13', '2024-12-17 02:08:13');

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` int NOT NULL,
  `buku_id` int NOT NULL,
  `user_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`id`, `buku_id`, `user_id`, `created_at`, `updated_at`) VALUES
(2, 2, 1, '2024-12-13 12:57:15', '2024-12-27 05:20:01'),
(5, 1, 1, '2024-12-10 14:33:00', '2024-12-27 05:20:01');

-- --------------------------------------------------------

--
-- Table structure for table `kematian`
--

CREATE TABLE `kematian` (
  `id` int NOT NULL,
  `kolam_id` int NOT NULL,
  `tanggal_tebar` date NOT NULL,
  `umur` int NOT NULL,
  `jumlah_ekor` int DEFAULT NULL,
  `total_berat` decimal(10,2) DEFAULT NULL,
  `multiplier` int NOT NULL,
  `size` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `kematian`
--

INSERT INTO `kematian` (`id`, `kolam_id`, `tanggal_tebar`, `umur`, `jumlah_ekor`, `total_berat`, `multiplier`, `size`, `created_at`, `updated_at`) VALUES
(1, 1, '2024-11-20', 14, 100, 0.00, 0, 0.00, '2024-11-20 06:52:50', '2024-11-20 06:52:50'),
(5, 2, '2024-11-12', 14, 0, 100.00, 10, 1000.00, '2024-11-20 07:15:09', '2024-12-17 01:47:19');

-- --------------------------------------------------------

--
-- Table structure for table `kolam`
--

CREATE TABLE `kolam` (
  `id` int NOT NULL,
  `tambak_id` int NOT NULL,
  `nama_kolam` varchar(255) NOT NULL,
  `tipe_kolam` varchar(100) NOT NULL,
  `panjang` decimal(10,2) NOT NULL,
  `lebar` decimal(10,2) NOT NULL,
  `kedalaman` decimal(10,2) NOT NULL,
  `size` decimal(10,2) NOT NULL,
  `jumlah_anco` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `kolam`
--

INSERT INTO `kolam` (`id`, `tambak_id`, `nama_kolam`, `tipe_kolam`, `panjang`, `lebar`, `kedalaman`, `size`, `jumlah_anco`, `created_at`, `updated_at`) VALUES
(1, 1, 'C', 'kolam-alam', 200.00, 200.00, 200.00, 8000000.00, 20, '2024-11-20 04:55:51', '2024-11-20 04:55:51'),
(2, 1, 'B', 'kolam-buatan', 100.00, 100.00, 150.00, 1500000.00, 20, '2024-11-20 04:55:51', '2024-11-20 04:55:51'),
(6, 5, 'howl', 'kolam-alam', 50.00, 30.00, 4.00, 6000.00, 2, '2024-12-18 15:21:53', '2024-12-18 15:21:53'),
(7, 6, 'howl', 'kolam-alam', 50.00, 30.00, 4.00, 6000.00, 2, '2024-12-18 15:21:53', '2024-12-18 15:21:53'),
(8, 7, 'howl', 'kolam-alam', 50.00, 30.00, 4.00, 6000.00, 2, '2024-12-18 15:21:54', '2024-12-18 15:21:54'),
(9, 9, 'kolam ikan', 'kolam-alam', 20.00, 20.00, 100.00, 40000.00, 2, '2024-12-24 08:56:27', '2024-12-24 08:56:27');

-- --------------------------------------------------------

--
-- Table structure for table `kualitas_air`
--

CREATE TABLE `kualitas_air` (
  `id` int NOT NULL,
  `ph` float NOT NULL,
  `suhu` float NOT NULL,
  `oksigen` float NOT NULL,
  `salinitas` float NOT NULL,
  `tambak_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `kualitas_air`
--

INSERT INTO `kualitas_air` (`id`, `ph`, `suhu`, `oksigen`, `salinitas`, `tambak_id`, `created_at`, `updated_at`) VALUES
(1, 7.8, 28, 5.8, 15, 1, '2024-11-23 13:39:48', '2024-11-23 13:39:48'),
(2, 5.8, 28, 7.2, 15, 1, '2024-12-16 13:00:33', '2024-12-16 13:00:33');

-- --------------------------------------------------------

--
-- Table structure for table `notifikasi`
--

CREATE TABLE `notifikasi` (
  `id` int NOT NULL,
  `type` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `notifikasi`
--

INSERT INTO `notifikasi` (`id`, `type`, `date`, `title`, `description`, `updated_at`, `created_at`) VALUES
(9, 'Sistem', '2024-11-28 00:00:00', 'Pembaruan Sistem NusAIra', 'Sistem telah diperbarui dengan fitur baru dan peningkatan peforma', '2024-11-28 12:44:26', '2024-11-28 12:44:26'),
(10, 'E-learning', '2024-11-28 00:00:00', 'Buku Terbaru Mengenai Manajemen Tambak ', 'Buku yang akan mengajari anda mengelola tambak baik dari pemberian pakan hingga panen secara efesien', '2024-11-28 12:46:20', '2024-11-28 12:46:20'),
(12, 'Berita', '2024-11-28 00:00:00', 'Blog Berita terbaru : Teknik Budidaya', 'Baca blog berita kami tentang teknologi dalam budidaya ikan lele', '2024-11-28 12:49:05', '2024-11-28 12:49:05'),
(13, 'Penyakit-Lele', '2024-11-28 00:00:00', 'Penyakit Ikan Mengambang ', 'Ada update penyakit baru yang ada kasus ikan mati mengambang ', '2024-11-28 12:50:09', '2024-11-28 12:50:09'),
(14, 'Sistem', '2024-12-16 00:00:00', 'Update NusAIra 2.1', 'update pembayaran menggunakan QRIS', '2024-12-16 13:56:05', '2024-12-16 13:56:05');

-- --------------------------------------------------------

--
-- Table structure for table `paket`
--

CREATE TABLE `paket` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `paket`
--

INSERT INTO `paket` (`id`, `name`, `description`, `price`, `created_at`, `updated_at`) VALUES
(1, 'Per Bulan', 'Per Bulan', 50000.00, '2024-12-27 05:21:17', '2024-12-27 05:21:17'),
(2, 'Per 6 Bulan', 'Per 6 Bulan', 240000.00, '2024-12-27 05:21:17', '2024-12-27 05:21:17'),
(3, 'Per Tahun', 'Per Tahun', 500000.00, '2024-12-27 05:21:17', '2024-12-27 05:21:17');

-- --------------------------------------------------------

--
-- Table structure for table `pemasukan`
--

CREATE TABLE `pemasukan` (
  `id` int NOT NULL,
  `date` date NOT NULL,
  `kategori` varchar(255) NOT NULL,
  `jumlah` int NOT NULL,
  `harga` decimal(15,2) NOT NULL,
  `keterangan` text,
  `total` decimal(15,2) NOT NULL,
  `tambak_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pemasukan`
--

INSERT INTO `pemasukan` (`id`, `date`, `kategori`, `jumlah`, `harga`, `keterangan`, `total`, `tambak_id`, `created_at`, `updated_at`) VALUES
(3, '2024-11-20', 'Bibit', 100, 23000.00, 'Jual Bibit', 2300000.00, 1, '2024-11-30 11:07:40', '2024-11-30 11:07:40'),
(4, '2024-11-21', 'Panen', 150, 28000.00, 'Panen Lele Segar', 4200000.00, 1, '2024-11-30 11:08:28', '2024-11-30 11:08:28'),
(5, '2024-11-22', 'Bibit', 80, 24000.00, 'Jual Bibit Jumbo', 1920000.00, 1, '2024-11-30 11:08:28', '2024-11-30 11:08:28'),
(6, '2024-11-23', 'Panen', 120, 30000.00, 'Panen Lele Jumbo', 3600000.00, 1, '2024-11-30 11:08:28', '2024-11-30 11:08:28'),
(7, '2024-11-24', 'Pakan', 50, 15000.00, 'Jual Pakan Lele', 750000.00, 1, '2024-11-30 11:08:28', '2024-11-30 11:08:28'),
(8, '2024-11-25', 'Bibit', 60, 22000.00, 'Bibit Ekstra', 1320000.00, 1, '2024-11-30 11:08:28', '2024-11-30 11:08:28'),
(9, '2024-11-26', 'Panen', 100, 29000.00, 'Panen Lele Segar', 2900000.00, 1, '2024-11-30 11:08:28', '2024-11-30 11:08:28'),
(11, '2024-11-25', 'Bibit', 60, 22000.00, 'Bibit Ekstra', 1320000.00, 1, '2024-12-01 18:57:23', '2024-12-01 18:57:23'),
(12, '2024-11-26', 'Panen', 100, 29000.00, 'Panen Lele Segar', 2900000.00, 1, '2024-12-01 18:57:23', '2024-12-01 18:57:23'),
(28, '2024-11-25', 'Bibit', 60, 22000.00, 'Bibit Ekstra', 1320000.00, 1, '2024-12-03 06:31:37', '2024-12-03 06:31:37');

-- --------------------------------------------------------

--
-- Table structure for table `pengeluaran`
--

CREATE TABLE `pengeluaran` (
  `id` int NOT NULL,
  `date` date NOT NULL,
  `jenis_pengeluaran` varchar(255) NOT NULL,
  `nama_barang` varchar(255) NOT NULL,
  `catatan` text,
  `status` varchar(100) NOT NULL,
  `sisa_tagihan` decimal(15,2) NOT NULL,
  `tambak_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pengeluaran`
--

INSERT INTO `pengeluaran` (`id`, `date`, `jenis_pengeluaran`, `nama_barang`, `catatan`, `status`, `sisa_tagihan`, `tambak_id`, `created_at`, `updated_at`) VALUES
(2, '2024-11-21', 'Beli Pakan', 'Pakan A1', 'Pakan Untuk Kolam 1', 'Lunas', 0.00, 1, '2024-11-30 11:09:27', '2024-11-30 11:09:27'),
(3, '2024-11-22', 'Beli Pakan', 'Pakan B2', 'Pakan Untuk Kolam 2', 'Lunas', 0.00, 1, '2024-11-30 11:11:05', '2024-11-30 11:11:05'),
(4, '2024-11-22', 'Beli Obat', 'Obat A1', 'Obat Untuk Kolam 1', 'Belum', 50000.00, 1, '2024-11-30 11:11:05', '2024-11-30 11:11:05');

-- --------------------------------------------------------

--
-- Table structure for table `pengguna`
--

CREATE TABLE `pengguna` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(225) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('user','admin') DEFAULT 'user',
  `pekerjaan` varchar(255) DEFAULT NULL,
  `jenis_kelamin` enum('L','P') DEFAULT NULL,
  `no_hp` varchar(15) DEFAULT NULL,
  `lokasi` varchar(255) DEFAULT NULL,
  `foto_profile` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pengguna`
--

INSERT INTO `pengguna` (`id`, `name`, `username`, `email`, `password`, `role`, `pekerjaan`, `jenis_kelamin`, `no_hp`, `lokasi`, `foto_profile`, `created_at`, `updated_at`) VALUES
(1, 'Suwarmo', 'user1', 'Suwarmo@gmail.com', '$2b$10$A5sRrXyGshV14M8mPXqpVurWWK/hBxLeuWzIXZijlsVh5ZqwFXt9W', 'user', 'Peternak', 'L', '085700120950', 'Boyolali', 'https://res.cloudinary.com/dgl701jmj/image/upload/v1734149300/ftypfnqvnyza4eq9ls2x.jpg', '2024-11-30 15:44:24', '2024-12-27 05:22:06'),
(2, 'admin', 'admin', 'admin@gmail.com', '$2b$10$A5sRrXyGshV14M8mPXqpVurWWK/hBxLeuWzIXZijlsVh5ZqwFXt9W', 'admin', 'admin', 'L', '08979728413', 'admin', 'https://res.cloudinary.com/dgl701jmj/image/upload/v1734106045/jicrmet4cbl78xrdcmf1.jpg', '2024-12-09 22:02:40', '2024-12-27 05:22:06'),
(3, 'Musashi', 'user2', 'user2@gmail.com', '$2b$10$A5sRrXyGshV14M8mPXqpVurWWK/hBxLeuWzIXZijlsVh5ZqwFXt9W', 'user', 'Peternak', 'L', '089746615', 'Nganjuk', 'https://res.cloudinary.com/dgl701jmj/image/upload/v1734097335/wsrsqc4nb1a96in0q2jk.png', '2024-12-11 20:46:50', '2024-12-27 05:22:06'),
(21, 'user3', 'user3', 'user3@gmail.com', '$2a$10$4iCM8Nn.DmJA16U4j8u1jeroklPS45OAN9q.PQi6ynIPKax.WoUBu', 'user', 'peternak', 'L', '082832813', 'Malang', 'https://res.cloudinary.com/dgl701jmj/image/upload/v1734107915/h5nhmzrh2nkjj0ljq6up.jpg', '2024-12-13 16:37:56', '2024-12-27 05:22:06'),
(100, 'Magalan', 'magalan', 'magalan@gmail.com', '$2a$10$ZNrQNsC9dsizTOF3CtYcx.1664CGH3ZhaepWKMcA1HbC0dPWNHBh6', 'user', 'lainnya', 'L', '0893841989421', 'Cilacap', 'https://res.cloudinary.com/dgl701jmj/image/upload/v1734105852/zkr6m2hltzowtzjlwnnt.jpg', '2024-12-16 11:40:31', '2024-12-27 05:22:06');

-- --------------------------------------------------------

--
-- Table structure for table `penyakit`
--

CREATE TABLE `penyakit` (
  `id` int NOT NULL,
  `kolam_id` int NOT NULL,
  `tanggal_tebar` date NOT NULL,
  `jenis_penyakit` varchar(255) NOT NULL,
  `catatan` text,
  `images` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `penyakit`
--

INSERT INTO `penyakit` (`id`, `kolam_id`, `tanggal_tebar`, `jenis_penyakit`, `catatan`, `images`, `created_at`, `updated_at`) VALUES
(1, 1, '2024-11-20', 'jamur_air', 'tes', '[\"https://res.cloudinary.com/dgl701jmj/image/upload/v1732352344/nss0m7hrjxtis7xpx5rz.png\"]', '2024-11-23 08:59:05', '2024-11-23 08:59:05'),
(2, 1, '2024-11-20', 'jamur_air', 'tes 2', '[\"https://res.cloudinary.com/dgl701jmj/image/upload/v1732353158/mcsxpa2cntdxq5avigvl.png\"]', '2024-11-23 09:12:39', '2024-11-23 09:12:39'),
(3, 1, '2024-11-20', 'jamur_air', 'tes', '[\"https://res.cloudinary.com/dgl701jmj/image/upload/v1732455962/vnroc6cjhs1vrnyqfnex.png\"]', '2024-11-24 13:46:03', '2024-11-24 13:46:03');

-- --------------------------------------------------------

--
-- Table structure for table `penyakit_lele`
--

CREATE TABLE `penyakit_lele` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `image` varchar(255) NOT NULL,
  `indikasi` text,
  `penyebab` text,
  `penanganan` text,
  `pencegahan` text,
  `gejalaTambahan` text,
  `referensi` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `penyakit_lele`
--

INSERT INTO `penyakit_lele` (`id`, `title`, `date`, `image`, `indikasi`, `penyebab`, `penanganan`, `pencegahan`, `gejalaTambahan`, `referensi`, `created_at`, `updated_at`) VALUES
(1, 'Penyakit Bintik Putih', '2024-10-01', 'assets/img/penyakit_lele/pyl1.png', 'Lele terlihat memiliki bintik-bintik putih pada tubuh, sirip, dan insang. Lele sering menggosok tubuhnya ke permukaan kolam.', 'Infeksi parasit Ichthyophthirius multifiliis, sering terjadi akibat kualitas air yang buruk.', 'Tingkatkan kualitas air dengan mengganti sebagian air kolam. Gunakan larutan formalin atau garam khusus ikan untuk membasmi parasit.', 'Jaga kualitas air kolam dengan filtrasi yang baik. Hindari kepadatan ikan yang terlalu tinggi.', 'Nafsu makan lele dapat menurun dan lele terlihat stres.', '[\"Brown, P. (2020). Managing Fish Parasites. Aquatic Health Journal.\", \"Smith, J. (2019). Water Quality and Its Impact on Aquatic Life. Marine Biology Press.\"]', '2024-11-25 16:54:05', '2024-11-25 17:42:08'),
(2, 'Penyakit Luka Ulkus', '2024-10-02', 'assets/img/penyakit_lele/pyl5.png', 'Lele memiliki luka terbuka atau ulkus pada tubuh. Luka dapat terlihat merah dan bernanah.', 'Infeksi bakteri seperti Aeromonas hydrophila. Luka sering terjadi akibat cedera fisik.', 'Bersihkan luka dengan larutan antiseptik ikan. Gunakan antibiotik yang sesuai setelah konsultasi dengan ahli.', 'Hindari benda tajam atau kasar di kolam. Pastikan ikan tidak terlalu padat untuk mencegah stres.', 'Lele yang terluka sering kali tidak aktif dan menghindari makanan.', '[\"Johnson, L. (2021). Fish Wound Management. Aquaculture Today.\", \"Garcia, R. (2020). Preventing Bacterial Infections in Aquatic Species. Fisheries Health Press.\"]', '2024-11-25 16:54:05', '2024-11-26 01:43:16'),
(3, 'Penyakit Busuk Sirip', '2024-10-03', 'assets/img/penyakit_lele/pyl9.png', 'Sirip lele tampak robek, berlubang, atau membusuk. Sirip dapat terlihat memendek dan kusam.', 'Bakteri seperti Pseudomonas sp. dan Aeromonas sp. Stres dan kondisi air yang buruk sering memicu penyakit ini.', 'Gunakan antibiotik ikan yang tepat. Tingkatkan kualitas air kolam dan hindari kepadatan ikan yang terlalu tinggi.', 'Rutin memeriksa kualitas air dan melakukan perawatan pencegahan dengan probiotik.', 'Lele mungkin menjadi kurang aktif dan cenderung bersembunyi.', '[\"Smith, J. (2021). Aquatic Bacterial Infections. Fish Health Journal.\", \"Anderson, K. (2019). Preventing Stress in Aquatic Life. Aquatic Sciences Press.\"]', '2024-11-25 16:54:05', '2024-11-26 01:46:32'),
(4, 'Penyakit Insang Merah', '2024-10-04', 'assets/img/penyakit_lele/pyl4.png', 'Insang lele tampak merah terang dan membengkak. Lele mungkin terlihat sulit bernapas dan sering berada di permukaan.', 'Infeksi parasit atau bakteri, serta kualitas air yang buruk.', 'Gunakan larutan kalium permanganat atau formalin sesuai dosis untuk mengobati parasit. Perbaiki sirkulasi udara di kolam.', 'Rutin menjaga kebersihan kolam dan menghindari penggunaan pakan berkualitas rendah.', 'Lele menunjukkan tanda-tanda stres seperti berenang tidak teratur.', '[\"Robinson, M. (2020). Respiratory Diseases in Fish. Fish Health Press.\", \"Brown, P. (2019). Enhancing Aquatic Environments. Marine Health Journal.\"]', '2024-11-25 16:54:05', '2024-11-25 17:42:31'),
(5, 'Penyakit Kembung Perut', '2024-10-05', 'assets/img/penyakit_lele/pyl8.png', 'Lele terlihat memiliki perut yang membesar dan tampak tidak nyaman. Lele sering mengapung atau tenggelam. Perilaku makan menjadi tidak teratur.', 'Dapat disebabkan oleh pakan yang berkualitas buruk atau berlebihan. Infeksi bakteri yang mempengaruhi sistem pencernaan. Stres akibat lingkungan yang tidak stabil.', 'Segera perbaiki kualitas pakan dan kurangi jumlah pakan. Tambahkan obat probiotik untuk memperbaiki flora usus. Perbaiki kualitas air kolam untuk mengurangi stres.', 'Gunakan pakan yang baik dan sesuai dengan kebutuhan lele. Rutin memeriksa kondisi kesehatan lele dan kualitas air. Menjaga kepadatan ikan di kolam agar tidak berlebihan.', 'Lele mungkin menunjukkan tanda-tanda stres seperti berenang tidak teratur. Kemungkinan munculnya masalah pernapasan jika infeksi berkembang.', '[\"White, A. (2021). Nutrition and Feeding of Fish. Aquaculture Press.\", \"Robinson, M. (2020). The Impact of Water Quality on Fish Health. Fishery Science Journal.\"]', '2024-11-25 16:54:05', '2024-11-26 01:45:34'),
(6, 'Penyakit Jamur', '2024-10-06', 'assets/img/penyakit_lele/pyl2.png', 'Tubuh lele terlihat seperti dilapisi kapas putih. Sirip dan insang juga bisa terkena.', 'Infeksi jamur Saprolegnia sp., biasanya terjadi karena luka atau stres pada ikan.', 'Gunakan larutan anti-jamur seperti malachite green atau formalin dengan dosis sesuai. Tingkatkan kebersihan kolam.', 'Pastikan kolam selalu bersih dan bebas dari benda tajam yang dapat melukai ikan.', 'Lele sering terlihat lemah dan tidak aktif. Nafsu makan juga menurun drastis.', '[\"Thomas, D. (2020). Fungal Infections in Aquatic Life. Marine Biology Research.\", \"Johnson, L. (2019). Maintaining Aquatic Health. Fish Health Journal.\"]', '2024-11-25 16:55:47', '2024-11-26 01:43:37'),
(7, 'Penyakit Pucat Insang', '2024-10-07', 'assets/img/penyakit_lele/pyl7.png', 'Insang lele terlihat pucat atau keputihan. Lele sering terlihat lemas dan sulit bernapas.', 'Anemia akibat infeksi parasit atau kekurangan oksigen di kolam.', 'Tingkatkan kadar oksigen di kolam menggunakan aerator. Gunakan obat anti-parasit sesuai rekomendasi ahli.', 'Rutin memantau kadar oksigen di kolam dan menjaga kualitas air tetap baik.', 'Lele terlihat lebih sering di permukaan air, terutama saat kadar oksigen rendah.', '[\"Brown, P. (2021). Understanding Fish Anemia. Aquatic Health Journal.\", \"Garcia, R. (2020). Water Aeration Techniques. Marine Sciences Press.\"]', '2024-11-25 16:55:47', '2024-11-26 01:48:52'),
(8, 'Penyakit Mata Bengkak', '2024-10-08', 'assets/img/penyakit_lele/pyl3.png', 'Mata lele terlihat membengkak, menonjol, atau memerah. Bisa terjadi pada salah satu atau kedua mata.', 'Infeksi bakteri atau jamur akibat kualitas air yang buruk. Bisa juga karena cedera fisik.', 'Gunakan antibiotik atau anti-jamur sesuai anjuran. Tingkatkan kualitas air kolam.', 'Hindari kepadatan ikan yang terlalu tinggi dan cegah benda tajam di kolam.', 'Lele mungkin terlihat kurang aktif dan sering bersembunyi.', '[\"Johnson, L. (2020). Treating Fish Eye Diseases. Aquatic Health Journal.\", \"Smith, J. (2019). Maintaining Fish Vision Health. Fisheries Research Press.\"]', '2024-11-25 16:55:47', '2024-11-26 01:48:30'),
(9, 'Penyakit Perut Kembung Akut', '2024-10-09', 'assets/img/penyakit_lele/pyl6.png', 'Lele memiliki perut yang sangat membesar dengan gejala lain seperti kesulitan berenang.', 'Infeksi bakteri yang parah atau pemberian pakan yang salah.', 'Kurangi pemberian pakan sementara waktu. Berikan probiotik dan antibiotik untuk mengatasi infeksi.', 'Selalu gunakan pakan yang sesuai dan jangan memberi pakan secara berlebihan.', 'Lele sering terlihat lemah dan menunjukkan tanda stres seperti berenang tidak teratur.', '[\"Robinson, M. (2021). Advanced Fish Nutrition. Aquaculture Science Press.\", \"White, A. (2020). Preventing Digestive Issues in Fish. Fisheries Journal.\"]', '2024-11-25 16:55:47', '2024-11-26 01:50:45'),
(12, 'Penyakit Kelebihan Amonia', '2024-11-23', 'https://res.cloudinary.com/dgl701jmj/image/upload/v1732884131/w8mtd8dategqppeihzbo.jpg', 'Air kolam yang mengandung amonia dalam jumlah tinggi (lebih dari 1 ppm) dapat menyebabkan keracunan pada ikan lele.\nTerjadi penurunan nafsu makan, perilaku yang tidak normal, dan tingkat kematian yang tinggi pada lele.\nPenggunaan pakan yang tidak efisien juga dapat meningkatkan kadar amonia dalam air.\nKelebihan amonia sering terlihat pada sistem akuakultur dengan sistem sirkulasi air yang buruk atau filterasi yang tidak memadai.', 'Ammonia (NH₃) adalah hasil dari proses dekomposisi bahan organik, terutama dari kotoran ikan dan sisa pakan yang tidak dimakan.\nKurangnya oksigen di dalam air dapat menyebabkan penguraian bahan organik yang menghasilkan amonia.\nSistem sirkulasi air yang tidak cukup baik dan filterasi yang buruk mengakibatkan akumulasi amonia.\nPemberian pakan berlebihan atau pakan yang tidak diserap dengan baik oleh ikan lele.', 'Lakukan penggantian air secara berkala untuk menurunkan konsentrasi amonia.\nGunakan filter biologis untuk mengurangi kadar amonia dalam air kolam.\nPeriksa sistem aerasi atau oksigenasi air untuk meningkatkan kadar oksigen dan membantu penguraian amonia menjadi nitrat oleh bakteri pengurai.', 'Memastikan sistem filtrasi berfungsi dengan baik untuk mengurangi sisa pakan dan kotoran ikan yang mengandung amonia.\nMemastikan aerasi yang cukup untuk menjaga oksigen dalam air dan mendukung aktivitas bakteri pengurai.', 'Stres berlebihan pada ikan: Ikan akan terlihat bersembunyi di sudut kolam atau berkumpul di permukaan air, berusaha mencari oksigen tambahan.\nKesulitan bernapas: Pergerakan insang ikan akan cepat sebagai respons terhadap kekurangan oksigen.\nKerusakan pada insang: Insang ikan dapat terlihat merah atau iritasi, yang menunjukkan kerusakan akibat paparan amonia yang tinggi.\nPendarahan pada kulit atau sirip: Ikan dapat menunjukkan bercak merah atau perubahan warna pada tubuh, tanda-tanda perdarahan internal.', '[\"Boyd, C. E. (1990). Water Quality in Ponds for Aquaculture. Auburn University.Hargreaves\", \"J. A. (2006). Management of Aquaculture Waste. Springer.\"]', '2024-11-29 12:42:19', '2024-11-29 15:58:54'),
(13, 'Penyakit Saprolegniasis', '2024-12-12', 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733889455/dcrz6idwl1v427hxwcij.jpg', 'Lele menunjukkan gejala adanya pembengkakan atau pertumbuhan jamur berwarna putih atau abu-abu pada tubuh, terutama di area luka atau insang. Lele terlihat lesu dan cenderung tidak aktif.', 'Infeksi jamur Saprolegnia yang menyerang ikan yang sedang stres, terluka, atau hidup dalam kondisi lingkungan yang buruk. Sering kali disebabkan oleh kualitas air yang rendah dan kepadatan ikan yang tinggi.', 'Jaga kualitas air dengan menjaga suhu, pH, dan kadar oksigen dalam kolam. Gunakan sistem filtrasi yang baik dan lakukan pergantian air secara berkala. Kurangi kepadatan ikan untuk menghindari stres pada ikan. Hindari kerusakan pada tubuh ikan yang dapat menjadi pintu masuk infeksi.', 'Tingkatkan kualitas air dengan mengganti sebagian air kolam untuk mengurangi kadar amonia dan kontaminan lainnya. Gunakan fungisida atau larutan garam untuk membasmi infeksi jamur pada tubuh ikan. Isolasi ikan yang terinfeksi untuk mencegah penyebaran ke ikan lainnya.', 'Lele terlihat lebih banyak menghabiskan waktu di bagian bawah kolam dan tidak aktif. Pembengkakan pada tubuh ikan serta bercak putih yang muncul pada kulit dan insang. Penurunan nafsu makan dan tanda-tanda stres pada ikan.', ' [\"Brown, P. (2020). Managing Fish Parasites. Aquatic Health Journal.\", \"Smith, J. (2019). Water Quality and Its Impact on Aquatic Life. Marine Biology Press.\"]', '2024-12-11 03:57:42', '2024-12-11 03:57:42'),
(14, 'Penyakit Viral Hemorrhagic Septicemia (VHS)', '2024-12-13', 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733889724/motm993nk8v8gxcxouoq.jpg', 'Lele menunjukkan tanda-tanda pendarahan pada kulit, insang, dan organ internal. Ikan terlihat lemas, tidak aktif, dan sering mengambang di permukaan air. Beberapa lele juga mengalami pembengkakan pada tubuh dan perut.', 'Infeksi oleh virus Viral Hemorrhagic Septicemia (VHS), yang dapat menyebabkan pendarahan internal pada ikan lele. Penyakit ini sering menyebar dengan cepat melalui air yang terkontaminasi dan dapat menyebar antar ikan dengan mudah.', 'Jaga kualitas air dengan mengontrol suhu dan pH agar tetap stabil. Lakukan pergantian air secara rutin untuk mengurangi kemungkinan penyebaran virus.\nHindari membeli atau menambah ikan baru tanpa karantina untuk mencegah masuknya virus. Isolasi ikan yang menunjukkan gejala VHS untuk mencegah penyebaran kepada ikan lain.', 'Tidak ada pengobatan spesifik untuk VHS, namun peningkatan kualitas air dapat membantu memperbaiki kondisi ikan yang terinfeksi. Isolasi ikan yang terinfeksi dan segera pisahkan dari ikan lainnya untuk mencegah penyebaran lebih lanjut. Pastikan lingkungan kolam memiliki oksigen yang cukup dan suhu yang stabil untuk mengurangi stres pada ikan. Jika infeksi sudah menyebar luas, culling (pemotongan) ikan yang terinfeksi dapat dilakukan untuk melindungi kolam lainnya.', 'Lele terlihat lesu, sering mengambang di permukaan air, dan bergerak dengan pola yang tidak teratur. Pembengkakan tubuh atau perut dan penurunan nafsu makan. Pendarahan internal yang dapat terlihat sebagai bercak merah atau hitam pada kulit, insang, dan organ dalam ikan.', '[\"Hedrick, R. P. , & Elston, R. A. (2014). Viral Hemorrhagic Septicemia in Freshwater and Marine Fish. Journal of Aquatic Animal Health, 26(1), 25-30\", \"Gauthier, J. M. , & Jasperson, D. C. (2016). Viral Hemorrhagic Septicemia: Impacts on Fish Farming. Aquaculture Research, 47(12), 3946-3958.\",\"Hershberger, P. K. , & LaPatra, S. E. (2013). Viral Hemorrhagic Septicemia Virus: Epidemiology, Pathology, and Management. Fish Pathology, 48(1), 45-56.\"]', '2024-12-11 04:06:27', '2024-12-11 04:10:19');

-- --------------------------------------------------------

--
-- Table structure for table `perpustakaan`
--

CREATE TABLE `perpustakaan` (
  `id` int NOT NULL,
  `judul` varchar(255) NOT NULL,
  `deskripsi` text NOT NULL,
  `tanggal_terbit` date NOT NULL,
  `link_pdf` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `perpustakaan`
--

INSERT INTO `perpustakaan` (`id`, `judul`, `deskripsi`, `tanggal_terbit`, `link_pdf`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Bisnis Lele untuk Pemula', 'Budidaya lele kini telah berkembang pesat\nmenjadi peluang bisnis yang\nmenguntungkan. Dengan pasar yang luas\ndan permintaan yang terus meningkat,\nbisnis budidaya lele bisa menjadi pilihan\nyang menjanjikan bagi pemula yang ingin\nterjun ke dunia usaha perikanan.', '2024-12-12', 'https://drive.google.com/file/d/1jVKO1pitbXiJ72oVX8ON4biZVsqI28lm/view?usp=drive_link', 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733805765/yih4shcztuzidpy9qhy7.jpg', '2024-12-10 04:17:49', '2024-12-12 16:57:15'),
(2, 'Cara Efektif Membudidayakan Lele', 'Budidaya lele merupakan salah satu peluang\nusaha yang menjanjikan, terutama bagi\nmasyarakat Indonesia yang memiliki potensi\nsumber daya air melimpah. Dalam beberapa\ntahun terakhir, permintaan pasar akan ikan\nlele terus meningkat.', '2024-12-13', 'https://drive.google.com/file/d/14_EYYqxd_WUVlcMTF1b04wfO8oOJlJZZ/view?usp=drive_link', 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733805740/myhqo7buajww5pmsorhf.jpg', '2024-12-10 04:42:24', '2024-12-12 16:57:33'),
(3, 'Panduan Ternak Lele Modern', 'Ternak lele modern menjadi salah satu usaha yang\nsangat diminati, baik oleh peternak pemula maupun\nyang telah berpengalaman. Hal ini disebabkan oleh\ntingginya permintaan pasar terhadap ikan lele, yang\ntidak hanya digunakan untuk konsumsi rumah tangga', '2024-12-14', 'https://drive.google.com/file/d/1ViSozn7CqY0dXy4i2JrsVnO_p58LfQqw/view?usp=drive_link', 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733805853/cv1fpi3nubj4khjx1cc9.jpg', '2024-12-10 04:44:17', '2024-12-12 16:58:02'),
(4, 'Teknologi Cerdas Dalam Budidaya Lele', 'Kemajuan teknologi telah membuka banyak\npeluang baru dalam sektor perikanan, khususnya\nbudidaya lele. Dengan populasi global yang terus\nmeningkat, kebutuhan akan sumber protein hewani\nsemakin tinggi, menjadikan budidaya lele salah satu\nsolusi yang efektif dan efisien.', '2024-12-15', 'https://drive.google.com/file/d/1h-M814oo_WQ75XeYd5eBpHFG8lMXTonF/view?usp=drive_link', 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733805912/ktxk9h2m16yundhenbal.jpg', '2024-12-10 04:45:15', '2024-12-12 16:58:19');

-- --------------------------------------------------------

--
-- Table structure for table `predictions`
--

CREATE TABLE `predictions` (
  `id` int NOT NULL,
  `month` varchar(20) NOT NULL,
  `prediction` decimal(10,2) NOT NULL,
  `prediction_year` int NOT NULL,
  `province` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `predictions`
--

INSERT INTO `predictions` (`id`, `month`, `prediction`, `prediction_year`, `province`, `city`, `created_at`, `updated_at`) VALUES
(1, 'Januari', 6875.17, 2024, 'JAWA BARAT', 'Bandung', '2024-11-24 17:52:57', '2024-12-27 05:23:05'),
(2, 'Februari', 26092.73, 2024, 'JAWA BARAT', 'Bandung', '2024-11-24 17:52:58', '2024-12-27 05:23:05'),
(3, 'Maret', 32765.16, 2024, 'JAWA BARAT', 'Bandung', '2024-11-24 17:52:58', '2024-12-27 05:23:05'),
(4, 'April', 37321.81, 2024, 'JAWA BARAT', 'Bandung', '2024-11-24 17:52:58', '2024-12-27 05:23:05'),
(5, 'Mei', 41379.80, 2024, 'JAWA BARAT', 'Bandung', '2024-11-24 17:52:58', '2024-12-27 05:23:05'),
(6, 'Juni', 17272.33, 2024, 'JAWA BARAT', 'Bandung', '2024-11-24 17:52:58', '2024-12-27 05:23:05'),
(7, 'Juli', 12803.14, 2024, 'JAWA BARAT', 'Bandung', '2024-11-24 17:52:59', '2024-12-27 05:23:05'),
(8, 'Agustus', 13229.82, 2024, 'JAWA BARAT', 'Bandung', '2024-11-24 17:52:59', '2024-12-27 05:23:05'),
(9, 'September', 12181.85, 2024, 'JAWA BARAT', 'Bandung', '2024-11-24 17:52:59', '2024-12-27 05:23:05'),
(10, 'Oktober', 13372.98, 2024, 'JAWA BARAT', 'Bandung', '2024-11-24 17:52:59', '2024-12-27 05:23:05'),
(11, 'November', 14032.96, 2024, 'JAWA BARAT', 'Bandung', '2024-11-24 17:52:59', '2024-12-27 05:23:05'),
(12, 'Desember', 13576.39, 2024, 'JAWA BARAT', 'Bandung', '2024-11-24 17:53:00', '2024-12-27 05:23:05'),
(13, 'Yearly Average', 20075.35, 2024, 'JAWA BARAT', 'Bandung', '2024-11-24 17:53:00', '2024-12-27 05:23:05'),
(14, 'Januari', 7129.93, 2024, 'JAWA BARAT', 'Bekasi', '2024-11-24 17:53:04', '2024-12-27 05:23:05'),
(15, 'Februari', 24720.30, 2024, 'JAWA BARAT', 'Bekasi', '2024-11-24 17:53:04', '2024-12-27 05:23:05'),
(16, 'Maret', 32047.80, 2024, 'JAWA BARAT', 'Bekasi', '2024-11-24 17:53:05', '2024-12-27 05:23:05'),
(17, 'April', 37470.61, 2024, 'JAWA BARAT', 'Bekasi', '2024-11-24 17:53:05', '2024-12-27 05:23:05'),
(18, 'Mei', 19188.73, 2024, 'JAWA BARAT', 'Bekasi', '2024-11-24 17:53:05', '2024-12-27 05:23:05'),
(19, 'Juni', 12018.24, 2024, 'JAWA BARAT', 'Bekasi', '2024-11-24 17:53:05', '2024-12-27 05:23:05'),
(20, 'Juli', 26397.56, 2024, 'JAWA BARAT', 'Bekasi', '2024-11-24 17:53:05', '2024-12-27 05:23:05'),
(21, 'Agustus', 14167.05, 2024, 'JAWA BARAT', 'Bekasi', '2024-11-24 17:53:06', '2024-12-27 05:23:05'),
(22, 'September', 13343.36, 2024, 'JAWA BARAT', 'Bekasi', '2024-11-24 17:53:06', '2024-12-27 05:23:05'),
(23, 'Oktober', 13428.09, 2024, 'JAWA BARAT', 'Bekasi', '2024-11-24 17:53:06', '2024-12-27 05:23:05'),
(24, 'November', 12801.53, 2024, 'JAWA BARAT', 'Bekasi', '2024-11-24 17:53:06', '2024-12-27 05:23:05'),
(25, 'Desember', 13210.03, 2024, 'JAWA BARAT', 'Bekasi', '2024-11-24 17:53:06', '2024-12-27 05:23:05'),
(26, 'Yearly Average', 18826.94, 2024, 'JAWA BARAT', 'Bekasi', '2024-11-24 17:53:07', '2024-12-27 05:23:05'),
(170, 'Januari', 8012.52, 2024, 'JAWA BARAT', 'Bogor', '2024-11-24 18:20:00', '2024-12-27 05:23:05'),
(171, 'Februari', 26227.62, 2024, 'JAWA BARAT', 'Bogor', '2024-11-24 18:20:00', '2024-12-27 05:23:05'),
(172, 'Maret', 32522.65, 2024, 'JAWA BARAT', 'Bogor', '2024-11-24 18:20:00', '2024-12-27 05:23:05'),
(173, 'April', 37255.38, 2024, 'JAWA BARAT', 'Bogor', '2024-11-24 18:20:00', '2024-12-27 05:23:05'),
(174, 'Mei', 19608.78, 2024, 'JAWA BARAT', 'Bogor', '2024-11-24 18:20:01', '2024-12-27 05:23:05'),
(175, 'Juni', 13511.83, 2024, 'JAWA BARAT', 'Bogor', '2024-11-24 18:20:01', '2024-12-27 05:23:05'),
(176, 'Juli', 12569.73, 2024, 'JAWA BARAT', 'Bogor', '2024-11-24 18:20:01', '2024-12-27 05:23:05'),
(177, 'Agustus', 24208.95, 2024, 'JAWA BARAT', 'Bogor', '2024-11-24 18:20:01', '2024-12-27 05:23:05'),
(178, 'September', 15950.87, 2024, 'JAWA BARAT', 'Bogor', '2024-11-24 18:20:01', '2024-12-27 05:23:05'),
(179, 'Oktober', 13908.39, 2024, 'JAWA BARAT', 'Bogor', '2024-11-24 18:20:02', '2024-12-27 05:23:05'),
(180, 'November', 13345.39, 2024, 'JAWA BARAT', 'Bogor', '2024-11-24 18:20:02', '2024-12-27 05:23:05'),
(181, 'Desember', 12355.20, 2024, 'JAWA BARAT', 'Bogor', '2024-11-24 18:20:02', '2024-12-27 05:23:05'),
(182, 'Yearly Average', 19123.11, 2024, 'JAWA BARAT', 'Bogor', '2024-11-24 18:20:02', '2024-12-27 05:23:05'),
(183, 'Januari', 7551.63, 2024, 'JAWA BARAT', 'Cirebon', '2024-11-24 18:20:07', '2024-12-27 05:23:05'),
(184, 'Februari', 25677.29, 2024, 'JAWA BARAT', 'Cirebon', '2024-11-24 18:20:08', '2024-12-27 05:23:05'),
(185, 'Maret', 33555.77, 2024, 'JAWA BARAT', 'Cirebon', '2024-11-24 18:20:08', '2024-12-27 05:23:05'),
(186, 'April', 37458.56, 2024, 'JAWA BARAT', 'Cirebon', '2024-11-24 18:20:08', '2024-12-27 05:23:05'),
(187, 'Mei', 19034.55, 2024, 'JAWA BARAT', 'Cirebon', '2024-11-24 18:20:08', '2024-12-27 05:23:05'),
(188, 'Juni', 13560.46, 2024, 'JAWA BARAT', 'Cirebon', '2024-11-24 18:20:08', '2024-12-27 05:23:05'),
(189, 'Juli', 12462.64, 2024, 'JAWA BARAT', 'Cirebon', '2024-11-24 18:20:09', '2024-12-27 05:23:05'),
(190, 'Agustus', 12778.43, 2024, 'JAWA BARAT', 'Cirebon', '2024-11-24 18:20:09', '2024-12-27 05:23:05'),
(191, 'September', 14357.26, 2024, 'JAWA BARAT', 'Cirebon', '2024-11-24 18:20:09', '2024-12-27 05:23:05'),
(192, 'Oktober', 13602.72, 2024, 'JAWA BARAT', 'Cirebon', '2024-11-24 18:20:09', '2024-12-27 05:23:05'),
(193, 'November', 27617.24, 2024, 'JAWA BARAT', 'Cirebon', '2024-11-24 18:20:09', '2024-12-27 05:23:05'),
(194, 'Desember', 16752.63, 2024, 'JAWA BARAT', 'Cirebon', '2024-11-24 18:20:10', '2024-12-27 05:23:05'),
(195, 'Yearly Average', 19534.10, 2024, 'JAWA BARAT', 'Cirebon', '2024-11-24 18:20:10', '2024-12-27 05:23:05'),
(196, 'Januari', 7717.01, 2024, 'JAWA TENGAH', 'Magelang', '2024-11-24 18:20:14', '2024-12-27 05:23:05'),
(197, 'Februari', 26092.62, 2024, 'JAWA TENGAH', 'Magelang', '2024-11-24 18:20:14', '2024-12-27 05:23:05'),
(198, 'Maret', 33955.78, 2024, 'JAWA TENGAH', 'Magelang', '2024-11-24 18:20:14', '2024-12-27 05:23:05'),
(199, 'April', 38382.05, 2024, 'JAWA TENGAH', 'Magelang', '2024-11-24 18:20:15', '2024-12-27 05:23:05'),
(200, 'Mei', 18651.64, 2024, 'JAWA TENGAH', 'Magelang', '2024-11-24 18:20:15', '2024-12-27 05:23:05'),
(201, 'Juni', 12579.78, 2024, 'JAWA TENGAH', 'Magelang', '2024-11-24 18:20:15', '2024-12-27 05:23:05'),
(202, 'Juli', 14201.84, 2024, 'JAWA TENGAH', 'Magelang', '2024-11-24 18:20:15', '2024-12-27 05:23:05'),
(203, 'Agustus', 12191.57, 2024, 'JAWA TENGAH', 'Magelang', '2024-11-24 18:20:15', '2024-12-27 05:23:05'),
(204, 'September', 14003.49, 2024, 'JAWA TENGAH', 'Magelang', '2024-11-24 18:20:16', '2024-12-27 05:23:05'),
(205, 'Oktober', 13753.36, 2024, 'JAWA TENGAH', 'Magelang', '2024-11-24 18:20:16', '2024-12-27 05:23:05'),
(206, 'November', 13243.91, 2024, 'JAWA TENGAH', 'Magelang', '2024-11-24 18:20:16', '2024-12-27 05:23:05'),
(207, 'Desember', 12323.66, 2024, 'JAWA TENGAH', 'Magelang', '2024-11-24 18:20:16', '2024-12-27 05:23:05'),
(208, 'Yearly Average', 18091.39, 2024, 'JAWA TENGAH', 'Magelang', '2024-11-24 18:20:16', '2024-12-27 05:23:05'),
(209, 'Januari', 7371.31, 2024, 'JAWA TENGAH', 'Pekalongan', '2024-11-24 18:20:21', '2024-12-27 05:23:05'),
(210, 'Februari', 26269.68, 2024, 'JAWA TENGAH', 'Pekalongan', '2024-11-24 18:20:21', '2024-12-27 05:23:05'),
(211, 'Maret', 32760.08, 2024, 'JAWA TENGAH', 'Pekalongan', '2024-11-24 18:20:21', '2024-12-27 05:23:05'),
(212, 'April', 37691.55, 2024, 'JAWA TENGAH', 'Pekalongan', '2024-11-24 18:20:21', '2024-12-27 05:23:05'),
(213, 'Mei', 18244.08, 2024, 'JAWA TENGAH', 'Pekalongan', '2024-11-24 18:20:21', '2024-12-27 05:23:05'),
(214, 'Juni', 12944.70, 2024, 'JAWA TENGAH', 'Pekalongan', '2024-11-24 18:20:22', '2024-12-27 05:23:05'),
(215, 'Juli', 13109.71, 2024, 'JAWA TENGAH', 'Pekalongan', '2024-11-24 18:20:22', '2024-12-27 05:23:05'),
(216, 'Agustus', 12650.69, 2024, 'JAWA TENGAH', 'Pekalongan', '2024-11-24 18:20:22', '2024-12-27 05:23:05'),
(217, 'September', 13557.61, 2024, 'JAWA TENGAH', 'Pekalongan', '2024-11-24 18:20:22', '2024-12-27 05:23:05'),
(218, 'Oktober', 13265.29, 2024, 'JAWA TENGAH', 'Pekalongan', '2024-11-24 18:20:22', '2024-12-27 05:23:05'),
(219, 'November', 14110.23, 2024, 'JAWA TENGAH', 'Pekalongan', '2024-11-24 18:20:23', '2024-12-27 05:23:05'),
(220, 'Desember', 12523.57, 2024, 'JAWA TENGAH', 'Pekalongan', '2024-11-24 18:20:23', '2024-12-27 05:23:05'),
(221, 'Yearly Average', 17874.88, 2024, 'JAWA TENGAH', 'Pekalongan', '2024-11-24 18:20:23', '2024-12-27 05:23:05'),
(222, 'Januari', 7789.60, 2024, 'JAWA TENGAH', 'Boyolali', '2024-11-24 18:20:27', '2024-12-27 05:23:05'),
(223, 'Februari', 25960.60, 2024, 'JAWA TENGAH', 'Boyolali', '2024-11-24 18:20:27', '2024-12-27 05:23:05'),
(224, 'Maret', 31706.72, 2024, 'JAWA TENGAH', 'Boyolali', '2024-11-24 18:20:27', '2024-12-27 05:23:05'),
(225, 'April', 36442.26, 2024, 'JAWA TENGAH', 'Boyolali', '2024-11-24 18:20:28', '2024-12-27 05:23:05'),
(226, 'Mei', 17963.33, 2024, 'JAWA TENGAH', 'Boyolali', '2024-11-24 18:20:28', '2024-12-27 05:23:05'),
(227, 'Juni', 12544.35, 2024, 'JAWA TENGAH', 'Boyolali', '2024-11-24 18:20:28', '2024-12-27 05:23:05'),
(228, 'Juli', 11990.30, 2024, 'JAWA TENGAH', 'Boyolali', '2024-11-24 18:20:28', '2024-12-27 05:23:05'),
(229, 'Agustus', 12342.48, 2024, 'JAWA TENGAH', 'Boyolali', '2024-11-24 18:20:28', '2024-12-27 05:23:05'),
(230, 'September', 13555.25, 2024, 'JAWA TENGAH', 'Boyolali', '2024-11-24 18:20:29', '2024-12-27 05:23:05'),
(231, 'Oktober', 13012.41, 2024, 'JAWA TENGAH', 'Boyolali', '2024-11-24 18:20:29', '2024-12-27 05:23:05'),
(232, 'November', 13291.47, 2024, 'JAWA TENGAH', 'Boyolali', '2024-11-24 18:20:29', '2024-12-27 05:23:05'),
(233, 'Desember', 11374.84, 2024, 'JAWA TENGAH', 'Boyolali', '2024-11-24 18:20:29', '2024-12-27 05:23:05'),
(234, 'Yearly Average', 17331.13, 2024, 'JAWA TENGAH', 'Boyolali', '2024-11-24 18:20:29', '2024-12-27 05:23:05'),
(235, 'Januari', 7102.12, 2024, 'JAWA TENGAH', 'Cilacap', '2024-11-24 18:20:34', '2024-12-27 05:23:05'),
(236, 'Februari', 26023.93, 2024, 'JAWA TENGAH', 'Cilacap', '2024-11-24 18:20:34', '2024-12-27 05:23:05'),
(237, 'Maret', 31124.38, 2024, 'JAWA TENGAH', 'Cilacap', '2024-11-24 18:20:34', '2024-12-27 05:23:05'),
(238, 'April', 36957.85, 2024, 'JAWA TENGAH', 'Cilacap', '2024-11-24 18:20:34', '2024-12-27 05:23:05'),
(239, 'Mei', 18471.45, 2024, 'JAWA TENGAH', 'Cilacap', '2024-11-24 18:20:34', '2024-12-27 05:23:05'),
(240, 'Juni', 13127.54, 2024, 'JAWA TENGAH', 'Cilacap', '2024-11-24 18:20:35', '2024-12-27 05:23:05'),
(241, 'Juli', 12231.63, 2024, 'JAWA TENGAH', 'Cilacap', '2024-11-24 18:20:35', '2024-12-27 05:23:05'),
(242, 'Agustus', 11834.57, 2024, 'JAWA TENGAH', 'Cilacap', '2024-11-24 18:20:35', '2024-12-27 05:23:05'),
(243, 'September', 12505.81, 2024, 'JAWA TENGAH', 'Cilacap', '2024-11-24 18:20:35', '2024-12-27 05:23:05'),
(244, 'Oktober', 13371.63, 2024, 'JAWA TENGAH', 'Cilacap', '2024-11-24 18:20:35', '2024-12-27 05:23:05'),
(245, 'November', 13070.46, 2024, 'JAWA TENGAH', 'Cilacap', '2024-11-24 18:20:36', '2024-12-27 05:23:05'),
(246, 'Desember', 12107.62, 2024, 'JAWA TENGAH', 'Cilacap', '2024-11-24 18:20:36', '2024-12-27 05:23:05'),
(247, 'Yearly Average', 17327.42, 2024, 'JAWA TENGAH', 'Cilacap', '2024-11-24 18:20:36', '2024-12-27 05:23:05'),
(248, 'Januari', 7686.51, 2024, 'JAWA TENGAH', 'Kebumen', '2024-11-24 18:20:40', '2024-12-27 05:23:05'),
(249, 'Februari', 24281.30, 2024, 'JAWA TENGAH', 'Kebumen', '2024-11-24 18:20:40', '2024-12-27 05:23:05'),
(250, 'Maret', 32368.96, 2024, 'JAWA TENGAH', 'Kebumen', '2024-11-24 18:20:41', '2024-12-27 05:23:05'),
(251, 'April', 34912.57, 2024, 'JAWA TENGAH', 'Kebumen', '2024-11-24 18:20:41', '2024-12-27 05:23:05'),
(252, 'Mei', 17909.97, 2024, 'JAWA TENGAH', 'Kebumen', '2024-11-24 18:20:41', '2024-12-27 05:23:05'),
(253, 'Juni', 13019.17, 2024, 'JAWA TENGAH', 'Kebumen', '2024-11-24 18:20:41', '2024-12-27 05:23:05'),
(254, 'Juli', 12817.30, 2024, 'JAWA TENGAH', 'Kebumen', '2024-11-24 18:20:41', '2024-12-27 05:23:05'),
(255, 'Agustus', 12754.47, 2024, 'JAWA TENGAH', 'Kebumen', '2024-11-24 18:20:42', '2024-12-27 05:23:05'),
(256, 'September', 13586.24, 2024, 'JAWA TENGAH', 'Kebumen', '2024-11-24 18:20:42', '2024-12-27 05:23:05'),
(257, 'Oktober', 12982.74, 2024, 'JAWA TENGAH', 'Kebumen', '2024-11-24 18:20:42', '2024-12-27 05:23:05'),
(258, 'November', 13993.83, 2024, 'JAWA TENGAH', 'Kebumen', '2024-11-24 18:20:42', '2024-12-27 05:23:05'),
(259, 'Desember', 12148.87, 2024, 'JAWA TENGAH', 'Kebumen', '2024-11-24 18:20:42', '2024-12-27 05:23:05'),
(260, 'Yearly Average', 17371.83, 2024, 'JAWA TENGAH', 'Kebumen', '2024-11-24 18:20:43', '2024-12-27 05:23:05'),
(261, 'Januari', 7992.42, 2024, 'JAWA TENGAH', 'KOTA SEMARANG', '2024-11-24 18:20:47', '2024-12-27 05:23:05'),
(262, 'Februari', 26866.48, 2024, 'JAWA TENGAH', 'KOTA SEMARANG', '2024-11-24 18:20:47', '2024-12-27 05:23:05'),
(263, 'Maret', 32358.17, 2024, 'JAWA TENGAH', 'KOTA SEMARANG', '2024-11-24 18:20:47', '2024-12-27 05:23:05'),
(264, 'April', 37123.18, 2024, 'JAWA TENGAH', 'KOTA SEMARANG', '2024-11-24 18:20:47', '2024-12-27 05:23:05'),
(265, 'Mei', 18992.91, 2024, 'JAWA TENGAH', 'KOTA SEMARANG', '2024-11-24 18:20:48', '2024-12-27 05:23:05'),
(266, 'Juni', 11898.50, 2024, 'JAWA TENGAH', 'KOTA SEMARANG', '2024-11-24 18:20:48', '2024-12-27 05:23:05'),
(267, 'Juli', 13555.87, 2024, 'JAWA TENGAH', 'KOTA SEMARANG', '2024-11-24 18:20:48', '2024-12-27 05:23:05'),
(268, 'Agustus', 13011.84, 2024, 'JAWA TENGAH', 'KOTA SEMARANG', '2024-11-24 18:20:48', '2024-12-27 05:23:05'),
(269, 'September', 13418.07, 2024, 'JAWA TENGAH', 'KOTA SEMARANG', '2024-11-24 18:20:48', '2024-12-27 05:23:05'),
(270, 'Oktober', 13468.17, 2024, 'JAWA TENGAH', 'KOTA SEMARANG', '2024-11-24 18:20:49', '2024-12-27 05:23:05'),
(271, 'November', 13374.28, 2024, 'JAWA TENGAH', 'KOTA SEMARANG', '2024-11-24 18:20:49', '2024-12-27 05:23:05'),
(272, 'Desember', 12396.34, 2024, 'JAWA TENGAH', 'KOTA SEMARANG', '2024-11-24 18:20:49', '2024-12-27 05:23:05'),
(273, 'Yearly Average', 17871.35, 2024, 'JAWA TENGAH', 'KOTA SEMARANG', '2024-11-24 18:20:49', '2024-12-27 05:23:05'),
(274, 'Januari', 7936.84, 2024, 'JAWA TIMUR', 'Malang', '2024-11-24 18:20:53', '2024-12-27 05:23:05'),
(275, 'Februari', 25451.63, 2024, 'JAWA TIMUR', 'Malang', '2024-11-24 18:20:53', '2024-12-27 05:23:05'),
(276, 'Maret', 32022.77, 2024, 'JAWA TIMUR', 'Malang', '2024-11-24 18:20:54', '2024-12-27 05:23:05'),
(277, 'April', 34877.21, 2024, 'JAWA TIMUR', 'Malang', '2024-11-24 18:20:54', '2024-12-27 05:23:05'),
(278, 'Mei', 18708.54, 2024, 'JAWA TIMUR', 'Malang', '2024-11-24 18:20:54', '2024-12-27 05:23:05'),
(279, 'Juni', 13578.98, 2024, 'JAWA TIMUR', 'Malang', '2024-11-24 18:20:54', '2024-12-27 05:23:05'),
(280, 'Juli', 13466.34, 2024, 'JAWA TIMUR', 'Malang', '2024-11-24 18:20:54', '2024-12-27 05:23:05'),
(281, 'Agustus', 12605.92, 2024, 'JAWA TIMUR', 'Malang', '2024-11-24 18:20:55', '2024-12-27 05:23:05'),
(282, 'September', 14166.99, 2024, 'JAWA TIMUR', 'Malang', '2024-11-24 18:20:55', '2024-12-27 05:23:05'),
(283, 'Oktober', 13012.83, 2024, 'JAWA TIMUR', 'Malang', '2024-11-24 18:20:55', '2024-12-27 05:23:05'),
(284, 'November', 13230.66, 2024, 'JAWA TIMUR', 'Malang', '2024-11-24 18:20:55', '2024-12-27 05:23:05'),
(285, 'Desember', 13284.71, 2024, 'JAWA TIMUR', 'Malang', '2024-11-24 18:20:55', '2024-12-27 05:23:05'),
(286, 'Yearly Average', 17695.28, 2024, 'JAWA TIMUR', 'Malang', '2024-11-24 18:20:56', '2024-12-27 05:23:05'),
(287, 'Januari', 7866.34, 2024, 'JAWA TIMUR', 'Blitar', '2024-11-24 18:21:01', '2024-12-27 05:23:05'),
(288, 'Februari', 25279.70, 2024, 'JAWA TIMUR', 'Blitar', '2024-11-24 18:21:02', '2024-12-27 05:23:05'),
(289, 'Maret', 31708.88, 2024, 'JAWA TIMUR', 'Blitar', '2024-11-24 18:21:02', '2024-12-27 05:23:05'),
(290, 'April', 37385.23, 2024, 'JAWA TIMUR', 'Blitar', '2024-11-24 18:21:02', '2024-12-27 05:23:05'),
(291, 'Mei', 18776.61, 2024, 'JAWA TIMUR', 'Blitar', '2024-11-24 18:21:02', '2024-12-27 05:23:05'),
(292, 'Juni', 11977.80, 2024, 'JAWA TIMUR', 'Blitar', '2024-11-24 18:21:02', '2024-12-27 05:23:05'),
(293, 'Juli', 13204.28, 2024, 'JAWA TIMUR', 'Blitar', '2024-11-24 18:21:03', '2024-12-27 05:23:05'),
(294, 'Agustus', 12387.44, 2024, 'JAWA TIMUR', 'Blitar', '2024-11-24 18:21:03', '2024-12-27 05:23:05'),
(295, 'September', 13474.77, 2024, 'JAWA TIMUR', 'Blitar', '2024-11-24 18:21:03', '2024-12-27 05:23:05'),
(296, 'Oktober', 13536.78, 2024, 'JAWA TIMUR', 'Blitar', '2024-11-24 18:21:03', '2024-12-27 05:23:05'),
(297, 'November', 13721.92, 2024, 'JAWA TIMUR', 'Blitar', '2024-11-24 18:21:03', '2024-12-27 05:23:05'),
(298, 'Desember', 13478.01, 2024, 'JAWA TIMUR', 'Blitar', '2024-11-24 18:21:04', '2024-12-27 05:23:05'),
(299, 'Yearly Average', 17733.15, 2024, 'JAWA TIMUR', 'Blitar', '2024-11-24 18:21:04', '2024-12-27 05:23:05'),
(300, 'Januari', 7589.52, 2024, 'JAWA TIMUR', 'Kediri', '2024-11-24 18:21:08', '2024-12-27 05:23:05'),
(301, 'Februari', 25167.18, 2024, 'JAWA TIMUR', 'Kediri', '2024-11-24 18:21:08', '2024-12-27 05:23:05'),
(302, 'Maret', 30852.61, 2024, 'JAWA TIMUR', 'Kediri', '2024-11-24 18:21:08', '2024-12-27 05:23:05'),
(303, 'April', 35199.35, 2024, 'JAWA TIMUR', 'Kediri', '2024-11-24 18:21:09', '2024-12-27 05:23:05'),
(304, 'Mei', 18204.19, 2024, 'JAWA TIMUR', 'Kediri', '2024-11-24 18:21:09', '2024-12-27 05:23:05'),
(305, 'Juni', 13301.00, 2024, 'JAWA TIMUR', 'Kediri', '2024-11-24 18:21:09', '2024-12-27 05:23:05'),
(306, 'Juli', 13389.82, 2024, 'JAWA TIMUR', 'Kediri', '2024-11-24 18:21:09', '2024-12-27 05:23:05'),
(307, 'Agustus', 12813.53, 2024, 'JAWA TIMUR', 'Kediri', '2024-11-24 18:21:09', '2024-12-27 05:23:05'),
(308, 'September', 13447.06, 2024, 'JAWA TIMUR', 'Kediri', '2024-11-24 18:21:10', '2024-12-27 05:23:05'),
(309, 'Oktober', 13917.62, 2024, 'JAWA TIMUR', 'Kediri', '2024-11-24 18:21:10', '2024-12-27 05:23:05'),
(310, 'November', 14000.69, 2024, 'JAWA TIMUR', 'Kediri', '2024-11-24 18:21:10', '2024-12-27 05:23:05'),
(311, 'Desember', 12261.44, 2024, 'JAWA TIMUR', 'Kediri', '2024-11-24 18:21:10', '2024-12-27 05:23:05'),
(312, 'Yearly Average', 17512.00, 2024, 'JAWA TIMUR', 'Kediri', '2024-11-24 18:21:10', '2024-12-27 05:23:05'),
(313, 'Januari', 6266.44, 2024, 'JAWA BARAT', 'subang', '2024-11-24 18:26:07', '2024-12-27 05:23:05'),
(314, 'Februari', 25854.89, 2024, 'JAWA BARAT', 'subang', '2024-11-24 18:26:07', '2024-12-27 05:23:05'),
(315, 'Maret', 30434.82, 2024, 'JAWA BARAT', 'subang', '2024-11-24 18:26:07', '2024-12-27 05:23:05'),
(316, 'April', 34960.71, 2024, 'JAWA BARAT', 'subang', '2024-11-24 18:26:07', '2024-12-27 05:23:05'),
(317, 'Mei', 19854.10, 2024, 'JAWA BARAT', 'subang', '2024-11-24 18:26:07', '2024-12-27 05:23:05'),
(318, 'Juni', 12646.81, 2024, 'JAWA BARAT', 'subang', '2024-11-24 18:26:08', '2024-12-27 05:23:05'),
(319, 'Juli', 12494.25, 2024, 'JAWA BARAT', 'subang', '2024-11-24 18:26:08', '2024-12-27 05:23:05'),
(320, 'Agustus', 12618.25, 2024, 'JAWA BARAT', 'subang', '2024-11-24 18:26:08', '2024-12-27 05:23:05'),
(321, 'September', 13472.89, 2024, 'JAWA BARAT', 'subang', '2024-11-24 18:26:08', '2024-12-27 05:23:05'),
(322, 'Oktober', 13081.92, 2024, 'JAWA BARAT', 'subang', '2024-11-24 18:26:08', '2024-12-27 05:23:05'),
(323, 'November', 14144.72, 2024, 'JAWA BARAT', 'subang', '2024-11-24 18:26:09', '2024-12-27 05:23:05'),
(324, 'Desember', 11866.56, 2024, 'JAWA BARAT', 'subang', '2024-11-24 18:26:09', '2024-12-27 05:23:05'),
(325, 'Yearly Average', 17308.03, 2024, 'JAWA BARAT', 'subang', '2024-11-24 18:26:09', '2024-12-27 05:23:05'),
(326, 'Januari', 8173.68, 2024, 'JAWA TIMUR', 'jember', '2024-11-24 18:26:55', '2024-12-27 05:23:05'),
(327, 'Februari', 24158.73, 2024, 'JAWA TIMUR', 'jember', '2024-11-24 18:26:55', '2024-12-27 05:23:05'),
(328, 'Maret', 31814.28, 2024, 'JAWA TIMUR', 'jember', '2024-11-24 18:26:55', '2024-12-27 05:23:05'),
(329, 'April', 35603.22, 2024, 'JAWA TIMUR', 'jember', '2024-11-24 18:26:55', '2024-12-27 05:23:05'),
(330, 'Mei', 19154.57, 2024, 'JAWA TIMUR', 'jember', '2024-11-24 18:26:55', '2024-12-27 05:23:05'),
(331, 'Juni', 12990.88, 2024, 'JAWA TIMUR', 'jember', '2024-11-24 18:26:56', '2024-12-27 05:23:05'),
(332, 'Juli', 12323.68, 2024, 'JAWA TIMUR', 'jember', '2024-11-24 18:26:56', '2024-12-27 05:23:05'),
(333, 'Agustus', 12864.74, 2024, 'JAWA TIMUR', 'jember', '2024-11-24 18:26:56', '2024-12-27 05:23:05'),
(334, 'September', 13607.99, 2024, 'JAWA TIMUR', 'jember', '2024-11-24 18:26:56', '2024-12-27 05:23:05'),
(335, 'Oktober', 12806.10, 2024, 'JAWA TIMUR', 'jember', '2024-11-24 18:26:56', '2024-12-27 05:23:05'),
(336, 'November', 14218.17, 2024, 'JAWA TIMUR', 'jember', '2024-11-24 18:26:56', '2024-12-27 05:23:05'),
(337, 'Desember', 12733.88, 2024, 'JAWA TIMUR', 'jember', '2024-11-24 18:26:57', '2024-12-27 05:23:05'),
(338, 'Yearly Average', 17537.49, 2024, 'JAWA TIMUR', 'jember', '2024-11-24 18:26:57', '2024-12-27 05:23:05'),
(339, 'Januari', 6461.98, 2024, 'JAWA TIMUR', 'tulungagung', '2024-11-24 18:27:01', '2024-12-27 05:23:05'),
(340, 'Februari', 27016.53, 2024, 'JAWA TIMUR', 'tulungagung', '2024-11-24 18:27:01', '2024-12-27 05:23:05'),
(341, 'Maret', 33943.07, 2024, 'JAWA TIMUR', 'tulungagung', '2024-11-24 18:27:02', '2024-12-27 05:23:05'),
(342, 'April', 32252.53, 2024, 'JAWA TIMUR', 'tulungagung', '2024-11-24 18:27:02', '2024-12-27 05:23:05'),
(343, 'Mei', 19773.85, 2024, 'JAWA TIMUR', 'tulungagung', '2024-11-24 18:27:02', '2024-12-27 05:23:05'),
(344, 'Juni', 13653.07, 2024, 'JAWA TIMUR', 'tulungagung', '2024-11-24 18:27:02', '2024-12-27 05:23:05'),
(345, 'Juli', 12838.05, 2024, 'JAWA TIMUR', 'tulungagung', '2024-11-24 18:27:02', '2024-12-27 05:23:05'),
(346, 'Agustus', 12886.29, 2024, 'JAWA TIMUR', 'tulungagung', '2024-11-24 18:27:02', '2024-12-27 05:23:05'),
(347, 'September', 13501.21, 2024, 'JAWA TIMUR', 'tulungagung', '2024-11-24 18:27:03', '2024-12-27 05:23:05'),
(348, 'Oktober', 13758.17, 2024, 'JAWA TIMUR', 'tulungagung', '2024-11-24 18:27:03', '2024-12-27 05:23:05'),
(349, 'November', 12472.92, 2024, 'JAWA TIMUR', 'tulungagung', '2024-11-24 18:27:03', '2024-12-27 05:23:05'),
(350, 'Desember', 13091.99, 2024, 'JAWA TIMUR', 'tulungagung', '2024-11-24 18:27:03', '2024-12-27 05:23:05'),
(351, 'Yearly Average', 17637.47, 2024, 'JAWA TIMUR', 'tulungagung', '2024-11-24 18:27:03', '2024-12-27 05:23:05');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int NOT NULL,
  `product_supplier_id` int NOT NULL,
  `product_title` varchar(255) NOT NULL,
  `product_description` text NOT NULL,
  `product_price` decimal(10,2) NOT NULL,
  `product_image` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_supplier_id`, `product_title`, `product_description`, `product_price`, `product_image`, `created_at`, `updated_at`) VALUES
(1, 1, 'Ikan Lele Segar', 'Ikan lele segar pilihan dengan kualitas terbaik dengan harga terjangkau.', 18000.00, 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733199348/fwf0pj9zesezxdmvhtyg.png', '2024-12-27 05:23:46', '2024-12-27 05:23:46'),
(2, 1, 'Ikan Lele Premium', 'Ikan lele premium dengan ukuran besar dan daging tebal.', 25000.00, 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733203241/uqasoylocou0jve1b9ye.png', '2024-12-27 05:23:46', '2024-12-27 05:23:46'),
(3, 1, 'Ikan Lele Organik', 'Ikan lele organik yang sehat dan lezat, tinggi protein dan cocok untuk berbagai olahan.', 30000.00, 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733203432/zymtnmmqbhgndebzjfw5.png', '2024-12-27 05:23:46', '2024-12-27 05:23:46'),
(4, 2, 'Ikan Lele Segar', 'Ikan lele segar langsung dari peternakan.', 17000.00, 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733235991/kiifyx9vki3ajfhdte9f.webp', '2024-12-27 05:23:46', '2024-12-27 05:23:46'),
(5, 2, 'Ikan Lele Jumbo', 'Ikan lele jumbo berkualitas tinggi.', 25000.00, 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733236045/wawq4o2thtqbnuwjjq3s.webp', '2024-12-27 05:23:46', '2024-12-27 05:23:46'),
(6, 2, 'Ikan Lele Organik', 'Ikan lele organik yang sehat dan lezat.', 30000.00, 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733236123/oi34pex21ebelowtv3hj.jpg', '2024-12-27 05:23:46', '2024-12-27 05:23:46'),
(7, 3, 'Ikan Lele Segar', 'Ikan lele segar langsung dari peternakan.', 19000.00, 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733236217/ynzglvbxgr7tpm1udlha.webp', '2024-12-27 05:23:46', '2024-12-27 05:23:46'),
(8, 3, 'Ikan Lele Khusus', 'Ikan lele khusus dengan kualitas premium.', 27000.00, 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733236241/zftckwkhn4eeitfwdbuw.jpg', '2024-12-27 05:23:46', '2024-12-27 05:23:46'),
(9, 3, 'Ikan Lele Jumbo', 'Ikan lele jumbo berkualitas tinggi.', 23000.00, 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733236374/e73hsjiodsfv4uqlaqkz.png', '2024-12-27 05:23:46', '2024-12-27 05:23:46');

-- --------------------------------------------------------

--
-- Table structure for table `siklus`
--

CREATE TABLE `siklus` (
  `id` int NOT NULL,
  `kolam_id` int NOT NULL,
  `lama_persiapan` int NOT NULL,
  `total_tebar` int NOT NULL,
  `metode_penebaran_benih` varchar(255) DEFAULT NULL,
  `umur_awal` int DEFAULT NULL,
  `batas_biomass_per_luas` decimal(10,2) DEFAULT NULL,
  `target_size` decimal(10,2) DEFAULT NULL,
  `target_sr` decimal(5,2) DEFAULT NULL,
  `target_fcr` decimal(5,2) DEFAULT NULL,
  `harga_pakan` decimal(10,2) DEFAULT NULL,
  `jumlah_anco` int DEFAULT NULL,
  `metode_prediksi_sr` varchar(255) DEFAULT NULL,
  `catatan` text,
  `tanggal` date NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ;

--
-- Dumping data for table `siklus`
--

INSERT INTO `siklus` (`id`, `kolam_id`, `lama_persiapan`, `total_tebar`, `metode_penebaran_benih`, `umur_awal`, `batas_biomass_per_luas`, `target_size`, `target_sr`, `target_fcr`, `harga_pakan`, `jumlah_anco`, `metode_prediksi_sr`, `catatan`, `tanggal`, `created_at`, `updated_at`) VALUES
(1, 1, 100, 10000, 'pola_penebaran', 14, 200.00, 80.00, 80.00, 8.00, 120000.00, 15, 'Kualitas_air', 'siklus 1', '2024-11-20', '2024-11-20 05:24:52', '2024-12-17 09:57:09'),
(2, 2, 80, 10000, 'pola_penebaran', 21, 400.00, 78.00, 80.00, 9.20, 10000.00, 10, 'kepadatan_umur', 'test 1', '2024-11-20', '2024-11-20 06:38:54', '2024-12-17 09:57:20');

-- --------------------------------------------------------

--
-- Table structure for table `suppliers`
--

CREATE TABLE `suppliers` (
  `id` int NOT NULL,
  `supplier` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `image` varchar(255) NOT NULL,
  `availability` varchar(50) DEFAULT 'Stok Tersedia',
  `whatsapp` varchar(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `suppliers`
--

INSERT INTO `suppliers` (`id`, `supplier`, `province`, `location`, `description`, `image`, `availability`, `whatsapp`, `email`, `created_at`, `updated_at`) VALUES
(1, 'Ahmad Siregar', 'Jawa Tengah', 'Boyolali', 'Ahmad Siregar adalah supplier terpercaya dengan reputasi tinggi sejak 2010.', 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733140173/sa0apwvuei7asndyp4ms.png', 'Stok Tersedia', '6285700120940', 'AhmadSrg@gmail.com', '2024-12-02 11:56:23', '2024-12-03 10:19:46'),
(2, 'Putri Jelqing', 'Jawa Barat', 'Cirebon', 'Putri Jelking telah berpengalaman dalam penyediaan ikan lele selama lebih dari 5 tahun.', 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733143331/qjzjam2zcqal9uxslssg.png', 'Stok Tersedia', '6289501877105', 'putriJelQing@gmail.com', '2024-12-02 12:57:15', '2024-12-03 10:20:02'),
(3, 'Farhan Gyat', 'Jawa Timur', 'Tulungagung', 'Farhan Gyat dikenal dengan produk berkualitas tinggi dan pengiriman yang tepat waktu.', 'https://res.cloudinary.com/dgl701jmj/image/upload/v1733144384/zisgebzit9njac5b5cgu.png', 'Stok Tersedia', '6289630488945', 'FarhanGyt@gmail.com', '2024-12-02 13:00:30', '2024-12-03 10:20:13');

-- --------------------------------------------------------

--
-- Table structure for table `supplier_reviews`
--

CREATE TABLE `supplier_reviews` (
  `id` int NOT NULL,
  `supplier_id` int NOT NULL,
  `reviewer_name` varchar(255) NOT NULL,
  `review_text` text NOT NULL,
  `rating` tinyint NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ;

--
-- Dumping data for table `supplier_reviews`
--

INSERT INTO `supplier_reviews` (`id`, `supplier_id`, `reviewer_name`, `review_text`, `rating`, `created_at`, `updated_at`) VALUES
(1, 1, 'alvin', 'produknya bagus', 5, '2024-12-04 10:58:52', '2024-12-04 11:40:56'),
(2, 1, 'kelvin', 'barang nya bagus Penjual nya ramah', 4, '2024-12-04 11:09:59', '2024-12-04 11:40:56'),
(3, 2, 'Budi Santoso', 'Kualitas lele sangat bagus, ukuran konsisten dan segar. Pengiriman tepat waktu.', 5, '2024-02-15 10:30:00', '2024-12-04 11:40:56'),
(4, 2, 'Andi Wijaya', 'Harga terjangkau dengan kualitas yang memuaskan. Akan membeli lagi.', 4, '2024-02-20 14:45:00', '2024-12-04 11:40:56'),
(5, 2, 'Siti Rahayu', 'Pelayanan customer service luar biasa. Membantu saya memilih lele terbaik.', 5, '2024-03-01 09:15:00', '2024-12-04 11:40:56'),
(6, 2, 'Agus Pranoto', 'Kondisi lele sedikit tidak konsisten. Ada beberapa ekor yang terlihat lebih kecil.', 4, '2024-03-10 11:20:00', '2024-12-04 11:40:56'),
(7, 2, 'Dian Kurniawan', 'Pengiriman cepat dan aman. Lele dalam kondisi prima.', 5, '2024-03-20 16:30:00', '2024-12-04 11:40:56'),
(8, 3, 'Rini Handayani', 'Sangat puas dengan kualitas lele dari supplier ini. Segar dan bermutu tinggi.', 5, '2024-02-10 13:40:00', '2024-12-04 11:40:56'),
(9, 3, 'Joko Susilo', 'Harga sedikit mahal, tapi kualitas sebanding dengan yang ditawarkan.', 4, '2024-02-25 08:55:00', '2024-12-04 11:40:56'),
(10, 3, 'Nurul Fatimah', 'Pengiriman lambat, tapi lele masih dalam kondisi baik.', 4, '2024-03-05 15:10:00', '2024-12-04 11:40:56'),
(11, 3, 'Bambang Purnomo', 'Pelayanan ramah dan profesional. Akan merekomendasikan ke rekan bisnis.', 5, '2024-03-15 10:05:00', '2024-12-04 11:40:56'),
(12, 3, 'Retno Wulandari', 'Konsisten dalam kualitas. Sudah berlangganan selama beberapa bulan.', 5, '2024-03-25 17:20:00', '2024-12-04 11:40:56'),
(13, 1, 'Budi Santoso', 'Kualitas lele sangat bagus, ukuran konsisten dan segar. Pengiriman tepat waktu.', 5, '2024-02-15 10:30:00', '2024-12-04 11:40:56'),
(14, 1, 'Andi Wijaya', 'Harga terjangkau dengan kualitas yang memuaskan. Akan membeli lagi.', 4, '2024-02-20 14:45:00', '2024-12-04 11:40:56'),
(15, 1, 'Jerry', 'Produk nya berkualitas dan penjualnya ramah', 5, '2024-12-04 11:44:57', '2024-12-04 11:44:57');

-- --------------------------------------------------------

--
-- Table structure for table `tagihan`
--

CREATE TABLE `tagihan` (
  `id` int NOT NULL,
  `invoice_number` int NOT NULL,
  `due_date` date NOT NULL,
  `amount` int NOT NULL,
  `total` int NOT NULL,
  `user_id` int NOT NULL,
  `paket_id` int NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tagihan`
--

INSERT INTO `tagihan` (`id`, `invoice_number`, `due_date`, `amount`, `total`, `user_id`, `paket_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, '2024-12-08', 50000, 50000, 1, 1, 0, '2024-12-02 14:06:02', '2024-12-14 08:37:07'),
(2, 2, '2024-12-02', 50000, 50000, 1, 1, 1, '2024-12-02 14:06:22', '2024-12-02 14:06:22'),
(3, 3, '2024-12-11', 240000, 240000, 3, 2, 0, '2024-12-11 21:15:50', '2024-12-11 21:15:50'),
(4, 4, '2024-12-11', 500000, 500000, 3, 3, 1, '2024-12-11 21:16:24', '2024-12-11 21:16:24');

-- --------------------------------------------------------

--
-- Table structure for table `tambak`
--

CREATE TABLE `tambak` (
  `id` int NOT NULL,
  `nama` varchar(255) NOT NULL,
  `negara` varchar(100) NOT NULL,
  `provinsi` varchar(100) NOT NULL,
  `kabupaten` varchar(100) NOT NULL,
  `alamat` text NOT NULL,
  `jumlah_kolam` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tambak`
--

INSERT INTO `tambak` (`id`, `nama`, `negara`, `provinsi`, `kabupaten`, `alamat`, `jumlah_kolam`, `created_at`, `updated_at`, `user_id`) VALUES
(1, 'Lele Segar', 'Indonesia', 'Jawa Tengah', 'Boyolali', 'JL. THAMRIN NO. 83 L', 2, '2024-11-20 04:55:50', '2024-12-09 15:20:49', 1),
(5, 'air', 'Indonesia', 'Jawa Tengah', 'Subang', 'jl. boyolali', 1, '2024-12-18 15:21:52', '2024-12-18 15:21:52', 1),
(6, 'air', 'Indonesia', 'Jawa Tengah', 'Subang', 'jl. boyolali', 1, '2024-12-18 15:21:53', '2024-12-18 15:21:53', 1),
(7, 'air', 'Indonesia', 'Jawa Tengah', 'Subang', 'jl. boyolali', 1, '2024-12-18 15:21:53', '2024-12-18 15:21:53', 1),
(8, 'air', 'Indonesia', 'Jawa Timur', 'Blitar', 'jl. boyolali', 1, '2024-12-19 12:22:14', '2024-12-19 12:22:14', 1),
(9, 'Tambak Udang ', 'Indonesia', 'Jawa Barat', 'Malang', 'jl in aja dulu', 1, '2024-12-24 08:56:27', '2024-12-24 08:56:27', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `anco`
--
ALTER TABLE `anco`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_kolam` (`kolam_id`);

--
-- Indexes for table `berita`
--
ALTER TABLE `berita`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `catfish_production`
--
ALTER TABLE `catfish_production`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_messages`
--
ALTER TABLE `contact_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data_pakan`
--
ALTER TABLE `data_pakan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kolam_id` (`kolam_id`);

--
-- Indexes for table `data_panen`
--
ALTER TABLE `data_panen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kolam_id` (`kolam_id`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_favorite` (`buku_id`,`user_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `kematian`
--
ALTER TABLE `kematian`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kolam_id` (`kolam_id`);

--
-- Indexes for table `kolam`
--
ALTER TABLE `kolam`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tambak_id` (`tambak_id`);

--
-- Indexes for table `kualitas_air`
--
ALTER TABLE `kualitas_air`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tambak` (`tambak_id`);

--
-- Indexes for table `notifikasi`
--
ALTER TABLE `notifikasi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `paket`
--
ALTER TABLE `paket`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pemasukan`
--
ALTER TABLE `pemasukan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tambak_id` (`tambak_id`);

--
-- Indexes for table `pengeluaran`
--
ALTER TABLE `pengeluaran`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tambak_id` (`tambak_id`);

--
-- Indexes for table `pengguna`
--
ALTER TABLE `pengguna`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `penyakit`
--
ALTER TABLE `penyakit`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kolam_id` (`kolam_id`);

--
-- Indexes for table `penyakit_lele`
--
ALTER TABLE `penyakit_lele`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `perpustakaan`
--
ALTER TABLE `perpustakaan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `predictions`
--
ALTER TABLE `predictions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_prediction_lookup` (`province`,`city`,`prediction_year`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `product_supplier_id` (`product_supplier_id`);

--
-- Indexes for table `siklus`
--
ALTER TABLE `siklus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kolam_id` (`kolam_id`);

--
-- Indexes for table `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supplier_reviews`
--
ALTER TABLE `supplier_reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `supplier_id` (`supplier_id`);

--
-- Indexes for table `tagihan`
--
ALTER TABLE `tagihan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_id` (`user_id`),
  ADD KEY `fk_paket_id` (`paket_id`);

--
-- Indexes for table `tambak`
--
ALTER TABLE `tambak`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tambak_userr` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `anco`
--
ALTER TABLE `anco`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `berita`
--
ALTER TABLE `berita`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `catfish_production`
--
ALTER TABLE `catfish_production`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `contact_messages`
--
ALTER TABLE `contact_messages`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `data_pakan`
--
ALTER TABLE `data_pakan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `data_panen`
--
ALTER TABLE `data_panen`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `kematian`
--
ALTER TABLE `kematian`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `kolam`
--
ALTER TABLE `kolam`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `kualitas_air`
--
ALTER TABLE `kualitas_air`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `notifikasi`
--
ALTER TABLE `notifikasi`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `paket`
--
ALTER TABLE `paket`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pemasukan`
--
ALTER TABLE `pemasukan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `pengeluaran`
--
ALTER TABLE `pengeluaran`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `pengguna`
--
ALTER TABLE `pengguna`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `penyakit`
--
ALTER TABLE `penyakit`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `penyakit_lele`
--
ALTER TABLE `penyakit_lele`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `perpustakaan`
--
ALTER TABLE `perpustakaan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `predictions`
--
ALTER TABLE `predictions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=352;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `siklus`
--
ALTER TABLE `siklus`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `supplier_reviews`
--
ALTER TABLE `supplier_reviews`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tagihan`
--
ALTER TABLE `tagihan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tambak`
--
ALTER TABLE `tambak`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `anco`
--
ALTER TABLE `anco`
  ADD CONSTRAINT `fk_kolam` FOREIGN KEY (`kolam_id`) REFERENCES `kolam` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `data_pakan`
--
ALTER TABLE `data_pakan`
  ADD CONSTRAINT `data_pakan_ibfk_1` FOREIGN KEY (`kolam_id`) REFERENCES `kolam` (`id`);

--
-- Constraints for table `data_panen`
--
ALTER TABLE `data_panen`
  ADD CONSTRAINT `data_panen_ibfk_1` FOREIGN KEY (`kolam_id`) REFERENCES `kolam` (`id`);

--
-- Constraints for table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `favorites_ibfk_1` FOREIGN KEY (`buku_id`) REFERENCES `perpustakaan` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `favorites_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `pengguna` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `kematian`
--
ALTER TABLE `kematian`
  ADD CONSTRAINT `kematian_ibfk_1` FOREIGN KEY (`kolam_id`) REFERENCES `kolam` (`id`);

--
-- Constraints for table `kolam`
--
ALTER TABLE `kolam`
  ADD CONSTRAINT `kolam_ibfk_1` FOREIGN KEY (`tambak_id`) REFERENCES `tambak` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `kualitas_air`
--
ALTER TABLE `kualitas_air`
  ADD CONSTRAINT `fk_tambak` FOREIGN KEY (`tambak_id`) REFERENCES `tambak` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pemasukan`
--
ALTER TABLE `pemasukan`
  ADD CONSTRAINT `pemasukan_ibfk_1` FOREIGN KEY (`tambak_id`) REFERENCES `tambak` (`id`);

--
-- Constraints for table `pengeluaran`
--
ALTER TABLE `pengeluaran`
  ADD CONSTRAINT `pengeluaran_ibfk_1` FOREIGN KEY (`tambak_id`) REFERENCES `tambak` (`id`);

--
-- Constraints for table `penyakit`
--
ALTER TABLE `penyakit`
  ADD CONSTRAINT `penyakit_ibfk_1` FOREIGN KEY (`kolam_id`) REFERENCES `kolam` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`product_supplier_id`) REFERENCES `suppliers` (`id`);

--
-- Constraints for table `siklus`
--
ALTER TABLE `siklus`
  ADD CONSTRAINT `siklus_ibfk_1` FOREIGN KEY (`kolam_id`) REFERENCES `kolam` (`id`);

--
-- Constraints for table `supplier_reviews`
--
ALTER TABLE `supplier_reviews`
  ADD CONSTRAINT `supplier_reviews_ibfk_1` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `tagihan`
--
ALTER TABLE `tagihan`
  ADD CONSTRAINT `fk_paket_id` FOREIGN KEY (`paket_id`) REFERENCES `paket` (`id`),
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `pengguna` (`id`);

--
-- Constraints for table `tambak`
--
ALTER TABLE `tambak`
  ADD CONSTRAINT `fk_tambak_userr` FOREIGN KEY (`user_id`) REFERENCES `pengguna` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
