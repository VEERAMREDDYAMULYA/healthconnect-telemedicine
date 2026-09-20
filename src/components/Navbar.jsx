
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Menu, Bell, X } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
    const { user, logout } = useAuth();
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

    const scrollToSection = (id) => {
        if (location.pathname !== '/') {
            window.location.href = `/#${id}`;
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="bg-blue-600 group-hover:bg-blue-700 transition-colors p-2 rounded-xl shadow-lg shadow-blue-500/20">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="white" fillOpacity="0.2" />
                                    <path d="M12 6V18M6 12H18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-gray-900 tracking-tight font-display">MediConnect</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {!user ? (
                            <>
                                <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
                                <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</button>
                                <Link to="/services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Services</Link>
                                <Link to="/doctors" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Doctors</Link>
                                <Link to="/achievements" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Achievements</Link>
                                <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</button>
                                <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
                                    <Link to="/login">
                                        <Button variant="ghost" size="sm">Log in</Button>
                                    </Link>
                                    <Link to="/register">
                                        <Button size="sm" className="shadow-blue-500/20">Get Started</Button>
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center gap-6">
                                <Link to={
                                    user.role === 'patient' ? '/patient-dashboard' :
                                        user.role === 'doctor' ? '/doctor-dashboard' :
                                            user.role === 'admin' ? '/admin-dashboard' :
                                                '/pharmacist-dashboard'
                                } className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                                    Dashboard
                                </Link>

                                <div className="h-6 w-px bg-gray-200"></div>

                                <button className="relative p-2 text-gray-500 hover:bg-gray-100/50 rounded-xl transition-colors">
                                    <Bell size={20} />
                                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                                </button>

                                <div className="relative group">
                                    <button className="flex items-center gap-3 p-1 pr-3 rounded-full hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                                        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div className="text-left hidden lg:block">
                                            <p className="text-sm font-semibold text-gray-900 leading-none">{user.name}</p>
                                            <p className="text-xs text-gray-500 mt-0.5 capitalize">{user.role}</p>
                                        </div>
                                    </button>

                                    {/* Dropdown would go here in a real app */}
                                </div>

                                <Button
                                    onClick={logout}
                                    variant="ghost"
                                    size="sm"
                                    className="text-red-500 hover:bg-red-50 hover:text-red-600"
                                >
                                    Log out
                                </Button>
                            </div>
                        )}
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Toggle navigation">
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
                {mobileOpen && <div className="md:hidden border-t border-gray-100 py-4 space-y-2">
                    <Link onClick={() => setMobileOpen(false)} to="/" className="mobile-nav-link">Home</Link>
                    <button onClick={() => { setMobileOpen(false); scrollToSection('about'); }} className="mobile-nav-link w-full text-left">About</button>
                    <Link onClick={() => setMobileOpen(false)} to="/services" className="mobile-nav-link">Services</Link>
                    <Link onClick={() => setMobileOpen(false)} to="/doctors" className="mobile-nav-link">Doctors</Link>
                    <Link onClick={() => setMobileOpen(false)} to="/achievements" className="mobile-nav-link">Achievements</Link>
                    <button onClick={() => { setMobileOpen(false); scrollToSection('contact'); }} className="mobile-nav-link w-full text-left">Contact</button>
                    {!user ? <div className="flex gap-2 pt-2"><Link onClick={() => setMobileOpen(false)} to="/login" className="flex-1"><Button variant="ghost" size="sm" className="w-full">Log in</Button></Link><Link onClick={() => setMobileOpen(false)} to="/register" className="flex-1"><Button size="sm" className="w-full">Get started</Button></Link></div> : <button onClick={logout} className="mobile-nav-link w-full text-left text-red-500">Sign out</button>}
                </div>}
            </div>
        </nav>
    );
};

export default Navbar;
