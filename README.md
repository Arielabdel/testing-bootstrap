Implementasi/integrasi bootstrap dalam HTML

Pemakaian CDN (online):
CSS : <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css”
rel="stylesheet">
JS  : <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

Pemakaian offline (download folder-file bootstrap):
Struktur project:
Nama_project/
│
├── HTML/
│   └── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── bootstrap/
│   ├── css/
│   │   └──  bootstrap.min.css (file css bootstrap kalian)
│   │
│   └── js/
│       └── bootstrap.bundle.min.js (file js bootstrap kalian)
│
└── assets/
    ├── images/
    └── fonts/

Pemakaian:
CSS (pasang di head, sebelum link untuk file css kalian):
  <link rel="stylesheet" href="/project/bootstrap/css/bootstrap.min.css">
JS (Pasang di body, sebelum link untuk file js kalian):
  <script src="/project/bootstrap/js/bootstrap.bundle.min.js"></script>
