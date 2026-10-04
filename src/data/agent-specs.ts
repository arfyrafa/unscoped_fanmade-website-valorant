export interface AbilitySpec {
  charges: string;
  cost: string;
}

export interface AgentSpec {
  origin: string;
  originId: string;
  protocol: string;
  difficulty: "Mudah" | "Sedang" | "Sulit";
  difficultyEn: "Easy" | "Medium" | "Hard";
  specs: Record<"Q" | "E" | "C" | "X", AbilitySpec>;
}

export const agentSpecs: Record<string, AgentSpec> = {
  jett: {
    origin: "South Korea",
    originId: "Korea Selatan",
    protocol: "10",
    difficulty: "Sulit",
    difficultyEn: "Hard",
    specs: {
      Q: { charges: "2 Charges", cost: "150 Creds" },
      E: { charges: "1 Charge", cost: "Gratis (2 Kill Reset)" },
      C: { charges: "2 Charges", cost: "200 Creds" },
      X: { charges: "5 Pisau Kunai", cost: "8 Poin Ulti" },
    },
  },
  phoenix: {
    origin: "United Kingdom",
    originId: "Britania Raya",
    protocol: "09",
    difficulty: "Mudah",
    difficultyEn: "Easy",
    specs: {
      Q: { charges: "2 Charges", cost: "250 Creds" },
      E: { charges: "1 Charge", cost: "Gratis (2 Kill Reset)" },
      C: { charges: "1 Charge", cost: "150 Creds" },
      X: { charges: "1 Durasi Klon", cost: "6 Poin Ulti" },
    },
  },
  reyna: {
    origin: "Mexico",
    originId: "Meksiko",
    protocol: "11",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "Soul Orb", cost: "Gratis (Soul Harvest)" },
      E: { charges: "2 Charges", cost: "200 Creds" },
      C: { charges: "2 Charges", cost: "250 Creds" },
      X: { charges: "Empowered Mode", cost: "8 Poin Ulti" },
    },
  },
  raze: {
    origin: "Brazil",
    originId: "Brasil",
    protocol: "12",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "2 Charges", cost: "200 Creds" },
      E: { charges: "1 Charge", cost: "Gratis (2 Kill Reset)" },
      C: { charges: "1 Charge", cost: "300 Creds" },
      X: { charges: "1 Roket Launcher", cost: "8 Poin Ulti" },
    },
  },
  iso: {
    origin: "China",
    originId: "Tiongkok",
    protocol: "24",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "2 Charges", cost: "250 Creds" },
      E: { charges: "1 Charge", cost: "Gratis (2 Kill Reset)" },
      C: { charges: "1 Charge", cost: "200 Creds" },
      X: { charges: "1v1 Duel Arena", cost: "8 Poin Ulti" },
    },
  },
  neon: {
    origin: "Philippines",
    originId: "Filipina",
    protocol: "19",
    difficulty: "Sulit",
    difficultyEn: "Hard",
    specs: {
      Q: { charges: "2 Charges", cost: "200 Creds" },
      E: { charges: "Energi Meter", cost: "Gratis (Recharge)" },
      C: { charges: "1 Charge", cost: "300 Creds" },
      X: { charges: "Overdrive Beam", cost: "7 Poin Ulti" },
    },
  },
  yoru: {
    origin: "Japan",
    originId: "Jepang",
    protocol: "15",
    difficulty: "Sulit",
    difficultyEn: "Hard",
    specs: {
      Q: { charges: "2 Charges", cost: "250 Creds" },
      E: { charges: "1 Gatecrash", cost: "Gratis (2 Kill Reset)" },
      C: { charges: "1 Decoy", cost: "100 Creds" },
      X: { charges: "Dimensional Drift", cost: "7 Poin Ulti" },
    },
  },
  waylay: {
    origin: "Thailand",
    originId: "Thailand",
    protocol: "27",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "2 Charges", cost: "200 Creds" },
      E: { charges: "1 Charge", cost: "Gratis (Cooldown)" },
      C: { charges: "1 Beacon", cost: "150 Creds" },
      X: { charges: "Prismatic Surge", cost: "8 Poin Ulti" },
    },
  },
  sova: {
    origin: "Russia",
    originId: "Rusia",
    protocol: "06",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "2 Shock Dart", cost: "150 Creds" },
      E: { charges: "1 Recon Bolt", cost: "Gratis (40s CD)" },
      C: { charges: "1 Owl Drone", cost: "400 Creds" },
      X: { charges: "3 Tembakan Salvo", cost: "8 Poin Ulti" },
    },
  },
  fade: {
    origin: "Turkey",
    originId: "Turki",
    protocol: "20",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "1 Seize", cost: "200 Creds" },
      E: { charges: "1 Haunt", cost: "Gratis (40s CD)" },
      C: { charges: "2 Prowler", cost: "250 Creds" },
      X: { charges: "Nightfall Wave", cost: "8 Poin Ulti" },
    },
  },
  breach: {
    origin: "Sweden",
    originId: "Swedia",
    protocol: "13",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "2 Flashpoint", cost: "250 Creds" },
      E: { charges: "1 Fault Line", cost: "Gratis (40s CD)" },
      C: { charges: "1 Aftershock", cost: "200 Creds" },
      X: { charges: "Rolling Thunder", cost: "9 Poin Ulti" },
    },
  },
  brance: {
    origin: "Sweden",
    originId: "Swedia",
    protocol: "13",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "2 Flashpoint", cost: "250 Creds" },
      E: { charges: "1 Fault Line", cost: "Gratis (40s CD)" },
      C: { charges: "1 Aftershock", cost: "200 Creds" },
      X: { charges: "Rolling Thunder", cost: "9 Poin Ulti" },
    },
  },
  skye: {
    origin: "Australia",
    originId: "Australia",
    protocol: "14",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "1 Trailblazer", cost: "300 Creds" },
      E: { charges: "2 Guiding Light", cost: "Gratis (Recharge)" },
      C: { charges: "Regrowth Pool", cost: "150 Creds" },
      X: { charges: "3 Seekers", cost: "8 Poin Ulti" },
    },
  },
  kayo: {
    origin: "Alternate Earth",
    originId: "Bumi Alternatif",
    protocol: "17",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "2 Flash", cost: "250 Creds" },
      E: { charges: "1 ZERO/point", cost: "Gratis (40s CD)" },
      C: { charges: "1 FRAG/ment", cost: "200 Creds" },
      X: { charges: "NULL/cmd Pulse", cost: "8 Poin Ulti" },
    },
  },
  gekko: {
    origin: "United States",
    originId: "Amerika Serikat",
    protocol: "22",
    difficulty: "Mudah",
    difficultyEn: "Easy",
    specs: {
      Q: { charges: "Wingman", cost: "300 Creds (Reclaim)" },
      E: { charges: "Dizzy", cost: "Gratis (Reclaim)" },
      C: { charges: "Mosh Pit", cost: "250 Creds" },
      X: { charges: "Thrash", cost: "8 Poin Ulti" },
    },
  },
  tejo: {
    origin: "Colombia",
    originId: "Kolombia",
    protocol: "28",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "2 Charges", cost: "250 Creds" },
      E: { charges: "1 Signal Jam", cost: "Gratis (40s CD)" },
      C: { charges: "1 Drone Sensor", cost: "200 Creds" },
      X: { charges: "Seismic Overload", cost: "8 Poin Ulti" },
    },
  },
  omen: {
    origin: "Unknown",
    originId: "Tidak Diketahui",
    protocol: "03",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "1 Paranoia", cost: "250 Creds" },
      E: { charges: "2 Dark Cover", cost: "Gratis (30s CD)" },
      C: { charges: "2 Shrouded Step", cost: "150 Creds" },
      X: { charges: "Global Teleport", cost: "7 Poin Ulti" },
    },
  },
  brimstone: {
    origin: "United States",
    originId: "Amerika Serikat",
    protocol: "01",
    difficulty: "Mudah",
    difficultyEn: "Easy",
    specs: {
      Q: { charges: "1 Incendiary", cost: "250 Creds" },
      E: { charges: "3 Sky Smoke", cost: "1 Gratis (100 Creds)" },
      C: { charges: "1 Stim Beacon", cost: "200 Creds" },
      X: { charges: "Orbital Strike", cost: "7 Poin Ulti" },
    },
  },
  viper: {
    origin: "United States",
    originId: "Amerika Serikat",
    protocol: "02",
    difficulty: "Sulit",
    difficultyEn: "Hard",
    specs: {
      Q: { charges: "1 Poison Cloud", cost: "200 Creds" },
      E: { charges: "Toxic Screen", cost: "Gratis (Fuel Cooldown)" },
      C: { charges: "2 Snake Bite", cost: "200 Creds" },
      X: { charges: "Viper's Pit", cost: "9 Poin Ulti" },
    },
  },
  astra: {
    origin: "Ghana",
    originId: "Ghana",
    protocol: "16",
    difficulty: "Sulit",
    difficultyEn: "Hard",
    specs: {
      Q: { charges: "Nova Pulse", cost: "Pakai Astral Star" },
      E: { charges: "Nebula Smoke", cost: "Pakai Astral Star" },
      C: { charges: "Gravity Well", cost: "Pakai Astral Star" },
      X: { charges: "Cosmic Divide", cost: "7 Poin Ulti" },
    },
  },
  harbor: {
    origin: "India",
    originId: "India",
    protocol: "21",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "1 Cove Shield", cost: "350 Creds" },
      E: { charges: "High Tide Wall", cost: "Gratis (40s CD)" },
      C: { charges: "1 Cascade", cost: "150 Creds" },
      X: { charges: "Reckoning Geyser", cost: "7 Poin Ulti" },
    },
  },
  clove: {
    origin: "Scotland",
    originId: "Skotlandia",
    protocol: "25",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "1 Meddle Decay", cost: "250 Creds" },
      E: { charges: "Ruse Smoke", cost: "Gratis (30s CD / Post-Death)" },
      C: { charges: "1 Pick-Me-Up", cost: "100 Creds" },
      X: { charges: "Not Dead Yet", cost: "8 Poin Ulti" },
    },
  },
  cypher: {
    origin: "Morocco",
    originId: "Maroko",
    protocol: "05",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "2 Cyber Cage", cost: "100 Creds" },
      E: { charges: "1 Spycam", cost: "Gratis (45s CD)" },
      C: { charges: "2 Trapwire", cost: "200 Creds" },
      X: { charges: "Neural Theft", cost: "6 Poin Ulti" },
    },
  },
  killjoy: {
    origin: "Germany",
    originId: "Jepang",
    protocol: "04",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "1 Alarmbot", cost: "200 Creds" },
      E: { charges: "1 Turret", cost: "Gratis (20s CD)" },
      C: { charges: "2 Nanoswarm", cost: "200 Creds" },
      X: { charges: "Lockdown Device", cost: "9 Poin Ulti" },
    },
  },
  sage: {
    origin: "China",
    originId: "Tiongkok",
    protocol: "07",
    difficulty: "Mudah",
    difficultyEn: "Easy",
    specs: {
      Q: { charges: "2 Slow Orb", cost: "200 Creds" },
      E: { charges: "1 Healing Orb", cost: "Gratis (45s CD)" },
      C: { charges: "1 Barrier Orb", cost: "400 Creds" },
      X: { charges: "Resurrection", cost: "8 Poin Ulti" },
    },
  },
  chamber: {
    origin: "France",
    originId: "Prancis",
    protocol: "18",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "Headhunter (8 peluru)", cost: "150 Creds / Peluru" },
      E: { charges: "1 Rendezvous Anchor", cost: "Gratis (30s CD)" },
      C: { charges: "1 Trademark Trap", cost: "200 Creds" },
      X: { charges: "Tour de Force Sniper", cost: "8 Poin Ulti" },
    },
  },
  deadlock: {
    origin: "Norway",
    originId: "Norwegia",
    protocol: "23",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "1 Sonic Sensor", cost: "200 Creds" },
      E: { charges: "1 Barrier Mesh", cost: "Gratis (30s CD)" },
      C: { charges: "1 GravNet Grenade", cost: "200 Creds" },
      X: { charges: "Annihilation Cocoon", cost: "7 Poin Ulti" },
    },
  },
  vyse: {
    origin: "Unknown",
    originId: "Tidak Diketahui",
    protocol: "26",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "1 Shear Wall", cost: "200 Creds" },
      E: { charges: "Arc Rose Flash", cost: "Gratis (Rechargeable)" },
      C: { charges: "2 Razorvine", cost: "150 Creds" },
      X: { charges: "Steel Garden EMP", cost: "8 Poin Ulti" },
    },
  },
  veto: {
    origin: "Brazil",
    originId: "Brasil",
    protocol: "29",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "2 Charges", cost: "200 Creds" },
      E: { charges: "1 Signature Trap", cost: "Gratis (40s CD)" },
      C: { charges: "1 Disruption Mine", cost: "200 Creds" },
      X: { charges: "Null Zone Overdrive", cost: "8 Poin Ulti" },
    },
  },
  miks: {
    origin: "Latvia",
    originId: "Latvia",
    protocol: "30",
    difficulty: "Sedang",
    difficultyEn: "Medium",
    specs: {
      Q: { charges: "2 Charges", cost: "250 Creds" },
      E: { charges: "1 Signature Pulse", cost: "Gratis (40s CD)" },
      C: { charges: "1 Echo Beacon", cost: "200 Creds" },
      X: { charges: "Frequency Overload", cost: "8 Poin Ulti" },
    },
  },
};

export function getAgentSpec(slug: string): AgentSpec {
  return (
    agentSpecs[slug.toLowerCase()] || {
      origin: "VALORANT Protocol",
      originId: "Protokol VALORANT",
      protocol: "00",
      difficulty: "Sedang",
      difficultyEn: "Medium",
      specs: {
        Q: { charges: "2 Charges", cost: "200 Creds" },
        E: { charges: "1 Charge", cost: "Gratis (Cooldown)" },
        C: { charges: "1 Charge", cost: "200 Creds" },
        X: { charges: "Ultimate Ability", cost: "8 Poin Ulti" },
      },
    }
  );
}
