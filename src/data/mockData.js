
export const users = [
    { id: 1, email: "patient@medico.com", password: "123", role: "patient", name: "John Doe" },
    { id: 2, email: "doctor@medico.com", password: "123", role: "doctor", name: "Dr. Rahul Sharma" },
    { id: 3, email: "admin@medico.com", password: "123", role: "admin", name: "Admin User" },
    { id: 4, email: "pharma@medico.com", password: "123", role: "pharmacist", name: "Pharma Staff" },
];

export const doctors = [
    { id: 2, name: "Dr. Rahul Sharma", specialty: "Cardiology" },
    { id: 5, name: "Dr. Priya Reddy", specialty: "Dermatology" },
    { id: 6, name: "Dr. Arjun Kumar", specialty: "Orthopedics" },
];

export const appointments = [
    { id: 101, patientName: "John Doe", doctorName: "Dr. Rahul Sharma", date: "2024-03-20", time: "10:00 AM", symptoms: "Chest pain", status: "Scheduled" },
    { id: 102, patientName: "Alice Smith", doctorName: "Dr. Priya Reddy", date: "2024-03-21", time: "11:30 AM", symptoms: "Skin rash", status: "Completed" },
];

export const prescriptions = [
    { id: 201, patientName: "John Doe", doctorName: "Dr. Rahul Sharma", diagnosis: "Hypertension", medicines: "Amlodipine 5mg - Once daily", date: "2024-03-15" },
];

export const medicines = [
    { id: 301, name: "Paracetamol", stock: 50, price: 5 },
    { id: 302, name: "Amoxicillin", stock: 20, price: 12 },
    { id: 303, name: "Metformin", stock: 35, price: 8 },
];
