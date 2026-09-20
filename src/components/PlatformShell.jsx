import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Activity, Bell, CalendarDays, ClipboardList, FileText, LayoutDashboard, LogOut, Menu, MessageSquare, Search, Settings, Stethoscope } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import BackButton from './BackButton';

const roleLinks = {
    patient: [['/dashboard', 'Overview', LayoutDashboard], ['/doctors', 'Find doctors', Search], ['/appointments', 'Appointments', CalendarDays], ['/records', 'Medical records', FileText], ['/prescriptions', 'Prescriptions', ClipboardList], ['/monitoring', 'Monitoring', Activity]],
    doctor: [['/dashboard', 'Overview', LayoutDashboard], ['/appointments', 'Appointments', CalendarDays], ['/patients', 'Patients', ClipboardList], ['/prescriptions', 'Prescriptions', FileText], ['/monitoring', 'Availability', Activity], ['/consultation', 'Consultation room', MessageSquare]],
    admin: [['/dashboard', 'Overview', LayoutDashboard], ['/doctors', 'Doctors', Stethoscope], ['/appointments', 'Appointments', CalendarDays], ['/records', 'System records', FileText], ['/architecture', 'Architecture', Activity]],
};


export default function PlatformShell({ children }) {
    const { user, logout } = useAuth();
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);
    const links = user ? roleLinks[user.role] || roleLinks.patient : [];

    return <div className="platform-shell">
        <aside className={`app-sidebar ${mobileOpen ? 'is-open' : ''}`}>
            <div className="sidebar-brand"><span className="brand-mark"><Stethoscope size={20} /></span><span>Medi<span>Connect</span></span></div>
            <div className="workspace-label">{user?.role || 'public'} workspace</div>
            <nav className="sidebar-nav">
                {links.map(([to, label, Icon]) => { const NavIcon = Icon; return <NavLink key={to} to={to} onClick={() => setMobileOpen(false)} className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}><NavIcon size={18} /><span>{label}</span></NavLink>; })}
            </nav>
            <div className="sidebar-footer"><NavLink to={user ? '/settings' : '/login'} className="sidebar-link"><Settings size={18} /><span>{user ? 'Settings' : 'Sign in'}</span></NavLink>{user && <button className="sidebar-link logout-link" onClick={logout}><LogOut size={18} /><span>Sign out</span></button>}</div>
        </aside>
        {mobileOpen && <button className="sidebar-backdrop" aria-label="Close navigation" onClick={() => setMobileOpen(false)} />}
        <div className="app-main">
            <header className="app-header"><button className="icon-button mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu size={20} /></button><div className="header-context"><span className="eyebrow">{user?.role === 'admin' ? 'Operations center' : user ? 'Care workspace' : 'Public directory'}</span><strong>{location.pathname === '/doctors' ? 'Doctor directory' : 'Good morning, ' + (user?.name?.split(' ')[0] || 'there')}</strong></div><div className="header-actions"><Link className="header-icon" to={user ? '/notifications' : '/login'} aria-label="Notifications"><Bell size={19} /><span className="notification-dot" /></Link><div className="profile-chip"><span className="avatar">{user?.name?.charAt(0) || 'G'}</span><span className="profile-copy"><strong>{user?.name || 'Guest'}</strong><small>{user?.role || 'public preview'}</small></span></div></div></header>
            <main className="app-content"><BackButton fallback={user ? '/dashboard' : '/'} />{children}</main>
        </div>
    </div>;
}

