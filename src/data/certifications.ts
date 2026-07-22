// ─── Certificaciones ─────────────────────────────────────────────────────────
// Para agregar una certificación: añade un objeto al array.
// credentialUrl → link directo a la credencial (opcional).

export interface Certification {
  name:          string;   // Nombre oficial (mismo en ambos idiomas)
  issuer:        string;
  issuerType:    "google" | "certiprof";
  date?:         string;   // "jul. 2026"
  credentialId?: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    name:         "Introduction to AI",
    issuer:       "Google",
    issuerType:   "google",
    date:         "jul. 2026",
    credentialId: "G8H2XAWF99CC",
  },
  {
    name:         "Foundations of Cybersecurity",
    issuer:       "Google",
    issuerType:   "google",
    date:         "jul. 2026",
    credentialId: "MDUE9NS3LTIW",
  },
  {
    name:         "Crash Course on Python",
    issuer:       "Google",
    issuerType:   "google",
    date:         "jul. 2026",
    credentialId: "7GF1AMWKLROP",
  },
  {
    name:         "Scrum Master Professional Certification - SMPC\u00ae",
    issuer:       "CertiProf",
    issuerType:   "certiprof",
    date:         "nov. 2025",
    credentialId: "37f2a1ee-ec66-4be4-a7de-741acea93ff1",
  },
  {
    name:         "Scrum Foundation Professional Certification SFPC\u2122",
    issuer:       "CertiProf",
    issuerType:   "certiprof",
    date:         "ago. 2023",
    credentialId: "88245992",
  },
];
