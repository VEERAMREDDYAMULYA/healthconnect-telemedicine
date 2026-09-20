export const DISEASE_SPECIALIZATION_MAP = {
    "chest pain": "Cardiologist",
    "heart problem": "Cardiologist",
    "skin allergy": "Dermatologist",
    "acne": "Dermatologist",
    "headache": "Neurologist",
    "migraine": "Neurologist",
    "bone fracture": "Orthopedic",
    "joint pain": "Orthopedic",
    "fever": "General Physician",
    "cold": "General Physician",
    "ear pain": "ENT Specialist",
    "throat infection": "ENT Specialist",
    "depression": "Psychiatrist",
    "anxiety": "Psychiatrist",
    "pregnancy": "Gynecologist",
    "child fever": "Pediatrician",
    "toothache": "Dentist",
    "cavity": "Dentist",
};

export function getRecommendedSpecialization(query) {
    if (!query) return null;
    const q = query.toLowerCase().trim();

    // 1. Direct Exact Match
    if (DISEASE_SPECIALIZATION_MAP[q]) {
        return DISEASE_SPECIALIZATION_MAP[q];
    }

    // 2. Partial Match loop on original keys
    const diseases = Object.keys(DISEASE_SPECIALIZATION_MAP);
    for (let disease of diseases) {
        if (q.length > 2 && (disease.includes(q) || q.includes(disease))) {
            return DISEASE_SPECIALIZATION_MAP[disease];
        }
    }

    // 3. Fallback synonym keyword matcher
    const keywords = {
        "heart": "Cardiologist",
        "chest": "Cardiologist",
        "skin": "Dermatologist",
        "pimple": "Dermatologist",
        "rash": "Dermatologist",
        "head": "Neurologist",
        "nerve": "Neurologist",
        "bone": "Orthopedic",
        "muscle": "Orthopedic",
        "knee": "Orthopedic",
        "back": "Orthopedic",
        "cough": "General Physician",
        "sick": "General Physician",
        "ear": "ENT Specialist",
        "nose": "ENT Specialist",
        "throat": "ENT Specialist",
        "sad": "Psychiatrist",
        "stress": "Psychiatrist",
        "baby": "Gynecologist",
        "pregnant": "Gynecologist",
        "child": "Pediatrician",
        "kid": "Pediatrician",
        "tooth": "Dentist",
        "teeth": "Dentist",
        "dental": "Dentist"
    };

    for (const [key, spec] of Object.entries(keywords)) {
        if (q.includes(key) && q.length >= key.length) {
            return spec;
        }
    }

    return null;
}