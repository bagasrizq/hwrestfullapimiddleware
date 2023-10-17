# Homework Restfull API & Middleware
Kerjakan soal homework ini berdasarkan data SQL [berikut](https://github.com/fathy17/dokumen-pembanding-2/blob/master/movies-database.sql)
1. Buatlah RESTful API yang terdiri dari GET, POST, DELETE, dan PUT. Setelah itu buatlah 
endpoint untuk register user dan login user untuk implementasi authorization dan 
authentication. Pastikan yang hanya bisa mengakses API hanyalah user yang terdaftar.
2. Lakukan Pagination pada GET users dan GET movies dengan limit 10 user.
3. Buatlah dokumentasi API menggunakan swagger
4. Implementasikan Logging server pada aplikasi yang teman-teman buat

# Guide for JWS Token
1. Membuat file private.pem terlebih dahulu untuk signing token (Jika Windows maka run pada Git Bash)
```
openssl genpkey -algorithm RSA -out private.pem
```
2. Lalu untuk kedua menggunakan public.pem untuk memverifikasi token
```
openssl rsa -pubout -in private.pem -out public.pem
```
