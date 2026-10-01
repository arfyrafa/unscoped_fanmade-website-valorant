// Data semua Agent. Tambah Agent baru = tambah satu objek di array ini.
// image: nama file di src/assets/agents/ tanpa .avif. Ikon ability otomatis: <image>-q/e/c/x.avif

export type Role = "Duelist" | "Initiator" | "Controller" | "Sentinel";
export interface Ability { key: "Q" | "E" | "C" | "X"; name: string; type: string; description: string }
export interface Agent { slug: string; name: string; role: Role; image: string; short: string; bio: string; abilities: Ability[] }

export const roles: Role[] = ["Duelist", "Initiator", "Controller", "Sentinel"];

export const agents: Agent[] = [
  {
    "slug": "waylay",
    "name": "Waylay",
    "role": "Duelist",
    "image": "waylay",
    "short": "Agent dengan gaya bermain agresif yang mengandalkan mobilitas tinggi untuk membuka ruang dan mengejar musuh.",
    "bio": "Waylay, agen Thailand yang berpijar prismatik, berubah menjadi cahaya saat ia melesat melintasi medan tempur. Ia menyerang targetnya melalui secercah cahaya dan langsung mengamankan diri dalam sekejap mata.",
    "abilities": [
      {
        "key": "Q",
        "name": "SATURATE",
        "type": "Ability",
        "description": "SEKETIKA melemparkan sekumpulan cahaya yang meledak saat menyentuh tanah. Cahaya lalu menerapkan Hinder ke pemain di sekitar, memperlambat gerakan dan senjata mereka secara drastis."
      },
      {
        "key": "E",
        "name": "LIGHTSPEED",
        "type": "Signature",
        "description": "GUNAKAN untuk bergerak secepat kilat. Tekan FIRE untuk dash ke depan dua kali. Tekan ALT FIRE untuk dash sekali. Hanya dash pertama yang bisa membawamu ke atas."
      },
      {
        "key": "C",
        "name": "RETRACT",
        "type": "Ability",
        "description": "SEKETIKA menciptakan suar cahaya di lantai. AKTIFKAN ULANG untuk kembali ke suarmu sebagai setitik cahaya murni. Kamu kebal saat bergerak."
      },
      {
        "key": "X",
        "name": "CONVERGENT PATHS",
        "type": "Ultimate",
        "description": "GUNAKAN untuk memfokuskan kekuatan prismatikmu. Tekan FIRE untuk menciptakan bayangan dirimu sendiri yang kemudian memancarkan cahaya. Setelah beberapa saat, kecepatanmu meningkat tajam dan cahaya meluas, menyebabkan pemain lain di area itu terkena Hinder."
      }
    ]
  },
  {
    "slug": "vyse",
    "name": "Vyse",
    "role": "Sentinel",
    "image": "vyse",
    "short": "Mengendalikan area dan membatasi pergerakan lawan untuk membantu tim mempertahankan posisi.",
    "bio": "Mastermind metalik Vyse mengeluarkan logam cair untuk mengisolasi, menjebak, dan melucuti senjata musuh. Dengan kelicikan dan manipulasi, dia memaksa semua yang menentangnya untuk takut pada battlefield.",
    "abilities": [
      {
        "key": "Q",
        "name": "SHEAR",
        "type": "Ability",
        "description": "GUNAKAN filamen dari logam cair. Tekan FIRE untuk menempatkan perangkap dinding tersembunyi. Saat musuh melintas, dinding yang tidak bisa hancur akan muncul dari dalam tanah di belakang mereka. Dinding ini bertahan selama beberapa saat sebelum menghilang."
      },
      {
        "key": "E",
        "name": "ARC ROSE",
        "type": "Signature",
        "description": "GUNAKAN Arc Rose. Targetkan permukaan dan tekan FIRE untuk menempatkan Arc Rose yang sudah disembunyikan, atau tekan ALT Fire untuk menempatkan Arc Rose melewatinya. GUNAKAN LAGI untuk membuat silau semua pemain yang melihatnya. Ability ini bisa diambil untuk DIKERAHKAN LAGI."
      },
      {
        "key": "C",
        "name": "RAZORVINE",
        "type": "Ability",
        "description": "GUNAKAN sarang dari logam cair. Tekan FIRE untuk meluncurkan. Saat mendarat, sarang menjadi tidak terlihat. Saat DIAKTIFKAN, ini akan menyebar menjadi sarang razorvine besar yang menerapkan utilitas slow dan damage pada semua pemain yang melewatinya."
      },
      {
        "key": "X",
        "name": "STEEL GARDEN",
        "type": "Ultimate",
        "description": "GUNAKAN semak belukar dari logam cair. Tekan FIRE untuk mengeluarkan logam yang menyembur dari Vyse sebagai semburan duri logam. Kemudian, JAMMING senjata utama musuh setelah windup singkat."
      }
    ]
  },
  {
    "slug": "viper",
    "name": "Viper",
    "role": "Controller",
    "image": "viper",
    "short": "Menggunakan racun dan dinding gas untuk mengontrol area serta memisahkan posisi lawan.",
    "bio": "Seorang Ahli Kimia dari Amerika, Viper, mengerahkan sejumlah perangkat kimia beracun untuk mengendalikan battlefield dan menghalangi pandangan musuh. Jika racun tak membunuh buruannya, permainan pikirannya pasti menghabisi mereka.",
    "abilities": [
      {
        "key": "Q",
        "name": "POISON CLOUD",
        "type": "Ability",
        "description": "EQUIP pemancar gas. FIRE untuk melempar pemancar yang terus ada sepanjang ronde. RE-USE ability ini untuk menciptakan awan gas beracun tinggi dengan mengorbankan bahan bakar. Ability ini bisa diambil untuk REDEPLOY sebelum ronde dimulai dan bisa di-RE-USE lebih dari satu kali sepanjang ronde."
      },
      {
        "key": "E",
        "name": "TOXIC SCREEN",
        "type": "Signature",
        "description": "SIAGAKAN pelontar pemancar gas. TEMBAK untuk mengerahkan sebaris panjang pemancar gas. GUNAKAN LAGI kemampuan ini untuk membuat dinding gas beracun tinggi dengan mengorbankan bahan bakar. Kemampuan ini bisa DIGUNAKAN LAGI lebih dari sekali."
      },
      {
        "key": "C",
        "name": "SNAKE BITE",
        "type": "Ability",
        "description": "SIAGAKAN pelontar kimia. TEMBAK untuk melontarkan tabung yang pecah saat membentur lantai, menghasilkan zona kimia tahan lama yang mencederai dan memperlambat musuh."
      },
      {
        "key": "X",
        "name": "VIPER'S PIT",
        "type": "Ultimate",
        "description": "SIAGAKAN penyemprot kimia. TEMBAK untuk menyemprotkan awan kimia ke segala arah di sekitar Viper, menghasilkan awan besar yang mengurangi jangkauan pandangan dan kesehatan maks pemain di dalamnya."
      }
    ]
  },
  {
    "slug": "veto",
    "name": "Veto",
    "role": "Sentinel",
    "image": "veto",
    "short": "Agent yang dirancang untuk mengganggu kemampuan lawan dan membuka peluang bagi tim.",
    "bio": "Diperkuat mutasi DNA yang tak terbendung, enforcer asal Senegal, Veto, menabrak aturan tempur dengan melumpuhkan kekuatan dan teknologi lawannya. Di medan tempur Veto, tembakan adalah satu-satunya peganganmu.",
    "abilities": [
      {
        "key": "Q",
        "name": "CHOKEHOLD",
        "type": "Ability",
        "description": "GUNAKAN fragmen kental dari mutasimu. TEKAN FIRE untuk melempar. Fragmen ini akan aktif saat mengenai target, menciptakan perangkap untuk menahan musuh di tempat. Musuh yang tertahan akan terkena efek Deafen dan Decay. Musuh bisa menghancurkan perangkap sebelum diaktifkan."
      },
      {
        "key": "E",
        "name": "INTERCEPTOR",
        "type": "Signature",
        "description": "GUNAKAN Interceptor. TEKAN FIRE untuk menempatkan Interceptor di lokasi yang diproyeksikan. Setelah ditempatkan, GUNAKAN LAGI untuk mengaktifkan. Setelah aktif, Interceptor akan menghancurkan semua utility yang akan MEMANTUL dari pemain dan/atau hancur sendiri oleh tembakan. Musuh bisa menghancurkan Interceptor."
      },
      {
        "key": "C",
        "name": "CROSSCUT",
        "type": "Ability",
        "description": "GUNAKAN vortex. TEKAN FIRE untuk menempatkan di darat. Saat dalam jangkauan dan melihat vortex, AKTIFKAN ULANG untuk berteleportasi ke vortex. Selama BUY PHASE, vortex bisa diambil kembali untuk DI-REDEPLOY."
      },
      {
        "key": "X",
        "name": "EVOLUTION",
        "type": "Ultimate",
        "description": "SEKETIKA mulai bermutasi sepenuhnya, mendapatkan combat stim, regenerasi, dan menjadi KEBAL terhadap segala bentuk debuff."
      }
    ]
  },
  {
    "slug": "tejo",
    "name": "Tejo",
    "role": "Initiator",
    "image": "tejo",
    "short": "Menggunakan kemampuan jarak jauh untuk memberikan tekanan dan membuka area bagi tim.",
    "bio": "Seorang konsultan intelijen veteran dari Kolombia, Tejo, bersama sistem pemandu balistiknya menekan musuh untuk menyerahkan wilayah mereka, atau nyawa. Serangannya yang terarah terus membuat lawan kocar-kacir dan berada di bawah kendalinya.",
    "abilities": [
      {
        "key": "Q",
        "name": "SPECIAL DELIVERY",
        "type": "Ability",
        "description": "GUNAKAN granat lengket. Tekan FIRE untuk meluncurkan. Granat akan menempel pada permukaan pertama yang terkena kontak. Granat itu kemudian meledak dan menerapkan utilitas Concuss pada target yang terjebak dalam ledakan. Tekan ALT FIRE untuk meluncurkan granat dengan satu pantulan."
      },
      {
        "key": "E",
        "name": "STEALTH DRONE",
        "type": "Signature",
        "description": "GUNAKAN stealth drone. Tekan FIRE untuk melempar drone ke depan, dan kendalikan gerakannya secara langsung. Tekan FIRE lagi untuk memicu denyutan yang menerapkan utilitas Suppress dan mengungkap musuh yang terkena."
      },
      {
        "key": "C",
        "name": "GUIDED SALVO",
        "type": "Ability",
        "description": "GUNAKAN sistem penarget dengan bantuan AR. Tekan FIRE untuk memilih hingga dua lokasi target di peta. Tekan ALT FIRE untuk meluncurkan misil yang bergerak sendiri ke lokasi target dan meledak saat mendarat."
      },
      {
        "key": "X",
        "name": "ARMAGEDDON",
        "type": "Ultimate",
        "description": "GUNAKAN peta taktis yang menarget serangan. Tekan FIRE untuk memilih titik awal serangan. Tekan FIRE lagi untuk menetapkan titik akhir dan meluncurkan serangan, melepaskan gelombang ledakan di sepanjang jalur serangan. Tekan ALT FIRE selama penargetan peta untuk membatalkan titik awal."
      }
    ]
  },
  {
    "slug": "sova",
    "name": "Sova",
    "role": "Initiator",
    "image": "sova",
    "short": "Mengumpulkan informasi posisi lawan dan membantu tim menentukan langkah berikutnya.",
    "bio": "Terlahir dari musim dingin abadi tundra Rusia, Sova melacak, menemukan, dan menghabisi musuh dengan efisiensi dan presisi dahsyat. Busur khusus dan kemampuan pengintaian luar biasanya memastikan bahwa kamu bisa lari, tetapi tak bisa sembunyi.",
    "abilities": [
      {
        "key": "Q",
        "name": "SHOCK BOLT",
        "type": "Ability",
        "description": "SIAGAKAN busur dengan shock bolt. TEMBAK untuk mengirim petir ledakan, terdetonasi saat tumbukan dan mencederai pemain di sekitar. TAHAN TEMBAKAN untuk memperluas jangkauan proyektil. TEMBAK ALT untuk menambahkan sampai dua pantulan untuk anak panah ini."
      },
      {
        "key": "E",
        "name": "RECON BOLT",
        "type": "Signature",
        "description": "SIAGAKAN busur dengan recon bolt. TEMBAK untuk menembakkan recon bolt ke depan, diaktifkan saat tumbukan dan Mengungkap lokasi musuh di sekitar yang ada di garis pandang bolt. Musuh bisa menghancurkan bolt ini. TAHAN TEMBAKAN untuk memperluas jangkauan proyektil. TEMBAK ALT untuk menambahkan sampai dua pantulan untuk anak panah ini."
      },
      {
        "key": "C",
        "name": "OWL DRONE",
        "type": "Ability",
        "description": "SIAGAKAN owl drone. TEMBAK untuk mengerahkan dan mengendalikan gerakan drone. Saat mengendalikan drone, TEMBAK untuk menembakkan panah penanda. Panah ini akan Mengungkap lokasi pemain mana pun yang dikenainya. Musuh bisa menghancurkan Owl Drone."
      },
      {
        "key": "X",
        "name": "HUNTER'S FURY",
        "type": "Ultimate",
        "description": "SIAGAKAN busur dengan tiga ledakan energi jarak jauh penembus dinding. TEMBAK untuk melepas garis ledakan energi di depan Sova, mencederai dan mengungkap lokasi musuh dalam jalur tembakannya. Kemampuan ini bisa DIGUNAKAN LAGI sampai dua kali lagi selama pewaktu kemampuan aktif."
      }
    ]
  },
  {
    "slug": "skye",
    "name": "Skye",
    "role": "Initiator",
    "image": "skye",
    "short": "Membantu tim dengan kemampuan informasi, flash, dan dukungan untuk membuka area.",
    "bio": "Berasal dari Australia, Skye dan teman-temannya menjelajahi wilayah-wilayah berbahaya. Dengan kreasi yang menghambat gerak musuh, dan kekuatannya untuk menyembuhkan orang lain, tempat paling aman dan kuat bagi para anggota timnya adalah di sisinya.",
    "abilities": [
      {
        "key": "Q",
        "name": "TRAILBLAZER",
        "type": "Ability",
        "description": "SIAGAKAN hiasan macan Tasmania. TEMBAK untuk mengeluarkannya dan mengendalikan sang predator. Saat memegang kendali, TEMBAK untuk melompat maju, menghasilkan ledakan mengguncang dan melukai musuh yang terkena langsung."
      },
      {
        "key": "E",
        "name": "GUIDING LIGHT",
        "type": "Signature",
        "description": "SIAGAKAN hiasan elang. TEMBAK untuk melemparnya maju. TAHAN TEMBAKAN untuk memandu elang ke arah penanda sasaranmu. GUNAKAN LAGI saat elang terbang untuk mengubahnya menjadi kilat yang mengonfirmasi tembakan saat ada musuh dalam jangkauan tembak dan pandang."
      },
      {
        "key": "C",
        "name": "REGROWTH",
        "type": "Ability",
        "description": "SIAGAKAN hiasan penyembuh. TAHAN TEMBAKAN untuk menyalurkan, menyembuhkan sekutu dalam jangkauan kemampuan dan pandang. Bisa digunakan lagi sampai cadangan penyembuhnya habis. Skye tak bisa menyembuhkan dirinya sendiri."
      },
      {
        "key": "X",
        "name": "SEEKERS",
        "type": "Ultimate",
        "description": "SIAGAKAN hiasan Seeker. TEMBAK untuk mengeluarkan tiga Seeker untuk melacak tiga musuh terdekat. Jika mencapai targetnya, Seeker membuatnya Nearsight. Musuh bisa menghancurkan Seeker."
      }
    ]
  },
  {
    "slug": "sage",
    "name": "Sage",
    "role": "Sentinel",
    "image": "sage",
    "short": "Mendukung tim dengan kemampuan penyembuhan, perlindungan, dan pengendalian area.",
    "bio": "Benteng pertahanan dari Tiongkok, Sage memberikan rasa aman bagi dirinya dan timnya ke mana pun dia pergi. Bisa membangkitkan teman yang gugur dan menahan gempuran sengit, dia menjadi sumber ketenangan dalam medan perang bagai neraka.",
    "abilities": [
      {
        "key": "Q",
        "name": "SLOW ORB",
        "type": "Ability",
        "description": "SIAGAKAN slowing orb. TEMBAK untuk melempar slowing orb ke depan yang meledak saat mendarat, menghasilkan medan tahan lama yang memperlambat pemain yang ada di dalamnya."
      },
      {
        "key": "E",
        "name": "HEALING ORB",
        "type": "Signature",
        "description": "SIAGAKAN healing orb. TEMBAK dengan penanda sasaran pada sekutu yang cedera untuk mengaktifkan sembuh seiring waktu pada mereka. TEMBAK ALT saat Sage cedera untuk mengaktifkan sembuh seiring waktu mandiri."
      },
      {
        "key": "C",
        "name": "BARRIER ORB",
        "type": "Ability",
        "description": "SIAGAKAN barrier orb. TEMBAK untuk menempatkan dinding kokoh. TEMBAK ALT untuk memutar penarget."
      },
      {
        "key": "X",
        "name": "RESURRECTION",
        "type": "Ultimate",
        "description": "SIAGAKAN kemampuan pembangkitan. TEMBAK dengan penanda sasaran pada sekutu yang mati untuk mulai membangkitkan mereka. Setelah penyaluran singkat, sekutu akan hidup kembali dengan kesehatan penuh."
      }
    ]
  },
  {
    "slug": "reyna",
    "name": "Reyna",
    "role": "Duelist",
    "image": "reyna",
    "short": "Duelist yang sangat bergantung pada kemampuan memenangkan pertarungan individu.",
    "bio": "Tertempa di jantung Meksiko, Reyna mendominasi kombat tunggal dan menjadi makin kuat tiap berhasil membunuh. Kepiawaiannya hanya terhambat oleh keahlian mentahnya, membuatnya sangat bergantung pada performa.",
    "abilities": [
      {
        "key": "Q",
        "name": "DEVOUR",
        "type": "Ability",
        "description": "Musuh yang dibunuh oleh Reyna meninggalkan Soul Orb yang bertahan 3 detik. SEGERA konsumsi soul orb di sekitar, sembuh dengan cepat dalam waktu singkat. Kesehatan yang diraih karena keahlian ini dan melebihi 100 akan melemah seiring waktu. Jika MAHARANI aktif, keahlian ini keluar otomatis dan tak mengonsumsi soul orb."
      },
      {
        "key": "E",
        "name": "DISMISS",
        "type": "Signature",
        "description": "SEGERA konsumsi Soul Orb di sekitar, jadi tak berwujud untuk waktu singkat. Jika MAHARANI aktif, juga jadi tak terlihat."
      },
      {
        "key": "C",
        "name": "LEER",
        "type": "Ability",
        "description": "SIAGAKAN mata hantu yang tak bisa dihancurkan. AKTIFKAN untuk mengeluarkan mata dalam jarak pendek ke depan. Mata akan membuat semua musuh yang melihatnya terkena Rabun Jauh."
      },
      {
        "key": "X",
        "name": "EMPRESS",
        "type": "Ultimate",
        "description": "SEGERA jadi kesetanan, meningkatkan kecepatan tembak, siaga, dan isi ulang secara dramatis. Mencetak angka bunuh memperbarui durasi."
      }
    ]
  },
  {
    "slug": "raze",
    "name": "Raze",
    "role": "Duelist",
    "image": "raze",
    "short": "Mengandalkan ledakan dan kemampuan area untuk membersihkan posisi lawan.",
    "bio": "Raze, si eksplosif dari Brasil ini membawa kepribadian yang keras serta senjata besarnya. Dengan playstyle-nya yang brutal, Raze unggul dalam menyapu musuh yang berdiam dan mengosongkan ruang sempit dengan ledakan besar.",
    "abilities": [
      {
        "key": "Q",
        "name": "BLAST PACK",
        "type": "Ability",
        "description": "SEGERA melempar Blast Pack yang menempel ke permukaan. GUNAKAN LAGI kemampuan ini setelah pengerahan untuk mendetonasi, merusak, dan mementalkan semua yang dikenai. Raze tidak menerima kerusakan dari kemampuan ini, tetapi akan menerima kerusakan karena jatuh jika terpental cukup tinggi."
      },
      {
        "key": "E",
        "name": "PAINT SHELLS",
        "type": "Signature",
        "description": "SIAGAKAN granat klaster. TEMBAK untuk melempar granat, yang menghasilkan damage dan sub-amunisi, masing-masing menghasilkan damage pada siapa saja dalam jangkauan. TEMBAK ALT untuk melempar tinggi. Charge Paint Shells direset tiap dua kill."
      },
      {
        "key": "C",
        "name": "BOOM BOT",
        "type": "Ability",
        "description": "SIAGAKAN Boom Bot. TEMBAK untuk mengerahkan bot, membuatnya bergerak dalam garis lurus di tanah, memantul di dinding. Boom Bot terkunci pada musuh mana pun di bagian depan runjungnya dan mengejar mereka, lalu meledak dengan kerusakan berat saat mencapai sasaran."
      },
      {
        "key": "X",
        "name": "SHOWSTOPPER",
        "type": "Ultimate",
        "description": "SIAGAKAN pelontar roket. TEMBAK untuk meluncurkan roket yang menghasilkan damage area masif saat bersentuhan dengan apa pun."
      }
    ]
  },
  {
    "slug": "phoenix",
    "name": "Phoenix",
    "role": "Duelist",
    "image": "phoenix",
    "short": "Duelist dengan kemampuan api yang dapat membantu mengambil ruang dan memenangkan duel.",
    "bio": "Berasal dari Britania Raya, kekuatan bintang Phoenix terpampang dalam gaya bertarungnya, mengobarkan medan perang dengan kilat dan api. Saat sendiri maupun dibantu rekannya, dia akan menerjang ke pertarungan sesuka hatinya.",
    "abilities": [
      {
        "key": "Q",
        "name": "CURVEBALL",
        "type": "Ability",
        "description": "SIAGAKAN flare orb berjalur lengkung yang meledak sesaat setelah dilempar. TEMBAK untuk melengkungkan flare orb ke kiri, meledakkannya, dan membutakan pemain mana pun yang melihatnya. TEMBAK ALT untuk melengkungkan flare orb ke kanan."
      },
      {
        "key": "E",
        "name": "HOT HANDS",
        "type": "Signature",
        "description": "SIAGAKAN fireball. TEMBAK untuk melempar fireball yang meledak setelah beberapa waktu atau saat membentur tanah, menghasilkan zona api yang bertahan lama dan mencederai musuh."
      },
      {
        "key": "C",
        "name": "BLAZE",
        "type": "Ability",
        "description": "SIAGAKAN flame wall. TEMBAK untuk membuat garis api yang bergerak maju, membuat dinding api yang menghalangi pandangan dan mencederai pemain yang melewatinya. TAHAN TEMBAKAN untuk membelokkan dinding ke arah penanda sasaranmu."
      },
      {
        "key": "X",
        "name": "RUN IT BACK",
        "type": "Ultimate",
        "description": "SEGERA tempatkan penanda di lokasi Phoenix. Saat kemampuan ini aktif, mati atau membiarkan pewaktu habis akan mengakhiri kemampuan ini dan mengembalikan Phoenix ke lokasi ini dengan health penuh."
      }
    ]
  },
  {
    "slug": "jett",
    "name": "Jett",
    "role": "Duelist",
    "image": "jett",
    "short": "Mengandalkan kecepatan dan mobilitas untuk bergerak cepat serta menciptakan ruang.",
    "bio": "Mewakili negara asalnya, Korea Selatan, gaya bertarung Jett yang tangkas dengan banyak pengelakan memungkinkannya mengambil risiko yang tak bisa dilakukan orang lain. Dia mengitari tiap pertempuran, menebas musuh sebelum mereka menyadari apa yang terjadi.",
    "abilities": [
      {
        "key": "Q",
        "name": "UPDRAFT",
        "type": "Ability",
        "description": "SEGERA melempar Jett tinggi ke udara."
      },
      {
        "key": "E",
        "name": "TAILWIND",
        "type": "Signature",
        "description": "AKTIFKAN untuk menyiapkan embusan angin selama beberapa saat. GUNAKAN KEMBALI angin untuk melempar Jett ke arah dia bergerak. Jika Jett berdiri diam, dia akan terlempar ke depan. Charge Tailwind direset tiap dua kill."
      },
      {
        "key": "C",
        "name": "CLOUDBURST",
        "type": "Ability",
        "description": "SEGERA melempar proyektil yang membesar menjadi awan penghalang pandangan singkat saat membentur permukaan. TAHAN tombol kemampuan untuk membelokkan asap ke arah penanda sasaranmu."
      },
      {
        "key": "X",
        "name": "BLADE STORM",
        "type": "Ultimate",
        "description": "SIAGAKAN satu set pisau lempar akurasi tinggi. TEMBAK untuk melempar satu pisau dan recharge pisau saat melakukan kill. TEMBAK ALT untuk melempar sisa belati, tetapi tidak recharge saat melakukan kill."
      }
    ]
  },
  {
    "slug": "iso",
    "name": "Iso",
    "role": "Duelist",
    "image": "iso",
    "short": "Duelist yang berfokus pada pertarungan satu lawan satu dan kemampuan bertahan dalam duel.",
    "bio": "Agen andalan dari Cina, Iso, memasuki kondisi fokus untuk memberantas lawan. Dengan merombak energi sekitar menjadi proteksi antipeluru, dia fokus maju ke duel selanjutnya hingga titik darah penghabisan.",
    "abilities": [
      {
        "key": "Q",
        "name": "UNDERCUT",
        "type": "Ability",
        "description": "SIAGAKAN petir molekuler. Tembak untuk melemparnya ke depan, menerapkan FRAGILE sesaat ke semua pemain yang disentuhnya. Petir dapat menembus benda padat, termasuk dinding."
      },
      {
        "key": "E",
        "name": "DOUBLE TAP",
        "type": "Signature",
        "description": "MULAI timer fokus. Setelah selesai, masuki kondisi fokus. Musuh yang kamu jatuhkan atau bunuh akan menghasilkan orb energi. Menembak orb ini akan memberimu perisai yang menyerap satu damage dari sumber mana pun."
      },
      {
        "key": "C",
        "name": "CONTINGENCY",
        "type": "Ability",
        "description": "SIAGAKAN untuk merakit energi prismatik. TEMBAK untuk mendorong dinding energi yang tak bisa hancur untuk menghalangi peluru."
      },
      {
        "key": "X",
        "name": "KILL CONTRACT",
        "type": "Ultimate",
        "description": "SIAGAKAN arena interdimensi. TEMBAK untuk melemparkan selajur energi ke seluruh medan perang, menarikmu dan musuh pertama yang terkena ke dalam arena. Kamu dan lawan berduel sampai titik darah penghabisan."
      }
    ]
  },
  {
    "slug": "harbor",
    "name": "Harbor",
    "role": "Controller",
    "image": "harbor",
    "short": "Menggunakan kemampuan berbasis air untuk membuat perlindungan dan mengontrol jalur pertempuran.",
    "bio": "Berasal dari pesisir India, Harbor menyerbu medan pertempuran dengan menggunakan teknologi kuno yang menguasai air. Dia mengeluarkan arus deras berbuih dan ombak yang menghancurkan untuk melindungi sekutu, atau menghancurkan siapa pun yang menentangnya.",
    "abilities": [
      {
        "key": "Q",
        "name": "COVE",
        "type": "Ability",
        "description": "EQUIP Cove. AKTIFKAN untuk membentuk Asap air di lokasi yang dipilih. HOLD FIRE saat menarget untuk menjauhkan penanda, dan HOLD ALT FIRE untuk mendekatkannya. Tekan RELOAD untuk berganti tampilan penargetan. AKTIFKAN ULANG untuk memberi Shield pada Asap air sehingga peluru tidak bisa menembus. Asap air yang diberi Shield bisa dihancurkan."
      },
      {
        "key": "E",
        "name": "HIGH TIDE",
        "type": "Signature",
        "description": "EQUIP High Tide. Tekan FIRE untuk melempar air ke depan di sepanjang daratan. HOLD FIRE untuk mengarahkan air ke crosshair-mu, memunculkan Layar yang menghalangi pandangan di sepanjang jalur air. Tekan ALT FIRE untuk menghentikan air lebih awal. Semua pemain yang melewati High Tide akan terkena Slow."
      },
      {
        "key": "C",
        "name": "strom surge",
        "type": "Ability",
        "description": "EQUIP Storm Surge. Tekan FIRE untuk melempar, menciptakan pusaran air eksplosif yang menerapkan Nearsight dan Slow pada musuh di dalamnya setelah beberapa saat."
      },
      {
        "key": "X",
        "name": "RECKONING",
        "type": "Ultimate",
        "description": "EQUIP Reckoning. Tekan FIRE untuk melepaskan kekuatan penuh artefakmu, melepaskan semburan air yang melesat maju untuk menerapkan Nearsight dan Slow pada musuh yang terkena."
      }
    ]
  },
  {
    "slug": "gekko",
    "name": "Gekko",
    "role": "Initiator",
    "image": "gekko",
    "short": "Memanfaatkan makhluk-makhluk kecilnya untuk membantu menguasai area dan mendukung tim.",
    "bio": "Gekko the Angeleno memimpin kru kompak yang berisi makhluk pembawa malapetaka. Rekan-rekannya bergerak maju, menyingkirkan musuh, dan Gekko mengejar mereka untuk bersatu kembali dan pergi lagi.",
    "abilities": [
      {
        "key": "Q",
        "name": "WINGMAN",
        "type": "Ability",
        "description": "SIAGAKAN Wingman TEMBAK untuk mengirim Wingman mencari musuh. Wingman melepaskan ledakan concussive ke musuh pertama yang dilihatnya TEMBAK ALT saat menargetkan lokasi Spike atau Spike yang ditempatkan agar Wingman menjinakkan atau menempatkan Spike. Untuk menempatkan, Gekko harus punya Spike di inventarisnya. Saat Wingman berakhir, dia kembali ke globule yang tidak aktif INTERAKSI untuk mengambil kembali globule dan memperoleh charge Wingman lagi setelah cooldown singkat."
      },
      {
        "key": "E",
        "name": "DIZZY",
        "type": "Signature",
        "description": "SIAGAKAN Dizzy TEMBAK untuk mengirim Dizzy melesat ke udara. Dizzy charge lalu melepaskan ledakan plasma ke musuh di garis pandang. Musuh yang terkena plasmanya akan terkena efek blind. Saat Dizzy berakhir, dia kembali ke globule yang tidak aktif INTERAKSI untuk mengambil kembali globule dan memperoleh charge Dizzy lagi setelah cooldown singkat."
      },
      {
        "key": "C",
        "name": "MOSH PIT",
        "type": "Ability",
        "description": "SIAGAKAN Mosh TEMBAK untuk melempar Mosh seperti granat TEMBAK ALT untuk melakukan lemparan bawah. Setelah mendarat, Mosh menjadi banyak di area yang luas lalu sesaat kemudian meledak."
      },
      {
        "key": "X",
        "name": "THRASH",
        "type": "Ultimate",
        "description": "SIAGAKAN Thrash TEMBAK untuk terhubung dengan pikiran Thrash dan mengarahkannya di wilayah musuh AKTIFKAN untuk menerjang ke depan dan meledak, menahan musuh dalam radius kecil. Saat Thrash berakhir, dia kembali ke globule yang tidak aktif INTERAKSI untuk mengambil kembali globule dan memperoleh charge Thrash lagi setelah cooldown singkat. Thrash bisa diambil kembali satu kali."
      }
    ]
  },
  {
    "slug": "fade",
    "name": "Fade",
    "role": "Initiator",
    "image": "fade",
    "short": "Menggunakan kemampuan berbasis informasi untuk melacak dan mengganggu posisi lawan.",
    "bio": "Pemburu bayaran asal Turki, Fade, melepaskan kekuatan mimpi buruk kejam untuk merebut rahasia musuh. Sesuai dengan teror itu sendiri, dia memburu target dan menyingkap ketakutan terdalam, sebelum menghancurkan mereka dalam kegelapan.",
    "abilities": [
      {
        "key": "Q",
        "name": "SEIZE",
        "type": "Ability",
        "description": "Siagakan orb tinta mimpi buruk. TEMBAK untuk melempar orb yang akan jatuh ke tanah setelah durasi waktu tertentu. Saat menyentuh tanah, tinta akan meledak dan menciptakan zona. Musuh yang tertangkap di dalamnya tidak bisa keluar dari zona tersebut dengan cara biasa. GUNAKAN LAGI ability ini untuk menjatuhkan proyektil di awal peluncurannya."
      },
      {
        "key": "E",
        "name": "HAUNT",
        "type": "Signature",
        "description": "Siagakan entitas mimpi buruk. TEMBAK untuk melempar orb yang akan jatuh ke tanah setelah durasi waktu tertentu. Saat menyentuh tanah, orb akan berubah menjadi entitas mimpi buruk, lalu mengungkap lokasi musuh yang tertangkap di garis pandangnya. Musuh bisa menghancurkan entitas ini. GUNAKAN LAGI ability ini untuk menjatuhkan proyektil di awal peluncurannya."
      },
      {
        "key": "C",
        "name": "PROWLER",
        "type": "Ability",
        "description": "SIAGAKAN Prowler. TEMBAK akan meluncurkan Prowler yang melaju dalam garis lurus. Prowler akan mengunci musuh atau jejak apa pun di kerucut pandang depan dan mengejar mereka, memberikan efek nearsight jika menjangkau mereka. TAHAN tombol TEMBAK untuk mengarahkan Prowler ke crosshair."
      },
      {
        "key": "X",
        "name": "NIGHTFALL",
        "type": "Ultimate",
        "description": "SIAGAKAN kekuatan ketakutan. TEMBAK untuk mengeluarkan gelombang energi mimpi buruk yang bisa menembus dinding. Energi menciptakan jejak ke lawan serta memekakkan telinga dan meluruhkan mereka."
      }
    ]
  },
  {
    "slug": "deadlock",
    "name": "Deadlock",
    "role": "Sentinel",
    "image": "deadlock",
    "short": "Menggunakan teknologi khusus untuk membatasi pergerakan dan mengendalikan area.",
    "bio": "Detektif Norwegia, Deadlock, mengerahkan serangkaian nanowire mutakhir untuk mengamankan medan perang dari serangan yang paling mematikan sekalipun. Tak ada yang bisa lolos dari pengawasan ketatnya, ataupun bertahan dari kebengisannya.",
    "abilities": [
      {
        "key": "Q",
        "name": "GRAVNET",
        "type": "Ability",
        "description": "Lemparkan granat nanowire yang memperlambat musuh.SIAGAKAN granat GravNet. TEMBAK untuk melempar. TEMBAK ALT untuk melempar tinggi granat. GravNet meledak saat mendarat, memaksa musuh yang terjebak di dalamnya untuk merunduk dan bergerak perlahan."
      },
      {
        "key": "E",
        "name": "SONIC SENSOR",
        "type": "Signature",
        "description": "SIAGAKAN Sonic Sensor. TEMBAK untuk mengerahkan. Sensor memantau area untuk mendeteksi musuh yang mengeluarkan suara. Area itu akan terkena efek concuss jika langkah kaki, tembakan senjata, atau suara bising terdeteksi."
      },
      {
        "key": "C",
        "name": "BARRIER MESH",
        "type": "Ability",
        "description": "SIAGAKAN cakram Barrier Mesh. TEMBAK untuk melempar ke depan. Saat mendarat, cakram menghasilkan penghalang dari titik asal yang menghalangi pergerakan agen."
      },
      {
        "key": "X",
        "name": "ANNIHILATION",
        "type": "Ultimate",
        "description": "SIAGAKAN Nanowire Accelerator. TEMBAK untuk melepaskan gelombang nanowire yang menangkap musuh pertama yang bersinggungan. Musuh yang terkepung ditarik sepanjang jalur nanowire dan akan mati jika mencapai ujungnya, kecuali mereka dibebaskan. Lilitan nanowire dapat dihancurkan."
      }
    ]
  },
  {
    "slug": "cypher",
    "name": "Cypher",
    "role": "Sentinel",
    "image": "cypher",
    "short": "Spesialis informasi yang menjaga area dan mendeteksi pergerakan lawan.",
    "bio": "Seorang makelar informasi dari Maroko, Cypher adalah jaringan pengintai satu orang yang mengawasi tiap gerakan musuh. Tak ada rahasia yang aman. Tak ada manuver yang tak terlihat. Cypher selalu mengawasi.",
    "abilities": [
      {
        "key": "Q",
        "name": "CYBER CAGE",
        "type": "Ability",
        "description": "SEGERA melempar cyber cage ke depan Cypher. Aktifkan untuk membuat zona yang menghalangi pandangan dan memperlambat musuh yang melewatinya."
      },
      {
        "key": "E",
        "name": "TRAPWIRE",
        "type": "Signature",
        "description": "SIAGAKAN trapwire. TEMBAK untuk menempatkan tripwire tersembunyi yang bisa dihancurkan di lokasi target, menghasilkan bentangan garis antara lokasi penempatan dan dinding di seberangnya. Pemain musuh yang melewati trapwire akan tertambat, terungkap, dan tersentak setelah beberapa saat jika mereka tak segera menghancurkan perangkat ini. Kemampuan ini bisa diambil untuk DIKERAHKAN LAGI."
      },
      {
        "key": "C",
        "name": "SPYCAM",
        "type": "Ability",
        "description": "SIAGAKAN spycam. TEMBAK untuk menempatkan spycam di lokasi target. GUNAKAN LAGI ability ini untuk mengendalikan tampilan kamera. Saat mengendalikan kamera, TEMBAK untuk menembakkan panah penanda. Panah ini akan Mengungkap lokasi pemain mana pun yang dikenainya. Ability ini bisa diambil untuk DIKERAHKAN LAGI."
      },
      {
        "key": "X",
        "name": "NEURAL THEFT",
        "type": "Ultimate",
        "description": "SEGERA gunakan pada pemain musuh yang mati di penanda sasaranmu untuk mengungkap lokasi semua pemain musuh yang hidup."
      }
    ]
  },
  {
    "slug": "clove",
    "name": "Clove",
    "role": "Controller",
    "image": "clove",
    "short": "Controller dengan gaya bermain fleksibel yang tetap dapat membantu tim bahkan setelah terkena eliminasi.",
    "bio": "Pembuat onar dari Skotlandia, Clove, membawa masalah bagi musuh dalam panasnya pertempuran dan dinginnya kematian. Manusia abadi ini membuat musuhnya kebingungan, bahkan dari alam kubur. Dia kembali ke dunia hanya tinggal menunggu waktu.",
    "abilities": [
      {
        "key": "Q",
        "name": "MEDDLE",
        "type": "Ability",
        "description": "EQUIP fragmen dari esensi keabadian. FIRE untuk melempar fragmen, meledak setelah penundaan singkat dan untuk sementara waktu memberi efek decay pada semua target yang terperangkap di dalamnya."
      },
      {
        "key": "E",
        "name": "RUSE",
        "type": "Signature",
        "description": "EQUIP untuk menampilkan medan pertempuran. FIRE untuk mengatur lokasi pendaratan awan Clove. ALT FIRE untuk mengonfirmasi, meluncurkan awan yang menghalangi pandangan di area yang dipilih. Clove bisa menggunakan ability ini setelah mati."
      },
      {
        "key": "C",
        "name": "PICK-ME-UP",
        "type": "Ability",
        "description": "LANGSUNG menyerap kekuatan hidup musuh yang tumbang karena terkena damage atau kill oleh Clove, mendapatkan haste dan health sementara."
      },
      {
        "key": "X",
        "name": "NOT DEAD YET",
        "type": "Ultimate",
        "description": "Setelah mati, ACTIVATE untuk bangkit. Setelah bangkit, Clove harus mendapatkan kill atau assist penghasil damage dalam waktu yang ditentukan atau mereka akan mati."
      }
    ]
  },
  {
    "slug": "chamber",
    "name": "Chamber",
    "role": "Sentinel",
    "image": "chamber",
    "short": "Sentinel yang mengandalkan senjata khusus dan kemampuan mobilitas untuk menjaga area.",
    "bio": "Berpakaian rapi dan bersenjata lengkap, desainer senjata dari Prancis, Chamber, menghalau penyerang dengan presisi yang mematikan. Dia memanfaatkan persenjataan kustomnya untuk mempertahankan area tertentu, menembak musuh dari jauh, dengan kontingensi yang tersusun untuk tiap rencana.",
    "abilities": [
      {
        "key": "Q",
        "name": "HEADHUNTER",
        "type": "Ability",
        "description": "AKTIFKAN untuk menyiagakan pistol berat. TEMBAK ALT dengan pistol yang disiagakan untuk mengarahkan bidikan ke bawah."
      },
      {
        "key": "E",
        "name": "RENDEZVOUS",
        "type": "Signature",
        "description": "SIAGAKAN jangkar teleportasi. TEMBAK untuk menempatkannya di lantai. Saat berada di lantai dan dalam jangkauan jangkar, AKTIFKAN ULANG untuk berteleportasi dengan cepat ke jangkar itu. Jangkar bisa diambil untuk DIKERAHKAN LAGI."
      },
      {
        "key": "C",
        "name": "TRADEMARK",
        "type": "Ability",
        "description": "SIAGAKAN jebakan yang memindai musuh. TEMBAK untuk menempatkannya di lantai. Ketika musuh yang terlihat masuk ke dalam jangkauan, jebakan akan menghitung mundur lalu membuat medan di sekitar mereka tidak stabil, menciptakan medan tahan lama yang menerapkan Slow ke pemain yang terperangkap di dalamnya. Jebakan bisa diambil untuk DIKERAHKAN LAGI."
      },
      {
        "key": "X",
        "name": "TOUR DE FORCE",
        "type": "Ultimate",
        "description": "AKTIFKAN untuk memanggil senapan penembak runduk kustom dan kuat, yang akan membunuh musuh dengan tembakan langsung ke tubuh bagian atas. TEMBAK ALT untuk membidik. Membunuh musuh akan menciptakan medan tahan lama yang akan menerapkan Slow ke pemain yang terperangkap di dalamnya."
      }
    ]
  },
  {
    "slug": "brimstone",
    "name": "Brimstone",
    "role": "Controller",
    "image": "brimstone",
    "short": "Mengontrol medan pertempuran menggunakan smoke, area denial, dan dukungan dari jarak jauh.",
    "bio": "Bergabung dari AS, persenjataan orbital Brimstone memastikan squad-nya selalu di posisi menguntungkan. Kemampuannya untuk melancarkan bantuan secara presisi dan aman menjadikannya seorang komandan tempur tak tertandingi.",
    "abilities": [
      {
        "key": "Q",
        "name": "INCENDIARY",
        "type": "Ability",
        "description": "SIAGAKAN pelontar granat incendiary. TEMBAK untuk meluncurkan granat yang meledak saat mencapai lantai, menghasilkan zona api tahan lama yang mencederai pemain dalam zona tersebut."
      },
      {
        "key": "E",
        "name": "SKY SMOKE",
        "type": "Signature",
        "description": "SIAGAKAN peta taktis. TEMBAK untuk menentukan lokasi pendaratan awan asap Brimstone. TEMBAK ALT untuk mengonfirmasi, meluncurkan awan asap tahan lama yang menghalangi pandangan di area yang terpilih."
      },
      {
        "key": "C",
        "name": "STIM BEACON",
        "type": "Ability",
        "description": "SIAGAKAN a stim beacon. TEMBAK untuk melempar stim beacon di depan Brimstone. Saat mendarat, stim beacon akan menciptakan medan yang menghadiahkan Tembak Cepat pada pemain."
      },
      {
        "key": "X",
        "name": "ORBITAL STRIKE",
        "type": "Ultimate",
        "description": "SIAGAKAN peta taktis. TEMBAK untuk meluncurkan laser serangan orbital tahan lama di lokasi terpilih, menghasilkan kerusakan seiring waktu tinggi pada pemain yang ada di area terpilih."
      }
    ]
  },
  {
    "slug": "brance",
    "name": "Brance",
    "role": "Agent",
    "image": "brance",
    "short": "Agent tambahan dalam roster showcase UNSCOPED.",
    "bio": "Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.",
    "abilities": [
      {
        "key": "Q",
        "name": "FLASHPOINT",
        "type": "Ability",
        "description": "EQUIP blinding charge. TEKAN FIRE untuk menempatkan ledakan cepat yang menembus dinding. Ledakan akan aktif dan membutakan semua pemain yang melihat ke arahnya"
      },
      {
        "key": "E",
        "name": "FOULT LINE",
        "type": "Signature",
        "description": "EQUIP seismic blast. TAHAN FIRE untuk memperbesar jarak jangkauan. LEPASKAN untuk memicu getaran, membuat semua pemain di dalam area dan sepanjang jalurnya terkena efek dazed."
      },
      {
        "key": "C",
        "name": "AFTERSHOCK",
        "type": "Ability",
        "description": "EQUIP fusion charge. TEKAN FIRE untuk memasang ledakan lambat yang menembus dinding. Ledakan tersebut memberikan damage besar kepada siapa pun yang berada di dalam EQUIP seismic charge. TEKAN FIRE untuk mengirimkan gelombang gempa berantai melalui seluruh permukaan tanah dalam area berbentuk kerucut besar. Gelombang tersebut membuat pemain yang terkena menjadi dazed dan terlempar ke atas.areanya."
      },
      {
        "key": "X",
        "name": "ROLLING THUNDER",
        "type": "Ultimate",
        "description": "EQUIP seismic charge. TEKAN FIRE untuk mengirimkan gelombang gempa berantai melalui seluruh permukaan tanah dalam area berbentuk kerucut besar. Gelombang tersebut membuat pemain yang terkena menjadi dazed dan terlempar ke atas."
      }
    ]
  },
  {
    "slug": "astra",
    "name": "Astra",
    "role": "Controller",
    "image": "astra",
    "short": "Mengendalikan medan pertempuran dengan kemampuan yang dapat ditempatkan dari jarak jauh.",
    "bio": "Agen asal Ghana, Astra, memberdayakan kekuatan semesta untuk mereka ulang medan tempur sesuka hatinya. Dengan kendali penuh atas wujud astralnya dan bakat meramal strategisnya, dia akan selalu unggul dari musuuhnya.",
    "abilities": [
      {
        "key": "Q",
        "name": "NOVA PULSE",
        "type": "Ability",
        "description": "Tempatkan Star dalam Astral Form. ACTIVATE satu Star untuk meledakkan Nova Pulse. Nova Pulse akan charge sejenak, lalu menyerang, mengguncang semua pemain di area tersebut."
      },
      {
        "key": "E",
        "name": "NEBULA",
        "type": "Signature",
        "description": "Tempatkan Star dalam Astral Form. ACTIVATE satu Star untuk mengubahnya menjadi Nebula (asap). USE satu Star untuk Melenyapkannya, mengembalikan Star tersebut agar bisa ditempatkan di lokasi baru setelah beberapa saat. Lenyap membentuk Nebula palsu sejenak di lokasi Star sebelum kembali."
      },
      {
        "key": "C",
        "name": "GRAVITY WELL",
        "type": "Ability",
        "description": "Tempatkan Star dalam Astral Form (X) ACTIVATE satu Star untuk membentuk Gravity Well. Pemain di area tersebut tersedot ke pusatnya sebelum liang meledak, membuat semua pemain yang masih terjebak di dalamnya menjadi Vulnerable."
      },
      {
        "key": "X",
        "name": "ASTRAL FORM / COSMIC DIVIDE",
        "type": "Ultimate",
        "description": "AKTIFKAN untuk memasuki Astral Form yang memungkinkanmu menempatkan Star dengan TEMBAK. Star bisa diaktifkan ulang belakangan, mengubahnya menjadi Nova Pulse, Nebula, atau Gravity Well. Saat Cosmic Divide di-charge, gunakan TEMBAK ALT dalam Astral Form untuk mulai membidiknya, lalu TEMBAK untuk memilih dua lokasi. Cosmic Divide tanpa batas menghubungkan dua titik pilihanmu. Cosmic Divide menangkis peluru dan sangat meredam suara."
      }
    ]
  },
  {
    "slug": "yoru",
    "name": "Yoru",
    "role": "Duelist",
    "image": "yoru",
    "short": "Duelist yang mengandalkan tipu daya, teleportasi, dan pergerakan tak terduga untuk mengecoh lawan.",
    "bio": "Agen asal Jepang Yoru melubangi realitas untuk menyusup ke wilayah musuh tanpa terlihat. Dengan bermodal tipuan dan agresi yang seimbang, dia menghabisi tiap target sebelum mereka sadar ke mana harus melihat.",
    "abilities": [
      {
        "key": "Q",
        "name": "BLINDSIDE",
        "type": "Ability",
        "description": "SIAGAKAN untuk mencabik retakan dimensi tak stabil dari kenyataan. TEMBAK untuk melempar retakan, mengaktifkan kilat yang dimulai saat bersentuhan dengan permukaan keras di medan tempur."
      },
      {
        "key": "E",
        "name": "GATECRASH",
        "type": "Signature",
        "description": "SIAGAKAN rift tether TEMBAK untuk mengirim tether ke depan. TEMBAK ALT untuk menempatkan tether stasioner. AKTIFKAN untuk berteleportasi ke lokasi tether. GUNAKAN untuk memicu teleportasi palsu."
      },
      {
        "key": "C",
        "name": "FAKEOUT",
        "type": "Ability",
        "description": "SIAGAKAN gema yang berubah menjadi bayangan cermin Yoru saat diaktifkan. TEMBAK untuk langsung mengaktifkan bayangan cermin dan mengirimnya ke depan. TEMBAK ALT untuk menempatkan gema nonaktif. GUNAKAN untuk mengubah gema nonaktif menjadi bayangan cermin dan mengirimnya ke depan. Bayangan cermin meledak dalam sekejap dan menyilaukan ketika dihancurkan oleh musuh."
      },
      {
        "key": "X",
        "name": "DIMENSIONAL DRIFT",
        "type": "Ultimate",
        "description": "SIAGAKAN topeng yang bisa melihat di antara dimensi. TEMBAK untuk menjelajah dimensi Yoru, tak bisa dipengaruhi atau dilihat musuh dari luar. AKTIFKAN ULANG untuk keluar dari dimensi Yoru lebih awal."
      }
    ]
  },
  {
    "slug": "omen",
    "name": "Omen",
    "role": "Controller",
    "image": "omen",
    "short": "Agent misterius yang menggunakan bayangan untuk mengendalikan area dan mengecoh lawan.",
    "bio": "Sesosok hantu dalam pikiran, Omen berburu di dalam bayangan. Dia membutakan musuh, berteleportasi di penjuru medan tempur, lalu membiarkan rasa paranoid menghantui selagi musuh berusaha menerka di mana dia akan menyerang berikutnya.",
    "abilities": [
      {
        "key": "Q",
        "name": "PARANOIA",
        "type": "Ability",
        "description": "SEGERA menembakkan proyektil bayangan ke depan, mengurangi jangkauan pandangan semua pemain yang disentuhnya untuk sesaat. Proyektil ini bisa menembus dinding."
      },
      {
        "key": "E",
        "name": "DARK COVER",
        "type": "Signature",
        "description": "SIAGAKAN shadow orb, memasuki dunia transisi untuk menempatkan dan menarget orb. TEKAN tombol ability untuk melempar shadow orb ke lokasi yang ditandai, menciptakan bidang bayangan tahan lama yang menghalangi pandangan. TAHAN TEMBAK saat menarget untuk menjauhkan penanda. TAHAN TEMBAK ALT saat menarget untuk mendekatkan penanda. TEKAN RELOAD untuk beralih ke tampilan penargetan normal."
      },
      {
        "key": "C",
        "name": "SHROUDED STEP",
        "type": "Ability",
        "description": "SIAGAKAN kemampuan shadow walk dan lihat indikator jangkauannya. TEMBAK untuk memulai penyaluran singkat, lalu teleportasi ke lokasi yang ditandai"
      },
      {
        "key": "X",
        "name": "FROM THE SHADOWS",
        "type": "Ultimate",
        "description": "SIAGAKAN peta taktis. TEMBAK untuk berteleportasi ke lokasi terpilih. Saat teleportasi, Omen muncul sebagai Shade yang bisa dihancurkan oleh musuh untuk membatalkan teleportasinya."
      }
    ]
  },
  {
    "slug": "neon",
    "name": "Neon",
    "role": "Duelist",
    "image": "neon",
    "short": "Duelist dengan kecepatan tinggi yang memanfaatkan energi listrik untuk bergerak agresif.",
    "bio": "Agen dari Filipina, Neon, melesat maju dengan kecepatan yang mencengangkan, menyemburkan pancaran bioelektrik secepat tubuhnya menghasilkannya. Dia berlari untuk mengejutkan musuh, lalu menyerang mereka lebih cepat dari kilat.",
    "abilities": [
      {
        "key": "Q",
        "name": "RELAY BOLT",
        "type": "Ability",
        "description": "SEKETIKA melemparkan energy bolt yang memantul satu kali. Saat mengenai permukaan, bolt menyetrum tanah di bawahnya dengan ledakan concussive."
      },
      {
        "key": "E",
        "name": "HIGH GEAR",
        "type": "Signature",
        "description": "SEKETIKA menyalurkan kekuatan Neon untuk meningkatkan kecepatan. Saat terisi, gunakan TEMBAKAN ALT untuk memicu luncuran listrik. Muatan luncuran direset tiap dua kill."
      },
      {
        "key": "C",
        "name": "FAST LANE",
        "type": "Ability",
        "description": "MENEMBAKKAN dua garis energi di atas tanah yang terbentang dalam jarak pendek atau sampai garis itu mengenai permukaan. Garis ini naik ke dinding listrik statis yang menghalangi pandangan dan menghasilkan damage pada musuh yang melewatinya."
      },
      {
        "key": "X",
        "name": "OVERDRIVE",
        "type": "Ultimate",
        "description": "Melepaskan tenaga dan kecepatan penuh Neon selama beberapa saat. TEMBAKKAN untuk menyalurkan kekuatan itu ke cahaya kilat yang mematikan dengan akurasi gerakan tinggi. Durasi ini direset di tiap kill."
      }
    ]
  },
  {
    "slug": "killjoy",
    "name": "Killjoy",
    "role": "Sentinel",
    "image": "killjoy",
    "short": "Sentinel yang menggunakan berbagai perangkat teknologi untuk menjaga dan mengamankan area.",
    "bio": "Sang genius dari Jerman, Killjoy, dengan mudah mengamankan posisi penting medan perang dengan segudang penemuannya. Jika kerusakan yang dihasilkan tak menghentikan musuh, debuff robot-robotnya akan mengatasinya.",
    "abilities": [
      {
        "key": "Q",
        "name": "ALARM BOT",
        "type": "Ability",
        "description": "SIAGAKAN Alarmbot tersembunyi. TEMBAK untuk mengerahkan bot pemburu musuh yang masuk dalam jangkauan. Setelah mencapai target, bot meledak, menerapkan Rentan. TAHAN SIAGA untuk memanggil kembali bot yang dikerahkan."
      },
      {
        "key": "E",
        "name": "TURRET",
        "type": "Signature",
        "description": "SIAGAKAN Turet. TEMBAK untuk mengerahkan turet yang menembak musuh dalam sudut 180 derajat. TAHAN SIAGA untuk memanggil kembali turet yang dikerahkan."
      },
      {
        "key": "C",
        "name": "NANOSWARM",
        "type": "Ability",
        "description": "SIAGAKAN granat Nanoswarm. TEMBAK untuk melempar granat. Saat mendarat, Nanoswarm jadi tersembunyi. AKTIFKAN Nanoswarm untuk mengerahkan kerumunan nanobot perusak."
      },
      {
        "key": "X",
        "name": "LOCKDOWN",
        "type": "Ultimate",
        "description": "SIAGAKAN perangkat Belenggu. TEMBAK untuk mengerahkan perangkat. Setelah selesai, perangkat Menahan semua musuh yang tertangkap di dalam radius. Perangkat bisa dihancurkan musuh."
      }
    ]
  },
  {
    "slug": "kayo",
    "name": "KAY/O",
    "role": "Initiator",
    "image": "kay.o",
    "short": "Agent yang dirancang untuk menekan kemampuan lawan dan membantu tim.",
    "bio": "KAY/O adalah mesin perang yang diciptakan demi satu tujuan: melumpuhkan para radiant. Kekuatannya dalam Suppress ability musuh melucuti kemampuan mereka untuk melawan balik, memberikan keunggulan besar bagi dirinya dan sekutunya.",
    "abilities": [
      {
        "key": "Q",
        "name": "FLASH/DRIVE",
        "type": "Ability",
        "description": "SIAGAKAN granat flash. TEMBAK untuk melakukan lemparan atas. TEMBAK ALT untuk melempar tinggi granat versi lemah yang meledak lebih cepat. Granat flash meledak setelah beberapa saat, Blind siapa pun yang melihatnya."
      },
      {
        "key": "E",
        "name": "ZERO/POINT",
        "type": "Signature",
        "description": "SIAGAKAN pedang suppression. TEMBAK untuk melempar. Pedang menancap ke permukaan pertama yang disentuhnya, mengumpulkan tenaga, dan Suppress siapa saja dalam radius ledakannya. Musuh bisa menghancurkan pedang ini."
      },
      {
        "key": "C",
        "name": "FRAG/MENT",
        "type": "Ability",
        "description": "SIAGAKAN fragmen peledak. TEMBAK untuk melempar. Fragmen ini menancap ke tanah dan meledak beberapa kali, menghasilkan kerusakan nyaris mematikan di bagian tengah tiap ledakan."
      },
      {
        "key": "X",
        "name": "NULL/CMD",
        "type": "Ultimate",
        "description": "SEKETIKA mengeluarkan energi radianite yang meluap bertahap dari KAY/O dalam radius yang masif. Musuh yang terkena gelombang ini mengalami Suppress untuk waktu singkat. Saat luapan energi berlebih, KAY/O mendapatkan Combat Stim dan bisa distabilkan kembali jika dia terbunuh."
      }
    ]
  },
  {
    "slug": "miks",
    "name": "Miks",
    "role": "Controller",
    "image": "miks",
    "short": "Agent tambahan dalam roster showcase UNSCOPED dengan kemampuan unik untuk mendukung tim.",
    "bio": "Straight from Croatia, Miks takes the stage channeling pure sound energy. With his infectious passion and sonic powers, he rallies his squad to move as one as they set the tempo on the battlefield together.",
    "abilities": [
      {
        "key": "Q",
        "name": "HARMONIZE",
        "type": "Ability",
        "description": "EQUIP Harmonize. Arahkan ke sekutu dan TEMBAK untuk mengaktifkan Combat Stim pada dirimu sendiri dan sekutu tersebut. Efeknya akan diperbarui setiap kali mendapatkan kill. ALT-FIRE untuk memberikan Combat Stim hanya kepada dirimu sendiri"
      },
      {
        "key": "E",
        "name": "WAVEFORM",
        "type": "Signature",
        "description": "EQUIP Map Targeter. TEKAN FIRE untuk menentukan lokasi. ALT-FIRE untuk membuat Smoke muncul di lokasi yang sudah dipilih."
      },
      {
        "key": "C",
        "name": "M-PULSE",
        "type": "Ability",
        "description": "EQUIP M-pulse. ALT-FIRE untuk mengganti antara mode Concuss dan Healing. FIRE untuk melempar perangkat. Saat mendarat, M-pulse akan mengirimkan gelombang suara yang memberikan efek Concuss atau Healing kepada pemain."
      },
      {
        "key": "X",
        "name": "BASSQUAKE",
        "type": "Ultimate",
        "description": "EQUIP Bassquake. TEKAN FIRE untuk mengisi daya lalu melepaskan Sonic Radiance ke arah depan, yang akan mendorong mundur, membuat tuli, dan memperlambat pemain."
      }
    ]
  }
];
