export const roleHome = (role) => role === 'doctor' ? '/doctor-dashboard' : role === 'admin' ? '/admin-dashboard' : '/patient-dashboard';
