
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Register';
import DoctorsPage from './pages/Doctors';
import AchievementsPage from './pages/Achievements';
import PrescriptionForm from './pages/PrescriptionForm';
import PharmacistDashboard from './pages/PharmacistDashboard';
import { useAuth } from './context/AuthContext';
import { roleHome } from './utils/routeHelpers';
import { AdminDashboard as PlatformAdminDashboard, AppointmentsPage, ArchitecturePage, BookingPage, ConsultationPage, DoctorDashboard as PlatformDoctorDashboard, DoctorProfile, DoctorsPage as PlatformDoctorsPage, MonitoringPage, NotificationsPage, PatientsPage, PatientDashboard as PlatformPatientDashboard, PrescriptionsPage, RecordsPage } from './pages/PlatformPages';

function ProtectedRoute({ children, roles }) {
  const { user, isLoading } = useAuth();
  if (isLoading) return <div className="route-loading"><div className="loading-spinner" />Loading your workspace...</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (roles && !roles.includes(user.role)) return <Navigate to={roleHome(user.role)} replace />;
  return children;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/doctors" element={<PlatformDoctorsPage />} />
      <Route path="/achievements" element={<AchievementsPage />} />
      <Route path="/patient-dashboard" element={<ProtectedRoute roles={['patient']}><PlatformPatientDashboard /></ProtectedRoute>} />
      <Route path="/doctor-dashboard" element={<ProtectedRoute roles={['doctor']}><PlatformDoctorDashboard /></ProtectedRoute>} />
      <Route path="/prescription/:appointmentId" element={<PrescriptionForm />} />
      <Route path="/admin-dashboard" element={<ProtectedRoute roles={['admin']}><PlatformAdminDashboard /></ProtectedRoute>} />
      <Route path="/pharmacist-dashboard" element={<PharmacistDashboard />} />
      <Route path="/dashboard" element={<ProtectedRoute><DashboardRedirect /></ProtectedRoute>} />
      <Route path="/doctor/:id" element={<ProtectedRoute><DoctorProfile /></ProtectedRoute>} />
      <Route path="/book/:id" element={<ProtectedRoute roles={['patient']}><BookingPage /></ProtectedRoute>} />
      <Route path="/appointments" element={<ProtectedRoute><AppointmentsPage /></ProtectedRoute>} />
      <Route path="/records" element={<ProtectedRoute><RecordsPage /></ProtectedRoute>} />
      <Route path="/prescriptions" element={<ProtectedRoute><PrescriptionsPage /></ProtectedRoute>} />
      <Route path="/monitoring" element={<ProtectedRoute><MonitoringPage /></ProtectedRoute>} />
      <Route path="/consultation" element={<ProtectedRoute><ConsultationPage /></ProtectedRoute>} />
      <Route path="/architecture" element={<ProtectedRoute roles={['admin']}><ArchitecturePage /></ProtectedRoute>} />
      <Route path="/notifications" element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>} />
      <Route path="/patients" element={<ProtectedRoute roles={['doctor']}><PatientsPage /></ProtectedRoute>} />
      <Route path="/about" element={<HomePage />} />
      <Route path="/services" element={<HomePage />} />
      <Route path="/contact" element={<HomePage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/doctors/:id" element={<DoctorProfile />} />
      <Route path="/book-appointment" element={<ProtectedRoute roles={['patient']}><BookingPage /></ProtectedRoute>} />
      <Route path="/medical-records" element={<ProtectedRoute><RecordsPage /></ProtectedRoute>} />
    </Routes>
  );
}

function DashboardRedirect() {
  const { user } = useAuth();
  return <Navigate to={roleHome(user?.role)} replace />;
}

export default App;
