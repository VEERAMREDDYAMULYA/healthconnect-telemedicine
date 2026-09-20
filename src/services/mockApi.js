import { PREDEFINED_DOCTORS } from '../data/doctors';
import { appointments as seedAppointments, prescriptions as seedPrescriptions } from '../data/mockData';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const appointmentsKey = 'mediconnect-appointments';
const tokenKey = 'mediconnect-token';

export const getDoctors = () => PREDEFINED_DOCTORS.map((doctor, index) => ({
    ...doctor,
    fee: [65, 80, 95, 70, 60, 55, 75, 90, 85, 50, 100, 72][index] || 70,
    status: index % 4 === 0 ? 'In Consultation' : index % 5 === 0 ? 'Offline' : 'Available',
    nextSlot: index % 4 === 0 ? 'Today, 4:30 PM' : 'Today, 6:00 PM',
    languages: ['English', 'Hindi', 'Telugu'],
    qualification: 'MD, MBBS',
    consultationTypes: ['Video', 'Audio', 'Chat'],
}));

export const getAppointments = () => {
    const stored = localStorage.getItem(appointmentsKey);
    return stored ? JSON.parse(stored) : seedAppointments.map((appointment) => ({
        ...appointment,
        id: `APT-${appointment.id}`,
        type: 'Video consultation',
        patientName: appointment.patientName,
    }));
};

export const saveAppointment = (appointment) => {
    const next = [appointment, ...getAppointments()];
    localStorage.setItem(appointmentsKey, JSON.stringify(next));
    return appointment;
};

export const getPrescriptions = () => seedPrescriptions.map((item) => ({
    ...item,
    status: 'Active',
    medicines: [{ name: 'Amlodipine', dosage: '5 mg', frequency: 'Once daily', duration: '30 days' }],
    instructions: 'Take after breakfast and monitor blood pressure regularly.',
}));

export const getMedicalRecords = () => [
    { id: 'MR-1042', title: 'Annual health review', doctor: 'Dr. Rahul Sharma', type: 'Consultation', date: 'Mar 15, 2024', status: 'Reviewed' },
    { id: 'MR-1038', title: 'Complete blood count', doctor: 'CityCare Diagnostics', type: 'Lab report', date: 'Mar 12, 2024', status: 'Available' },
    { id: 'MR-1019', title: 'Cardiology follow-up', doctor: 'Dr. Neha Gupta', type: 'Consultation', date: 'Feb 28, 2024', status: 'Reviewed' },
];

export const getMonitoringMetrics = () => [
    { label: 'Heart rate', value: '72', unit: 'BPM', range: '60-100', status: 'Normal', trend: '+3%', color: 'blue' },
    { label: 'Blood oxygen', value: '98', unit: '%', range: '95-100', status: 'Normal', trend: '+1%', color: 'cyan' },
    { label: 'Blood pressure', value: '120/80', unit: 'mmHg', range: '<130/80', status: 'Normal', trend: '-2%', color: 'violet' },
    { label: 'Temperature', value: '98.4', unit: '°F', range: '97-99', status: 'Normal', trend: 'Stable', color: 'amber' },
];

export const getNotifications = () => [
    { id: 1, title: 'Appointment confirmed', body: 'Your video visit with Dr. Rahul Sharma is confirmed for today at 10:00 AM.', time: '8 min ago', unread: true, kind: 'appointment' },
    { id: 2, title: 'Prescription added', body: 'A new prescription is ready to review in your health records.', time: 'Yesterday', unread: true, kind: 'prescription' },
    { id: 3, title: 'Health check-in reminder', body: 'Your evening blood pressure check-in is due at 7:00 PM.', time: 'Yesterday', unread: false, kind: 'monitoring' },
];

export const getAdminStats = () => ({ patients: '24,680', doctors: '518', appointments: '1,284', active: '42', pending: '18', completed: '9,842' });

export const issueMockToken = (user) => `demo.jwt.${btoa(JSON.stringify({ sub: user.id, role: user.role, iat: Date.now() }))}`;

export const clearSession = () => localStorage.removeItem(tokenKey);

export const isDemoData = true;
