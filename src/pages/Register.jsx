import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Check, LockKeyhole, Mail, Phone, ShieldCheck, Stethoscope, User } from 'lucide-react';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

const inputClass = 'w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10';

export default function Register() {
    const [role, setRole] = useState('patient');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const submit = (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        if (form.get('password') !== form.get('confirmPassword')) return setError('Passwords do not match.');
        if (String(form.get('password')).length < 6) return setError('Use at least 6 characters for your password.');
        setError(''); setSubmitted(true); setTimeout(() => navigate('/login'), 1200);
    };

    return <div className="auth-page"><BackButton /><div className="auth-form-wrap"><div className="auth-heading"><div className="auth-logo"><Stethoscope /></div><h1>Create your MediConnect account</h1><p>Join the care network with a role-specific workspace.</p></div><form onSubmit={submit} className="auth-form"><div className="role-switch"><button type="button" className={role === 'patient' ? 'active' : ''} onClick={() => setRole('patient')}>Patient</button><button type="button" className={role === 'doctor' ? 'active' : ''} onClick={() => setRole('doctor')}>Doctor / practitioner</button></div>{submitted && <div className="form-success"><Check size={17} /> Account created. Redirecting to sign in...</div>}{error && <div className="form-error">{error}</div>}<div className="form-grid-clean"><label>Full name<div className="field-with-icon"><User size={17} /><input className={inputClass} name="name" placeholder="Dr. Maya Patel" required /></div></label><label>Email<div className="field-with-icon"><Mail size={17} /><input className={inputClass} type="email" name="email" placeholder="you@example.com" required /></div></label><label>Phone<div className="field-with-icon"><Phone size={17} /><input className={inputClass} name="phone" placeholder="+1 555 012 3456" required /></div></label>{role === 'patient' ? <><label>Date of birth<div className="field-with-icon"><Calendar size={17} /><input className={inputClass} type="date" name="dob" required /></div></label><label>Gender<select className={inputClass} name="gender" defaultValue="" required><option value="" disabled>Select gender</option><option>Female</option><option>Male</option><option>Prefer not to say</option></select></label></> : <><label>Specialization<select className={inputClass} name="specialization" defaultValue="" required><option value="" disabled>Select specialty</option><option>General Physician</option><option>Cardiologist</option><option>Dermatologist</option><option>Neurologist</option><option>Pediatrician</option><option>Orthopedic</option></select></label><label>Medical license<input className={inputClass} name="license" placeholder="License number" required /></label><label>Experience<input className={inputClass} name="experience" type="number" min="0" placeholder="Years" required /></label><label>Consultation fee<input className={inputClass} name="fee" type="number" min="0" placeholder="USD per session" required /></label></>}<label>Password<div className="field-with-icon"><LockKeyhole size={17} /><input className={inputClass} type="password" name="password" placeholder="At least 6 characters" required /></div></label><label>Confirm password<input className={inputClass} type="password" name="confirmPassword" placeholder="Repeat password" required /></label></div><div className="auth-note"><ShieldCheck size={16} /> Demo registration only. No backend account is created.</div><Button type="submit" className="w-full py-3">Create {role} account <ArrowRight size={16} /></Button><p className="auth-switch">Already registered? <Link to="/login">Sign in</Link></p></form></div></div>;
}
