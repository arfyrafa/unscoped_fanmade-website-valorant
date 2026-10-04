// image: nama file di src/assets/maps/ tanpa .avif

export interface MapIntel {
  location: string;
  sites: string;
  feature: string;
  callouts: string[];
  recommendedAgents: { name: string; slug: string; role: string }[];
  tacticalTip: string;
}

export interface GameMap {
  name: string;
  image: string;
  description: string;
  intel: MapIntel;
}

export const maps: GameMap[] = [
  {
    name: "Ascent",
    image: "ascent",
    description: "Sebuah tempat bermain terbuka untuk perang kecil memperebutkan posisi dan baku tembak membelah kedua lokasi di Ascent. Tiap lokasi bisa diperkuat dengan pintu bom yang tak bisa dibalikkan; setelah terpasang, kamu harus menghancurkannya atau mencari jalan lain. Serahkan teritori sesedikit mungkin.",
    intel: {
      location: "Venesia, Italia",
      sites: "2 Sites (A, B)",
      feature: "Pintu Baja Mekanis & Kontrol Mid Terbuka",
      callouts: ["Mid Courtyard", "A Rafters (Heaven)", "B Market", "A Tree", "B Main"],
      recommendedAgents: [
        { name: "Sova", slug: "sova", role: "Initiator" },
        { name: "Killjoy", slug: "killjoy", role: "Sentinel" },
        { name: "Omen", slug: "omen", role: "Controller" },
        { name: "Jett", slug: "jett", role: "Duelist" },
      ],
      tacticalTip: "Mengamankan kontrol Mid Courtyard sangat krusial; tim yang menguasai Mid dapat melakukan rotasi cepat dan mengepung defender dari arah Market atau Tree.",
    },
  },
  {
    name: "Bind",
    image: "bind",
    description: "Map dengan dua site tanpa jalur Mid tradisional. Dua portal teleporter satu arah menjadi kunci mobilitas dan rotasi kilat antar site bagi penyerang maupun pertahanan.",
    intel: {
      location: "Rabat, Maroko",
      sites: "2 Sites (A, B)",
      feature: "Teleporter Satu Arah & Tanpa Jalur Mid",
      callouts: ["A Short", "A Showers (Bath)", "B Hookah", "B Long", "Teleporter A/B"],
      recommendedAgents: [
        { name: "Raze", slug: "raze", role: "Duelist" },
        { name: "Brimstone", slug: "brimstone", role: "Controller" },
        { name: "Skye", slug: "skye", role: "Initiator" },
        { name: "Cypher", slug: "cypher", role: "Sentinel" },
      ],
      tacticalTip: "Manfaatkan teleporter tidak hanya untuk rotasi pemain, tapi juga melempar proyektil (Boom Bot Raze, Recon Sova) untuk memancing dan mengacaukan crosshair lawan.",
    },
  },
  {
    name: "Haven",
    image: "haven",
    description: "Memiliki tiga site (A, B, C) dan banyak jalur sudut, memberi tantangan besar bagi tim pertahanan untuk mengelola resource dan rotasi dengan presisi.",
    intel: {
      location: "Thimphu, Bhutan",
      sites: "3 Sites (A, B, C)",
      feature: "3 Spike Plant Sites & Area Garage Tengah",
      callouts: ["A Long", "A Sewers", "B Site", "C Long", "Garage (C Short)"],
      recommendedAgents: [
        { name: "Breach", slug: "breach", role: "Initiator" },
        { name: "Sova", slug: "sova", role: "Initiator" },
        { name: "Killjoy", slug: "killjoy", role: "Sentinel" },
        { name: "Omen", slug: "omen", role: "Controller" },
      ],
      tacticalTip: "Kontrol Garage adalah denyut nadi Haven. Merebut Garage membuka tekanan serentak ke arah B Site dan C Site sekaligus.",
    },
  },
  {
    name: "Icebox",
    image: "icebox",
    description: "Medan perang arktik milik Kingdom dengan kontainer bertumpuk dan elevasi vertikal ekstrem. Tali luncur horizontal memungkinkan perpindahan cepat di atas site.",
    intel: {
      location: "Pulau Bennett, Rusia",
      sites: "2 Sites (A, B)",
      feature: "Zipline Horizontal & Elevasi Kontainer Bertingkat",
      callouts: ["A Pipes", "A Belt", "B Yellow Container", "Kitchen", "Mid Boiler"],
      recommendedAgents: [
        { name: "Viper", slug: "viper", role: "Controller" },
        { name: "Sova", slug: "sova", role: "Initiator" },
        { name: "Sage", slug: "sage", role: "Sentinel" },
        { name: "Jett", slug: "jett", role: "Duelist" },
      ],
      tacticalTip: "Viper sangat wajib di Icebox karena Toxic Screen miliknya dapat membelah sudut pandang panjang di B Site atau A Site secara sempurna.",
    },
  },
  {
    name: "Pearl",
    image: "pearl",
    description: "Peta bawah laut pertama tanpa gimmick mekanis, menekankan baku tembak taktis murni dua site dengan dominasi pertempuran jarak jauh di sayap B.",
    intel: {
      location: "Lisbon, Portugal",
      sites: "2 Sites (A, B)",
      feature: "Kubah Geodesik Bawah Laut & Baku Tembak Murni",
      callouts: ["B Long", "A Art", "Mid Plaza", "A Main", "B Link"],
      recommendedAgents: [
        { name: "Astra", slug: "astra", role: "Controller" },
        { name: "Fade", slug: "fade", role: "Initiator" },
        { name: "Killjoy", slug: "killjoy", role: "Sentinel" },
        { name: "Jett", slug: "jett", role: "Duelist" },
      ],
      tacticalTip: "Area B Long sangat luas; tim penyerang butuh koordinasi smoke panjang dan sniper untuk mencegah defender mencuri first blood.",
    },
  },
  {
    name: "Split",
    image: "split",
    description: "Peta kota metropolitan yang memprioritaskan kontrol vertikal dan tali ascender. Siapa yang menguasai area surga (Heaven) akan memegang kendali penuh atas site.",
    intel: {
      location: "Tokyo, Jepang",
      sites: "2 Sites (A, B)",
      feature: "Tali Ascender Vertikal & Dua Lantai Surga (Heaven)",
      callouts: ["Mid Vents", "Mid Mail", "A Rafters (Heaven)", "B Heaven", "A Main"],
      recommendedAgents: [
        { name: "Raze", slug: "raze", role: "Duelist" },
        { name: "Omen", slug: "omen", role: "Controller" },
        { name: "Cypher", slug: "cypher", role: "Sentinel" },
        { name: "Skye", slug: "skye", role: "Initiator" },
      ],
      tacticalTip: "Jangan pernah meremehkan Mid. Penyerang yang menguasai Mid Vents dan Mid Mail bisa mengeksekusi kedua site dari dataran tinggi Heaven.",
    },
  },
  {
    name: "Lotus",
    image: "lotus",
    description: "Kuil kuno di India dengan 3 plant sites, pintu batu berputar yang mengeluarkan suara gemuruh, dan satu dinding batu rapuh yang bisa diruntuhkan.",
    intel: {
      location: "Western Ghats, India",
      sites: "3 Sites (A, B, C)",
      feature: "Pintu Batu Berputar & Tembok Rapuh (Breakable Wall)",
      callouts: ["A Tree", "A Rubble", "B Site", "C Mound", "Pintu Berputar A/C"],
      recommendedAgents: [
        { name: "Omen", slug: "omen", role: "Controller" },
        { name: "Fade", slug: "fade", role: "Initiator" },
        { name: "Killjoy", slug: "killjoy", role: "Sentinel" },
        { name: "Viper", slug: "viper", role: "Controller" },
      ],
      tacticalTip: "Pintu putar menghasilkan suara audio keras di seluruh peta saat dipicu; gunakan untuk berpura-pura menyerang (fake execution) ke site lain.",
    },
  },
  {
    name: "Fracture",
    image: "fracture",
    description: "Fasilitas riset rahasia berbentuk huruf 'H' yang terbelah dua. Penyerang memulai ronde dari dua sisi berlawanan dan dapat menjepit defender sekaligus.",
    intel: {
      location: "Santa Fe, New Mexico, AS",
      sites: "2 Sites (A, B)",
      feature: "Bentuk H Tembus Zipline & Spawn Penyerang Terpisah",
      callouts: ["A Hall", "A Dish", "B Arcade", "B Canteen", "Zipline Bawah"],
      recommendedAgents: [
        { name: "Breach", slug: "breach", role: "Initiator" },
        { name: "Brimstone", slug: "brimstone", role: "Controller" },
        { name: "Neon", slug: "neon", role: "Duelist" },
        { name: "Cypher", slug: "cypher", role: "Sentinel" },
      ],
      tacticalTip: "Breach adalah raja di Fracture karena bentuk koridor sempit yang ideal untuk stun Fault Line dan flash tembus dinding.",
    },
  },
  {
    name: "Sunset",
    image: "sunset",
    description: "Kawasan pinggiran kota Los Angeles dengan tata letak 3-lane klasik. Mengutamakan baku tembak taktis jarak dekat hingga menengah di sekitar truk makanan favorit.",
    intel: {
      location: "Los Angeles, California, AS",
      sites: "2 Sites (A, B)",
      feature: "Tata Letak 3-Lane Tradisional & Pintu Baja Pasar Mid",
      callouts: ["Mid Courtyard", "A Alley", "A Elbow", "B Market", "B Boba"],
      recommendedAgents: [
        { name: "Omen", slug: "omen", role: "Controller" },
        { name: "Breach", slug: "breach", role: "Initiator" },
        { name: "Cypher", slug: "cypher", role: "Sentinel" },
        { name: "Raze", slug: "raze", role: "Duelist" },
      ],
      tacticalTip: "Perebutan kontrol Mid Tiles menentukan tempo permainan; defender yang kehilangan Mid akan kesulitan merotasi pemain antara site A dan B.",
    },
  },
  {
    name: "Abyss",
    image: "abyss",
    description: "Peta pertama tanpa batas pinggir (boundary walls). Pemain bisa tergelincir jatuh ke jurang maut, namun memiliki jump pads dan jalur rahasia unik.",
    intel: {
      location: "Rogaland, Norwegia",
      sites: "2 Sites (A, B)",
      feature: "Jurang Tanpa Tepi (Death Drops) & Bantalan Lompat",
      callouts: ["A Danger", "A Bridge", "B Catwalk", "Mid Library", "Mid Bend"],
      recommendedAgents: [
        { name: "Omen", slug: "omen", role: "Controller" },
        { name: "Jett", slug: "jett", role: "Duelist" },
        { name: "Sova", slug: "sova", role: "Initiator" },
        { name: "Cypher", slug: "cypher", role: "Sentinel" },
      ],
      tacticalTip: "Hati-hati saat bermanuver di jembatan sempit; skill knockback seperti Blast Pack Raze atau Astra Gravity Well bisa menjatuhkan musuh ke dasar jurang seketika.",
    },
  },
  {
    name: "Breeze",
    image: "breeze",
    description: "Kepulauan tropis di Segitiga Bermuda dengan jarak pandang sangat luas. Pertempuran jarak jauh dan akurasi senjata sniper sangat mendominasi di sini.",
    intel: {
      location: "Segitiga Bermuda, Samudra Atlantik",
      sites: "2 Sites (A, B)",
      feature: "Jarak Tembak Ultra Luas & Pintu Geser Trapdoor",
      callouts: ["A Hall", "A Pyramids", "Mid Nest", "B Site", "Chute (Pintu Jebakan)"],
      recommendedAgents: [
        { name: "Viper", slug: "viper", role: "Controller" },
        { name: "Sova", slug: "sova", role: "Initiator" },
        { name: "Cypher", slug: "cypher", role: "Sentinel" },
        { name: "Jett", slug: "jett", role: "Duelist" },
      ],
      tacticalTip: "Senjata seperti Vandal, Guardian, dan Operator memiliki keunggulan mutlak dibanding SMG atau shotgun di arena terbuka Breeze.",
    },
  },
  {
    name: "Summit",
    image: "summit",
    description: "Pusat akademi pelatihan Radiant paling maju di Shaanxi. Dilengkapi tembok dinamis yang bisa diruntuhkan untuk mengubah rute tembak di tengah ronde.",
    intel: {
      location: "Shaanxi, Tiongkok",
      sites: "2 Sites (A, B)",
      feature: "Tembok Pelatihan Dinamis yang Dapat Diruntuhkan",
      callouts: ["A Gate", "B Terrace", "Mid Pagoda", "A Garden", "Training Yard"],
      recommendedAgents: [
        { name: "Sova", slug: "sova", role: "Initiator" },
        { name: "Fade", slug: "fade", role: "Initiator" },
        { name: "Omen", slug: "omen", role: "Controller" },
        { name: "Sage", slug: "sage", role: "Sentinel" },
      ],
      tacticalTip: "Tembok yang diruntuhkan membuka sudut pandang tak terduga ke site bomb; pastikan selalu ada utility flash saat menembusnya.",
    },
  },
  {
    name: "Corrode",
    image: "corrode",
    description: "Kota kastil Prancis yang diubah menjadi fasilitas penambangan Radianite. Lorong sempit dan mesin berat menciptakan pertahanan berlapis yang tangguh.",
    intel: {
      location: "Occitanie, Prancis",
      sites: "2 Sites (A, B)",
      feature: "Fasilitas Pengolah Radianite & Koridor Sempit",
      callouts: ["A Foundry", "B Smelter", "Mid Crane", "A Vault", "B Pipeline"],
      recommendedAgents: [
        { name: "Viper", slug: "viper", role: "Controller" },
        { name: "Breach", slug: "breach", role: "Initiator" },
        { name: "Killjoy", slug: "killjoy", role: "Sentinel" },
        { name: "Raze", slug: "raze", role: "Duelist" },
      ],
      tacticalTip: "Chokepoint yang sempit sangat rentan terhadap utility area-denial seperti molly dan granat; jangan menumpuk rekan tim di satu lorong.",
    },
  },
];
