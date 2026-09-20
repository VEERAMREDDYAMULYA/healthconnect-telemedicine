import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Menu as FiMenu, X as FiX } from 'lucide-react';
import Footer from '../components/ui/Footer';

export default function PublicLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white backdrop-blur-sm border-b border-[#E2E8F0] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="font-bold text-xl text-[#2563EB] hover:text-[#1d4ed8] transition-colors">MedConnect</Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-[#64748B] hover:text-[#2563EB] font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] after:transition-all hover:after:w-full">Home</Link>
              <Link to="/about" className="text-[#64748B] hover:text-[#2563EB] font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] after:transition-all hover:after:w-full">About</Link>
              <Link to="/doctors" className="text-[#64748B] hover:text-[#2563EB] font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] after:transition-all hover:after:w-full">Doctors</Link>
              <Link to="/achievements" className="text-[#64748B] hover:text-[#2563EB] font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] after:transition-all hover:after:w-full">Achievements</Link>
              <Link to="/login" className="text-[#64748B] hover:text-[#2563EB] font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] after:transition-all hover:after:w-full">Login</Link>
              <Link to="/register" className="bg-[#2563EB] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#1d4ed8] transition-all duration-200 shadow-sm hover:shadow-md">Get Started</Link>
            </nav>
            <button type="button" onClick={() => setMobileOpen((o) => !o)} className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100" aria-label="Menu">
              {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
          {mobileOpen && (
            <div className="md:hidden py-4 border-t border-[#E2E8F0] flex flex-col gap-2">
              <Link to="/" className="py-2 text-[#64748B] hover:text-[#2563EB] font-medium transition-colors" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link to="/about" className="py-2 text-[#64748B] hover:text-[#2563EB] font-medium transition-colors" onClick={() => setMobileOpen(false)}>About</Link>
              <Link to="/doctors" className="py-2 text-[#64748B] hover:text-[#2563EB] font-medium transition-colors" onClick={() => setMobileOpen(false)}>Doctors</Link>
              <Link to="/achievements" className="py-2 text-[#64748B] hover:text-[#2563EB] font-medium transition-colors" onClick={() => setMobileOpen(false)}>Achievements</Link>
              <Link to="/login" className="py-2 text-[#64748B] hover:text-[#2563EB] font-medium transition-colors" onClick={() => setMobileOpen(false)}>Login</Link>
              <Link to="/register" className="py-2 text-[#2563EB] font-semibold" onClick={() => setMobileOpen(false)}>Get Started</Link>
            </div>
          )}
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
