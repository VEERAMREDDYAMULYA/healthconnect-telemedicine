import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/navbar/Sidebar';
import TopNavbar from '../components/navbar/TopNavbar';
import Footer from '../components/ui/Footer';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="lg:pl-64">
        <TopNavbar onMenuClick={() => setSidebarOpen((o) => !o)} />
        <main className="p-4 lg:p-6 min-h-[calc(100vh-190px)]">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
