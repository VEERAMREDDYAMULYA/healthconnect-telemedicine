
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Users, FileText, Settings, User, LogOut, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
    const { user, logout } = useAuth();
    const location = useLocation();

    if (!user) return null;

    const links = [
        { name: 'Dashboard', path: `/${user.role}-dashboard`, icon: <Home size={20} /> },
        { name: 'Appointments', path: '/appointments', icon: <Calendar size={20} /> },
        { name: 'Profile', path: '/profile', icon: <User size={20} /> },
        { name: 'Reports', path: '/reports', icon: <FileText size={20} /> },
        { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
    ];

    return (
        <div className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 pt-24 pb-4 bg-white border-r border-gray-100 shadow-sm z-40 transition-all duration-300">
            <div className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-4 mt-2">Main Menu</div>
                {links.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`
                group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200
                ${isActive
                                    ? 'bg-blue-50 text-blue-600 shadow-sm font-medium'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                }
              `}
                        >
                            <div className="flex items-center gap-3">
                                <span className={`${isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}`}>
                                    {link.icon}
                                </span>
                                <span>{link.name}</span>
                            </div>
                            {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>}
                        </Link>
                    );
                })}
            </div>

            <div className="p-4 mt-auto border-t border-gray-100">
                <button
                    onClick={logout}
                    className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors font-medium text-sm group"
                >
                    <LogOut size={20} className="group-hover:scale-110 transition-transform" />
                    <span>Sign Out</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
