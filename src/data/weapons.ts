// category dipakai untuk filter di halaman Gameplay. image: nama file di src/assets/weapons/ tanpa .avif

export const weaponCategories = ["Melee", "Sidearm", "SMG", "Shotgun", "Rifle", "Sniper", "Heavy"] as const;
export type WeaponCategory = (typeof weaponCategories)[number];

export interface WeaponDamage {
  head: number;
  body: number;
  leg: number;
}

export interface Weapon {
  name: string;
  category: WeaponCategory;
  image: string;
  description: string;
  cost: number;
  magazine: number;
  fireRate: number; // rounds/sec
  wallPen: "Low" | "Medium" | "High" | "None";
  damage: WeaponDamage;
  range: string;
  fireMode: string;
}

export const weapons: Weapon[] = [
  {
    name: "Pisau Taktis",
    category: "Melee",
    image: "pisau-taktis",
    description: "Alat serbaguna di jarak dekat untuk taktik utilitas, gank cepat, dan keputusan akhir saat duel sudah mendekati titik kritis.",
    cost: 0,
    magazine: 0,
    fireRate: 1.0,
    wallPen: "None",
    damage: { head: 75, body: 50, leg: 50 },
    range: "0 - 2m",
    fireMode: "Slash / Backstab (100+ dmg)"
  },
  {
    name: "Classic",
    category: "Sidearm",
    image: "classic",
    description: "Ringan dan serbaguna, senjata standar ini cocok untuk semua agen yang ingin bermain stabil dan efektif.",
    cost: 0,
    magazine: 12,
    fireRate: 6.75,
    wallPen: "Low",
    damage: { head: 78, body: 26, leg: 22 },
    range: "0 - 30m",
    fireMode: "Semi-Auto / Alt 3-Burst"
  },
  {
    name: "Shorty",
    category: "Sidearm",
    image: "shorty",
    description: "Kejutan di jarak dekat membuat lawan sulit membaca langkah masuk dan kontrol area di ruang sempit.",
    cost: 300,
    magazine: 2,
    fireRate: 3.33,
    wallPen: "Low",
    damage: { head: 36, body: 12, leg: 10 },
    range: "0 - 15m",
    fireMode: "Semi-Auto Double Barrel"
  },
  {
    name: "Frenzy",
    category: "Sidearm",
    image: "frenzy",
    description: "Senjata cepat dengan kemampuan tembakan cepat untuk mengejar agresi, cocok bagi pemain yang suka menutup jarak dengan intensitas tinggi.",
    cost: 450,
    magazine: 13,
    fireRate: 10.0,
    wallPen: "Low",
    damage: { head: 78, body: 26, leg: 22 },
    range: "0 - 20m",
    fireMode: "Full Auto"
  },
  {
    name: "Ghost",
    category: "Sidearm",
    image: "ghost",
    description: "Senjata yang tenang dan presisi, cocok untuk duel jarak menengah sambil menjaga mobility dan kontrol seluruh map.",
    cost: 500,
    magazine: 15,
    fireRate: 6.75,
    wallPen: "Medium",
    damage: { head: 105, body: 30, leg: 25 },
    range: "0 - 30m",
    fireMode: "Semi-Auto Silenced"
  },
  {
    name: "Sheriff",
    category: "Sidearm",
    image: "sheriff",
    description: "Desainnya kuat untuk duel satu lawan satu, memberi kontrol tinggi di jarak menengah dan keputusan cepat di ruang sempit.",
    cost: 800,
    magazine: 6,
    fireRate: 4.0,
    wallPen: "High",
    damage: { head: 159, body: 55, leg: 46 },
    range: "0 - 30m",
    fireMode: "Semi-Auto Revolver"
  },
  {
    name: "Bandit",
    category: "Sidearm",
    image: "bandit",
    description: "Sangat mematikan untuk jarak dekat, menangkan ronde dengan gaya dan presisi yang agresif.",
    cost: 600,
    magazine: 8,
    fireRate: 5.5,
    wallPen: "Medium",
    damage: { head: 115, body: 35, leg: 30 },
    range: "0 - 25m",
    fireMode: "Semi-Auto Heavy"
  },
  {
    name: "Stinger",
    category: "SMG",
    image: "stinger",
    description: "Senjata otomatis ringan yang memberi tempo cepat dan tekanan berkelanjutan, tepat untuk entry dan rotasi agresif.",
    cost: 1100,
    magazine: 20,
    fireRate: 16.0,
    wallPen: "Low",
    damage: { head: 67, body: 27, leg: 23 },
    range: "0 - 20m",
    fireMode: "Full Auto / Alt 4-Burst"
  },
  {
    name: "Spectre",
    category: "SMG",
    image: "spectre",
    description: "Senjata yang stabil di duel jarak menengah, membantu tim menjaga tekanan sambil tetap menjaga akurasi di pertarungan cepat.",
    cost: 1600,
    magazine: 30,
    fireRate: 13.33,
    wallPen: "Medium",
    damage: { head: 78, body: 26, leg: 22 },
    range: "0 - 20m",
    fireMode: "Full Auto Silenced"
  },
  {
    name: "Bucky",
    category: "Shotgun",
    image: "bucky",
    description: "Senjata berketepatan tinggi untuk duel dekat, sangat efektif saat kebutuhan utama adalah menutup ruang dan menekan lawan.",
    cost: 850,
    magazine: 5,
    fireRate: 1.1,
    wallPen: "Low",
    damage: { head: 44, body: 22, leg: 18 },
    range: "0 - 12m",
    fireMode: "Pump Action / Alt Airburst"
  },
  {
    name: "Judge",
    category: "Shotgun",
    image: "judge",
    description: "Shotgun berdaya hancur yang memberi keputusan cepat di ruang sempit dan tekanan langsung pada pengendali area.",
    cost: 1850,
    magazine: 7,
    fireRate: 3.5,
    wallPen: "Medium",
    damage: { head: 34, body: 17, leg: 14 },
    range: "0 - 15m",
    fireMode: "Automatic Shotgun"
  },
  {
    name: "Bulldog",
    category: "Rifle",
    image: "bulldog",
    description: "Mobilitas dan kontrol tembakan menjadikannya pilihan serbaguna untuk memaksa masuk atau menahan garis entry.",
    cost: 2050,
    magazine: 24,
    fireRate: 10.0,
    wallPen: "Medium",
    damage: { head: 115, body: 35, leg: 30 },
    range: "0 - 50m",
    fireMode: "Full Auto / ADS 3-Burst"
  },
  {
    name: "Guardian",
    category: "Rifle",
    image: "guardian",
    description: "Memberikan support fire yang konsisten di area menengah, cocok untuk menjaga jalur masuk saat tim menahan site.",
    cost: 2250,
    magazine: 12,
    fireRate: 5.25,
    wallPen: "High",
    damage: { head: 195, body: 65, leg: 48 },
    range: "0 - 50m",
    fireMode: "Semi-Auto High Precision"
  },
  {
    name: "Phantom",
    category: "Rifle",
    image: "phantom",
    description: "Kontrol recoil yang stabil dan akurasi serbaguna membuatnya favorit untuk duel yang membutuhkan konsistensi di banyak situasi.",
    cost: 2900,
    magazine: 30,
    fireRate: 11.0,
    wallPen: "Medium",
    damage: { head: 156, body: 39, leg: 33 },
    range: "0 - 50m",
    fireMode: "Full Auto Silenced"
  },
  {
    name: "Vandal",
    category: "Rifle",
    image: "vandal",
    description: "Senjata serbaguna dengan potensi menembus target dan menjaga tekanan di jarak menengah tanpa kehilangan akurasi.",
    cost: 2900,
    magazine: 25,
    fireRate: 9.75,
    wallPen: "Medium",
    damage: { head: 160, body: 40, leg: 34 },
    range: "0 - 50m",
    fireMode: "Full Auto One-Tap Lethal"
  },
  {
    name: "Marshal",
    category: "Sniper",
    image: "marshal",
    description: "Untuk momen presisi tinggi, senjata ini mengubah satu tembakan menjadi peluang saat posisi lawan sudah terbaca.",
    cost: 950,
    magazine: 5,
    fireRate: 1.5,
    wallPen: "Medium",
    damage: { head: 202, body: 101, leg: 85 },
    range: "0 - 50m+",
    fireMode: "Lever Action Sniper"
  },
  {
    name: "Outlaw",
    category: "Sniper",
    image: "outlaw",
    description: "Revolver senapan laras ganda yang kuat untuk duel presisi tinggi dengan damage semi-fatal di tembakan pertama.",
    cost: 2400,
    magazine: 2,
    fireRate: 2.75,
    wallPen: "High",
    damage: { head: 238, body: 140, leg: 119 },
    range: "0 - 50m+",
    fireMode: "Double Barrel Break-Action"
  },
  {
    name: "Operator",
    category: "Sniper",
    image: "operator",
    description: "Senjata paling eksklusif untuk duel panjang, menuntut tenang, kontrol, dan timing yang sempurna di jarak jauh.",
    cost: 4700,
    magazine: 5,
    fireRate: 0.75,
    wallPen: "High",
    damage: { head: 255, body: 150, leg: 120 },
    range: "0 - 50m+",
    fireMode: "Bolt Action Anti-Material"
  },
  {
    name: "Ares",
    category: "Heavy",
    image: "ares",
    description: "Mesin tembak yang kuat untuk tekanan area, cocok untuk menekan lane dan memaksa lawan bertahan dalam dudukan yang kurang nyaman.",
    cost: 1600,
    magazine: 50,
    fireRate: 13.0,
    wallPen: "High",
    damage: { head: 72, body: 30, leg: 25 },
    range: "0 - 30m",
    fireMode: "Full Auto Spool-Up"
  },
  {
    name: "Odin",
    category: "Heavy",
    image: "odin",
    description: "Senjata yang ideal untuk kontrol ruang dan tekanan besar, memberi kekuatan tembakan yang sulit dihadapi saat site sudah terjaga.",
    cost: 3200,
    magazine: 100,
    fireRate: 15.0,
    wallPen: "High",
    damage: { head: 95, body: 38, leg: 32 },
    range: "0 - 30m",
    fireMode: "Full Auto Rapid Spool-Up"
  }
];
