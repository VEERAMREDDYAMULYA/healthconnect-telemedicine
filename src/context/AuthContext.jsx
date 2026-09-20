
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { users } from '../data/mockData';
import { issueMockToken, clearSession } from '../services/mockApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = sessionStorage.getItem('mediconnect-user') || localStorage.getItem('mediconnect-user');
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const isLoading = false;

    const login = (email, password, role, remember = false) => {
        const seedUser = users.find((u) => u.email === email && u.password === password && (!role || u.role === role));
        const foundUser = seedUser || (email.includes('@') && password.length >= 1 && role ? {
            id: `demo-${role}`,
            email,
            role,
            name: role === 'doctor' ? 'Dr. Demo Practitioner' : role === 'admin' ? 'Demo Administrator' : 'Demo Patient',
        } : null);
        if (foundUser) {
            setUser(foundUser);
            const storage = remember ? localStorage : sessionStorage;
            storage.setItem('mediconnect-user', JSON.stringify(foundUser));
            sessionStorage.setItem('mediconnect-token', issueMockToken(foundUser));
            return { success: true, role: foundUser.role };
        }
        return { success: false, message: 'Enter an email, password, and workspace to continue.' };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('mediconnect-user');
        sessionStorage.removeItem('mediconnect-user');
        clearSession();
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
