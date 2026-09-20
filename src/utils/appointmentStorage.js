import { appointments as MOCK_APPOINTMENTS } from '../data/mockData';

export const getAppointments = () => {
    const stored = localStorage.getItem("appointments");
    if (!stored) {
        // Seed with mocks initially so dashboard isn't completely empty
        localStorage.setItem("appointments", JSON.stringify(MOCK_APPOINTMENTS));
        return MOCK_APPOINTMENTS;
    }
    return JSON.parse(stored);
};

export const saveAppointment = (appointment) => {
    const existing = getAppointments();

    appointment.id = appointment.id || `apt_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;

    existing.push(appointment);

    localStorage.setItem(
        "appointments",
        JSON.stringify(existing)
    );
};

export const cancelAppointment = (id) => {
    const existing = getAppointments();
    const updated = existing.map(apt => apt.id === id ? { ...apt, status: 'cancelled' } : apt);
    localStorage.setItem("appointments", JSON.stringify(updated));
};