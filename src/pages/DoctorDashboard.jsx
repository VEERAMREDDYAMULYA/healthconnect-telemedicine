
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';
import { appointments } from '../data/mockData';
import { CheckCircle, Clock, XCircle, FilePlus, User, Search, Filter } from 'lucide-react';

const DoctorDashboard = () => {
    // Filter appointments for the logged-in doctor (mock: Dr. Rahul Sharma)
    const myAppointments = appointments.filter(apt => apt.doctorName === 'Dr. Rahul Sharma' || true); // Show all for demo

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className="flex pt-16 sm:pt-20">
                <Sidebar />
                <main className="flex-1 md:ml-64 p-6 sm:p-8 max-w-7xl mx-auto w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 fade-in">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Doctor Dashboard</h1>
                            <p className="text-gray-500 mt-1">Good morning, Dr. Sharma. You have 12 appointments today.</p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="gap-2 bg-white">
                                <Clock size={16} /> Schedule
                            </Button>
                            <Button className="gap-2 shadow-lg shadow-blue-500/20">
                                <FilePlus size={16} /> Create Report
                            </Button>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <Card className="bg-white border-blue-100 hover:border-blue-300 transition-colors group cursor-pointer" hoverEffect>
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Clock size={24} />
                                </div>
                                <span className="text-xs font-semibold px-2 py-1 bg-blue-50 text-blue-600 rounded-lg">Today</span>
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
                            <div className="text-sm text-gray-500">Pending Appointments</div>
                        </Card>

                        <Card className="bg-white border-purple-100 hover:border-purple-300 transition-colors group cursor-pointer" hoverEffect>
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                    <FilePlus size={24} />
                                </div>
                                <span className="text-xs font-semibold px-2 py-1 bg-purple-50 text-purple-600 rounded-lg">+2</span>
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-1">5</div>
                            <div className="text-sm text-gray-500">New Reports</div>
                        </Card>

                        <Card className="bg-white border-emerald-100 hover:border-emerald-300 transition-colors group cursor-pointer" hoverEffect>
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                    <User size={24} />
                                </div>
                                <span className="text-xs font-semibold px-2 py-1 bg-emerald-50 text-emerald-600 rounded-lg">+15%</span>
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-1">1.2k</div>
                            <div className="text-sm text-gray-500">Total Patients</div>
                        </Card>
                        <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-blue-500/30" hoverEffect>
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                                    <CheckCircle size={24} />
                                </div>
                            </div>
                            <div className="text-3xl font-bold mb-1">98%</div>
                            <div className="text-sm text-blue-100">Patient Satisfaction</div>
                        </Card>
                    </div>

                    {/* Filters & Search */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                        <div className="relative w-full sm:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search patients by name or ID..."
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                            />
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-medium text-gray-600 transition-colors">
                                <Filter size={16} /> Filter
                            </button>
                            <select className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-600 outline-none focus:ring-2 focus:ring-blue-100 cursor-pointer">
                                <option>All Status</option>
                                <option>Pending</option>
                                <option>Completed</option>
                            </select>
                        </div>
                    </div>

                    {/* Appointments Table */}
                    <Card className="overflow-hidden border-0 shadow-lg shadow-gray-200/50">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-100">
                                <thead className="bg-gray-50/50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Patient</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date & Time</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Diagnosis / Symptoms</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-50">
                                    {myAppointments.map((apt) => (
                                        <tr key={apt.id} className="hover:bg-blue-50/30 transition-colors group">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 flex items-center justify-center font-bold text-sm border-2 border-white shadow-sm group-hover:scale-105 transition-transform">
                                                        {apt.patientName.charAt(0)}
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-bold text-gray-900">{apt.patientName}</div>
                                                        <div className="text-xs text-gray-500">ID: #{apt.id}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium text-gray-900">{apt.time}</span>
                                                    <span className="text-xs text-gray-500">{apt.date}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-600 truncate max-w-xs px-3 py-1 bg-gray-50 rounded-full border border-gray-100 inline-block">
                                                    {apt.symptoms || apt.diagnosis}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${apt.status === 'Completed'
                                                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                                                        : 'bg-amber-50 text-amber-700 border border-amber-100'
                                                    }`}>
                                                    {apt.status || 'Pending'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Link to={`/prescription/${apt.id}`}>
                                                        <Button size="sm" className="h-8 px-3 text-xs bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-100 shadow-none">
                                                            Prescribe
                                                        </Button>
                                                    </Link>
                                                    <button className="h-8 w-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                                                        <XCircle size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-sm text-gray-500">Showing 1 to {myAppointments.length} of {myAppointments.length} entries</span>
                            <div className="flex gap-2">
                                <button className="px-3 py-1 rounded border border-gray-300 bg-white text-sm text-gray-500 hover:bg-gray-50 disabled:opacity-50">Previous</button>
                                <button className="px-3 py-1 rounded border border-gray-300 bg-white text-sm text-gray-500 hover:bg-gray-50">Next</button>
                            </div>
                        </div>
                    </Card>
                </main>
            </div>
        </div>
    );
};

export default DoctorDashboard;
