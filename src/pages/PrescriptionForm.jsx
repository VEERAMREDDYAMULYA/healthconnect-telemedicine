
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { appointments } from '../data/mockData';
import { Save, CheckCircle, ArrowLeft, Pill, FileText, ChevronRight } from 'lucide-react';

const PrescriptionForm = () => {
    const { appointmentId } = useParams();
    const navigate = useNavigate();
    const appointment = appointments.find((a) => a.id === parseInt(appointmentId)) || {
        id: appointmentId,
        patientName: "Unknown Patient",
        doctorName: "Dr. Rahul Sharma",
        date: "2024-03-24",
        symptoms: "N/A",
    };

    const [diagnosis, setDiagnosis] = useState('');
    const [medicines, setMedicines] = useState([{ name: '', dosage: '', duration: '' }]);
    const [submitted, setSubmitted] = useState(false);

    const handleAddMedicine = () => {
        setMedicines([...medicines, { name: '', dosage: '', duration: '' }]);
    };

    const handleMedicineChange = (index, field, value) => {
        const newMedicines = [...medicines];
        newMedicines[index][field] = value;
        setMedicines(newMedicines);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            navigate('/doctor-dashboard');
        }, 2000);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full animate-bounce-in border border-blue-100">
                    <div className="mb-6 mx-auto w-20 h-20 flex items-center justify-center bg-green-100 rounded-full text-green-600 shadow-sm">
                        <CheckCircle size={48} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Prescription Sent!</h2>
                    <p className="text-gray-500 mb-8">The prescription has been successfully sent to the patient and pharmacy securely.</p>
                    <Button onClick={() => navigate('/doctor-dashboard')} className="w-full">
                        Back to Dashboard
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className="flex pt-16 sm:pt-20">
                <Sidebar />
                <main className="flex-1 md:ml-64 p-6 sm:p-8 max-w-5xl mx-auto w-full">
                    <div className="mb-6 fade-in">
                        <button onClick={() => navigate(-1)} className="flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 mb-4 transition-colors">
                            <ArrowLeft size={16} className="mr-1" /> Back to Dashboard
                        </button>
                        <h1 className="text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
                            <FileText className="text-blue-500" /> Write Prescription
                        </h1>
                        <p className="text-gray-500 mt-1 flex items-center gap-2">
                            Patient ID: #{appointment.id} <span className="w-1 h-1 bg-gray-300 rounded-full"></span> {appointment.date}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Patient Info Card */}
                        <div className="lg:col-span-1 space-y-6">
                            <Card className="bg-white border-blue-100 shadow-lg shadow-blue-500/5">
                                <div className="p-4 border-b border-gray-100 bg-blue-50/50">
                                    <h3 className="font-bold text-gray-900">Patient Details</h3>
                                </div>
                                <div className="p-4 space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-blue-600 font-bold border-2 border-white shadow-sm">
                                            {appointment.patientName.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900">{appointment.patientName}</div>
                                            <div className="text-xs text-gray-500">Male • 34 Years</div>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-gray-100">
                                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Reported Symptoms</div>
                                        <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-sm text-gray-800 font-medium">
                                            "{appointment.symptoms}"
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Vitals (Last Recorded)</div>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="p-2 bg-gray-50 rounded-lg text-center">
                                                <div className="text-xs text-gray-500">BP</div>
                                                <div className="font-bold text-gray-900">120/80</div>
                                            </div>
                                            <div className="p-2 bg-gray-50 rounded-lg text-center">
                                                <div className="text-xs text-gray-500">HR</div>
                                                <div className="font-bold text-gray-900">72</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Prescription Form */}
                        <div className="lg:col-span-2">
                            <Card className="border-0 shadow-lg shadow-gray-200/50">
                                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-800 mb-2">Clinical Diagnosis</label>
                                        <textarea
                                            rows="3"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400 outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all resize-none"
                                            placeholder="Enter detailed diagnosis here..."
                                            value={diagnosis}
                                            onChange={(e) => setDiagnosis(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-3">
                                            <label className="block text-sm font-bold text-gray-800">Prescribed Medicines</label>
                                            <Button type="button" size="sm" variant="ghost" onClick={handleAddMedicine} className="text-blue-600 hover:bg-blue-50">
                                                <Pill size={16} className="mr-1" /> Add Drug
                                            </Button>
                                        </div>

                                        <div className="space-y-3">
                                            {medicines.map((med, index) => (
                                                <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start animate-fade-in">
                                                    <div className="md:col-span-5">
                                                        <Input
                                                            placeholder="Medicine Name"
                                                            value={med.name}
                                                            onChange={(e) => handleMedicineChange(index, 'name', e.target.value)}
                                                            required
                                                            className="bg-gray-50"
                                                        />
                                                    </div>
                                                    <div className="md:col-span-3">
                                                        <Input
                                                            placeholder="Dosage"
                                                            value={med.dosage}
                                                            onChange={(e) => handleMedicineChange(index, 'dosage', e.target.value)}
                                                            required
                                                            className="bg-gray-50"
                                                        />
                                                    </div>
                                                    <div className="md:col-span-3">
                                                        <Input
                                                            placeholder="Duration"
                                                            value={med.duration}
                                                            onChange={(e) => handleMedicineChange(index, 'duration', e.target.value)}
                                                            required
                                                            className="bg-gray-50"
                                                        />
                                                    </div>
                                                    <div className="md:col-span-1 flex justify-center pt-2">
                                                        <button type="button" className="text-red-400 hover:text-red-600 transition-colors" title="Remove">
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-800 mb-2">Additional Advice / Notes</label>
                                        <textarea
                                            rows="2"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400 outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all resize-none"
                                            placeholder="Dietary restrictions, follow-up, etc..."
                                        ></textarea>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100 flex justify-end gap-3">
                                        <Button variant="outline" type="button" onClick={() => navigate(-1)} className="px-6">Cancel</Button>
                                        <Button type="submit" className="px-8 shadow-lg shadow-blue-500/20 group">
                                            Sign & Send <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </form>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PrescriptionForm;
