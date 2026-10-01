// image: nama file di src/assets/maps/ tanpa .avif

export interface GameMap { name: string; image: string; description: string }

export const maps: GameMap[] = [
  {
    "name": "Pearl",
    "image": "pearl",
    "description": "Peta ini punya dua site utama dengan rotasi yang cepat dan ruang duel yang terbuka. Tim penyerang bisa memaksa lewat mid atau sisi sayap, sementara defender harus menjaga kontrol tinggi agar tidak kebobolan tempo."
  },
  {
    "name": "Ascent",
    "image": "ascent",
    "description": "Sebuah tempat bermain terbuka untuk perang kecil memperebutkan posisi dan baku tembak membelah kedua lokasi di Ascent. Tiap lokasi bisa diperkuat dengan pintu bom yang tak bisa dibalikkan; setelah terpasang, kamu harus menghancurkannya atau mencari jalan lain. Serahkan teritori sesedikit mungkin"
  },
  {
    "name": "Icebox",
    "image": "icebox",
    "description": "Medan perangmu selanjutnya adalah lokasi penggalian rahasia milik Kingdom yang diselimuti oleh es arktik. Kedua lokasi pabrik yang terlindung oleh salju dan logam memerlukan kecakapan horizontal. Manfaatkan tali luncur gantung dan musuh tak akan bisa melihat kedatanganmu"
  },
  {
    "name": "Bind",
    "image": "bind",
    "description": "Map dengan dua site yang terhubung oleh satu choke point utama, menuntut keputusan cepat dan koordinasi tepat untuk membuka jalur."
  },
  {
    "name": "Haven",
    "image": "haven",
    "description": "Memiliki tiga site dan banyak jalur sudut, memberi ruang bagi tim yang ingin bertahan lewat penguasaan lane dan rotasi yang presisi."
  },
  {
    "name": "Split",
    "image": "split",
    "description": "Jalan vertikal, struktur tinggi, dan rotasi menengah membuat map ini menuntut kontrol yang bagus di dua sisi utama."
  },
  {
    "name": "Lotus",
    "image": "lotus",
    "description": "Map berbasis area dengan banyak jalur multi-level, memberi ruang untuk adaptasi cepat dan keputusan rotasi yang berani."
  },
  {
    "name": "Fracture",
    "image": "fracture",
    "description": "Map dengan titik akses ganda dan kontrol area yang rumit, ideal untuk tim yang bermain cepat dan bereaksi cepat."
  },
  {
    "name": "Abyss",
    "image": "abyss",
    "description": "Map yang menekankan rotasi, kontrol reroute, dan pengelolaan tempo di ruang terbuka yang cukup kompleks."
  },
  {
    "name": "Summit",
    "image": "summit",
    "description": "Masuki Summit: pusat akademi pelatihan Radiant paling maju di seluruh Cina. Maksimalkan potensi strategismu di map dengan tembok raksasa yang bisa dirubuhkan, yang mengubah layout battlefield selama satu ronde."
  },
  {
    "name": "Corrode",
    "image": "corrode",
    "description": "Kota kastil Prancis yang kini menjadi fasilitas penambangan radianite. Bertempurlah menggunakan mesin industri untuk menjebol pertahanan berlapis dalam peta tiga jalur tradisional ini."
  },
  {
    "name": "Sunset",
    "image": "sunset",
    "description": "Sebuah bencana di fasilitas Kingdom setempat berpotensi melanda seluruh kawasan di sekitar. Kunjungi truk makanan favoritmu, lalu bertarunglah ke seluruh penjuru kota di peta tiga jalur tradisional ini."
  },
  {
    "name": "Breeze",
    "image": "breeze",
    "description": "Telusuri reruntuhan bersejarah atau gua-gua tepi laut di nirwana tropis ini. Jangan lupa siapkan perlengkapan pelindung untuk saat kamu berada di ruang terbuka dan bertarung jarak jauh. Awasi terus sekitarmu agar kamu bisa bersantai di Breeze."
  }
];
