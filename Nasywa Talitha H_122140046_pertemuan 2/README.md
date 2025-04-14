Aplikasi Dashboard Jadwal Kuliah dan Organisasi

# Fungsi dan Fitur-Fitur
Aplikasi ini adalah aplikasi web sederhana berbasis JavaScript untuk membantu dalam mengatur jadwal kuliah dan kegiatan organisasi dalam satu tempat. Dibuat sebagai tugas praktikum JavaScript Next Gen.
Aplikasi ini memiliki fitur-fitur diantaranya:
✅ Tambah, edit, dan hapus jadwal kegiatan
✅ Warna berbeda untuk dua kegiatan: merak muda untuk kuliah, krem untuk organisasi
✅ Jadwal otomatis diurutkan berdasarkan hari Senin - Jumat
✅ Data disimpan di localStorage

# Dokumentasi Aplikasi
Berikut tampilan aplikasi dashboard jadwal yang dibuat.

![Tampilan Aplikasi](./dokumentasi.PNG)

# Daftar Fitur ES6+ yang Digunakan
| Fitur ES6+            | Contoh Penggunaan                                                             |
|-----------------------|-------------------------------------------------------------------------------|
| `let` dan `const`      | Digunakan untuk deklarasi variabel, seperti `const scheduleManager = new ScheduleManager();` |
| Arrow Functions        | Digunakan di berbagai tempat, seperti `const renderSchedules = () => { ... };` dan callback `.forEach()` |
| Template Literals      | Digunakan untuk menyisipkan variabel ke dalam HTML secara dinamis: `` `<span>${item.day}, ${item.time} - ${item.course} (${item.type})</span>` `` |
| Classes               | Digunakan untuk membungkus logika pengelolaan jadwal, seperti `class ScheduleManager { ... }` |
| Async/Await            | Digunakan di `editSchedule` dengan `await new Promise((resolve) => setTimeout(resolve, 200));` |
| Spread Operator        | Digunakan untuk menyalin array dan menghindari perubahan data asli, seperti `[...scheduleManager.getAll()]` |
| Array `.sort()`        | Digunakan untuk mengurutkan jadwal berdasarkan urutan hari dalam `dayOrder` |
