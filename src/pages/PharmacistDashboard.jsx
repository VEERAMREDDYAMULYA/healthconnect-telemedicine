
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';
import { medicines } from '../data/mockData';
import { Pill, Package, Truck, CheckCircle, AlertCircle, ShoppingCart } from 'lucide-react';

const PharmacistDashboard = () => {
    const [mockOrders, setMockOrders] = useState([
        { id: 501, patient: "John Doe", medicines: "Paracetamol (2)", status: "Pending" },
        { id: 502, patient: "Alice Smith", medicines: "Metformin (1)", status: "Completed" },
        { id: 503, patient: "Robert Brown", medicines: "Amoxicillin (1)", status: "Pending" },
    ]);

    const handleUpdateStatus = (id) => {
        setMockOrders(mockOrders.map(order =>
            order.id === id ? { ...order, status: "Completed" } : order
        ));
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className="flex pt-16 sm:pt-20">
                <Sidebar />
                <main className="flex-1 md:ml-64 p-6 sm:p-8 max-w-7xl mx-auto w-full">
                    <div className="flex justify-between items-center mb-8 fade-in">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Pharmacy Dashboard</h1>
                            <p className="text-gray-500 mt-1">Order shipping and inventory management.</p>
                        </div>
                        <Button className="flex items-center gap-2 shadow-lg shadow-blue-500/20">
                            <Package size={18} /> Update Stock
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <Card className="flex items-center p-5 border-l-4 border-l-teal-500 shadow-teal-500/5 group hover:shadow-lg transition-all" hoverEffect>
                            <div className="p-3 bg-teal-50 rounded-xl text-teal-600 mr-4 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                                <Pill size={28} />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">In Stock</p>
                                <p className="text-3xl font-bold text-gray-900">128</p>
                            </div>
                        </Card>
                        <Card className="flex items-center p-5 border-l-4 border-l-amber-500 shadow-amber-500/5 group hover:shadow-lg transition-all" hoverEffect>
                            <div className="p-3 bg-amber-50 rounded-xl text-amber-600 mr-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                <Truck size={28} />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Pending Orders</p>
                                <p className="text-3xl font-bold text-gray-900">5</p>
                            </div>
                        </Card>
                        <Card className="flex items-center p-5 border-l-4 border-l-emerald-500 shadow-emerald-500/5 group hover:shadow-lg transition-all" hoverEffect>
                            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 mr-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                <CheckCircle size={28} />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Fulfilled</p>
                                <p className="text-3xl font-bold text-gray-900">42</p>
                            </div>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <Card className="h-full border-0 shadow-lg shadow-gray-200/50">
                                <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 rounded-t-xl">
                                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                        <ShoppingCart size={20} className="text-blue-500" /> Recent Orders
                                    </h3>
                                    <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded-lg">Real-time</span>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-100">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Patient</th>
                                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Medicines</th>
                                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-50">
                                            {mockOrders.map(order => (
                                                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 mr-3">
                                                                {order.patient.charAt(0)}
                                                            </div>
                                                            <div className="text-sm font-medium text-gray-900">{order.patient}</div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">{order.medicines}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full border ${order.status === 'Completed' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-amber-50 text-amber-700 border-amber-100'
                                                            }`}>
                                                            {order.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-right text-sm">
                                                        {order.status === 'Pending' && (
                                                            <Button size="sm" onClick={() => handleUpdateStatus(order.id)} className="h-7 text-xs px-3 bg-blue-50 text-blue-600 hover:bg-blue-100 border-transparent shadow-none">
                                                                Mark Done
                                                            </Button>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Card>
                        </div>

                        <div className="lg:col-span-1">
                            <Card className="h-full border-0 shadow-lg shadow-gray-200/50">
                                <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50 rounded-t-xl">
                                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                        <AlertCircle size={20} className="text-purple-500" /> Inventory Alerts
                                    </h3>
                                </div>
                                <div className="p-4 space-y-3">
                                    {medicines.map((med) => (
                                        <div key={med.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                                            <div>
                                                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{med.name}</p>
                                                <p className="text-xs text-gray-500 group-hover:text-gray-700">${med.price.toFixed(2)} / unit</p>
                                            </div>
                                            <div className="text-right">
                                                <p className={`font-bold ${med.stock < 30 ? 'text-red-500' : 'text-emerald-600'}`}>
                                                    {med.stock} units
                                                </p>
                                                {med.stock < 30 && <span className="text-[10px] uppercase font-bold text-red-500 tracking-wide bg-red-50 px-1.5 py-0.5 rounded">Low Stock</span>}
                                            </div>
                                        </div>
                                    ))}
                                    <div className="pt-2 text-center">
                                        <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 uppercase tracking-wide">View Full Inventory</button>
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

export default PharmacistDashboard;
