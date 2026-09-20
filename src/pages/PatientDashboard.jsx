
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { doctors, appointments as initialAppointments } from '../data/mockData';
import { Calendar, Clock, Activity, FileText, Plus } from 'lucide-react';

const PatientDashboard = () => {
    const [myAppointments, setMyAppointments] = useState(initialAppointments);
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [date, setDate] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [showBookingSuccess, setShowBookingSuccess] = useState(false);

    const handleBookAppointment = (e) => {
        e.preventDefault();
        const newAppointment = {
            id: myAppointments.length + 101,
            patientName: "John Doe",
            doctorName: doctors.find(d => d.id === parseInt(selectedDoctor))?.name,
            date,
            time: "10:00 AM", // Mock time
            symptoms,
            status: "Scheduled"
        };
        setMyAppointments([newAppointment, ...myAppointments]);
        setShowBookingSuccess(true);
        setTimeout(() => setShowBookingSuccess(false), 3000);
        // Reset form
        setSelectedDoctor('');
        setDate('');
        setSymptoms('');
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className="flex pt-16 sm:pt-20">
                <Sidebar />
                <main className="flex-1 md:ml-64 p-6 sm:p-8 max-w-7xl mx-auto w-full">
                    <div className="mb-8 fade-in">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Patient Dashboard</h1>
                        <p className="text-gray-500 mt-1">Welcome back, John Doe. Here's your health overview.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column: Recent Activity & Vitals */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Vitals */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-none shadow-blue-500/20" hoverEffect>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm"><Activity size={20} className="text-white" /></div>
                                        <span className="text-sm font-medium text-blue-50">Blood Pressure</span>
                                    </div>
                                    <p className="text-3xl font-bold text-white mb-1">120/80</p>
                                    <p className="text-xs text-blue-100">Normal range</p>
                                </Card>
                                <Card className="bg-white border-emerald-100" hoverEffect>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600"><Activity size={20} /></div>
                                        <span className="text-sm font-medium text-gray-600">Heart Rate</span>
                                    </div>
                                    <p className="text-3xl font-bold text-gray-900 mb-1">72 <span className="text-sm font-normal text-gray-400">bpm</span></p>
                                    <p className="text-xs text-emerald-600 font-medium">Healthy</p>
                                </Card>
                            </div>

                            {/* Upcoming Appointments List */}
                            <Card>
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-lg font-bold text-gray-900">Upcoming Appointments</h2>
                                    <Button variant="ghost" size="sm" className="text-blue-600">View All</Button>
                                </div>
                                <div className="space-y-4">
                                    {myAppointments.map((apt) => (
                                        <div key={apt.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-200 group">
                                            <div className="flex items-center gap-4 mb-3 sm:mb-0">
                                                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                    {apt.doctorName.charAt(0)}
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">{apt.doctorName}</h3>
                                                    <div className="text-sm text-gray-500 flex items-center gap-2">
                                                        <Calendar size={14} /> {apt.date} • <Clock size={14} /> {apt.time}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${apt.status === 'Confirmed' || apt.status === 'Scheduled' ? 'bg-green-50 text-green-700 border border-green-100' :
                                                        apt.status === 'Completed' ? 'bg-gray-100 text-gray-600 border border-gray-200' :
                                                            'bg-yellow-50 text-yellow-700 border border-yellow-100'}`}>
                                                    {apt.status}
                                                </span>
                                                <Button size="sm" variant="outline" className="h-8 text-xs">Details</Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>

                        {/* Right Column: Booking Form */}
                        <div className="space-y-8">
                            <Card className="sticky top-24 border-blue-100 shadow-xl shadow-blue-500/5">
                                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 -m-6 mb-6 p-6 rounded-t-xl">
                                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                        <Plus className="bg-white/20 rounded-full p-1" size={24} /> Book Appointment
                                    </h2>
                                    <p className="text-blue-100 text-sm mt-1">Schedule a consultation with a specialist.</p>
                                </div>
                                <form onSubmit={handleBookAppointment} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Specialist</label>
                                        <div className="relative">
                                            <select
                                                className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all appearance-none text-gray-900"
                                                value={selectedDoctor}
                                                onChange={(e) => setSelectedDoctor(e.target.value)}
                                                required
                                            >
                                                <option value="">Choose a doctor...</option>
                                                {doctors.map(doc => (
                                                    <option key={doc.id} value={doc.id}>{doc.name} - {doc.specialty}</option>
                                                ))}
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <Input
                                        label="Preferred Date"
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        required
                                    />
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Symptoms</label>
                                        <textarea
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400 outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all resize-none"
                                            rows="3"
                                            placeholder="Briefly describe what you're feeling..."
                                            value={symptoms}
                                            onChange={(e) => setSymptoms(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>
                                    <Button type="submit" className="w-full py-3 shadow-lg shadow-blue-500/20">Confirm Booking</Button>

                                    {showBookingSuccess && (
                                        <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 p-4 rounded-xl text-sm flex items-center gap-3 animate-pulse">
                                            <div className="bg-emerald-100 p-1 rounded-full"><Plus size={14} className="transform rotate-45" /></div>
                                            <span>Appointment booked successfully!</span>
                                        </div>
                                    )}
                                </form>
                            </Card>

                            <Card>
                                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <FileText className="text-purple-500" /> Recent Reports
                                </h2>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition cursor-pointer group">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg group-hover:bg-purple-100 transition-colors">
                                                <FileText size={18} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">Blood Test.pdf</p>
                                                <p className="text-xs text-gray-500">Mar 12, 2024</p>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="sm" className="text-gray-400 group-hover:text-blue-600">Download</Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PatientDashboard;
