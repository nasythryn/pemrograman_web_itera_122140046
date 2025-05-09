# Deskripsi Aplikasi
Aplikasi ini adalah aplikasi manajemen buku sederhana yang memungkinkan untuk menambahkan buku dengan status tertentu seperti buku yang dimiliki, buku yang ingin dibeli, atau buku yang sedang dibaca, kemudian dapat mengedit informasi buku yang telah ditambahkan sebelumnya, dan menghapus buku. Selain itu, aplikasi ini juga menampilkan statistik data jumlah buku sesuai status buku yang ditambahkan dan pencarian buku berdasarkan judul serta filtering buku berdasarkan statusnya. Aplikasi ini dibuat dengna React.

# Instalasi dan Running Code
1. Clone repository ini
   <pre> git clone https://github.com/nasythryn/pemrograman_web_itera_122140046.git
    cd NasywaTalitha_122140046_pertemuan3 npm install npm start </pre>
2. Install dependensi (pastikan sudah menginstall Node.js dan npm)
   <pre> npm install </pre>
3. Setelah berhasil terinstall, jalankan dengan perintah berikut
   <pre> npm start </pre>
4. Selanjutnya, project akan berjalan di browser anda di: `http://localhost:3000`.

# Tampilan Antarmuka

## Halaman Beranda
![Tampilan Homepage](./homepage.PNG)
Halaman beranda merupakan halaman utama dalam manajemen koleksi buku. Halaman ini menampilkan buku-buku yang ditambahkan. Di halaman inilah pengguna menambahkan koleksi bukunya, mengedit, dan memperbarui buku-bukunya.

## Halaman Statistik
![Tampilan Statistik](./statspage.PNG)
Halaman statistik ini menampilkan statistik jumlah buku yang ditambahkan berdasarkan statusnya. Terdapat 3 status yang ada di aplikasi ini, yaitu `Dimiliki`, `Sedang Dibaca`, dan `Ingin Dibeli`.

# Fitur React yang Digunakan
1. Functional component untuk membuat fungsi-fungsi yang digunakan dalam aplikasi.
2. PropTypes untuk melakukan validasi properti pada fungsi.
3. Hooks useState untuk mengelola state lokal dalam komponen fungsional aplikasi, useContext untuk mengakses nilai dari context api tertentu.
4. React Router Link untuk navigasi ke halaman lain.
