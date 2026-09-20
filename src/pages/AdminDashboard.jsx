
import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';
import { users } from '../data/mockData';
import { Users, AlertTriangle, Activity, Database, CheckSquare, PlusCircle, Trash2, MoreVertical, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <Navbar />
            <div className="flex pt-16 sm:pt-20">
                <Sidebar />
                <main className="flex-1 md:ml-64 p-6 sm:p-8 max-w-7xl mx-auto w-full">
                    <div className="flex justify-between items-center mb-8 fade-in">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Admin Dashboard</h1>
                            <p className="text-gray-500 mt-1">Platform overview and user management.</p>
                        </div>

                        <Button variant="primary" className="flex items-center gap-2 shadow-lg shadow-blue-500/20">
                            <PlusCircle size={18} /> Add New User
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <StatsCard
                            icon={<Users size={24} className="text-blue-600" />}
                            bg="bg-blue-50"
                            label="Total Users"
                            value="1,245"
                            trend="+12% this week"
                            trendUp={true}
                        />
                        <StatsCard
                            icon={<Activity size={24} className="text-emerald-600" />}
                            bg="bg-emerald-50"
                            label="Active Sessions"
                            value="42"
                            trend="+5% vs yesterday"
                            trendUp={true}
                        />
                        <StatsCard
                            icon={<CheckSquare size={24} className="text-amber-600" />}
                            bg="bg-amber-50"
                            label="Appointments"
                            value="128"
                            trend="Avg 15m duration"
                            trendUp={true}
                        />
                        <StatsCard
                            icon={<AlertTriangle size={24} className="text-red-600" />}
                            bg="bg-red-50"
                            label="System Alerts"
                            value="3"
                            trend="Server load 45%"
                            trendUp={false}
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* User Management Table */}
                        <div className="lg:col-span-2">
                            <Card className="border-0 shadow-lg shadow-gray-200/50 h-full">
                                <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
                                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                        <Users size={20} className="text-blue-500" /> Recent Registrations
                                    </h3>
                                    <Button variant="ghost" size="sm" className="text-blue-600 font-medium">View All</Button>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-left text-sm whitespace-nowrap">
                                        <thead className="bg-gray-50/50">
                                            <tr>
                                                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">User</th>
                                                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
                                                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {users.slice(0, 5).map(user => (
                                                <tr key={user.id} className="hover:bg-blue-50/10 transition-colors group">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center">
                                                            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 flex items-center justify-center font-bold text-xs mr-3">
                                                                {user.name.charAt(0)}
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-gray-900">{user.name}</div>
                                                                <div className="text-xs text-gray-500">{user.email}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border capitalize ${user.role === 'admin' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                                                                user.role === 'doctor' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                                                                    'bg-gray-50 text-gray-600 border-gray-200'
                                                            }`}>
                                                            {user.role}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded inline-block">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> Active
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition">
                                                            <MoreVertical size={16} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Card>
                        </div>

                        {/* System Health */}
                        <div className="lg:col-span-1">
                            <Card className="h-full border-0 shadow-lg shadow-gray-200/50">
                                <div className="px-6 py-5 border-b border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                        <Database size={20} className="text-purple-500" /> System Health
                                    </h3>
                                </div>
                                <div className="p-6 space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm font-medium">
                                            <span className="text-gray-600">Server CPU Load</span>
                                            <span className="text-gray-900">45%</span>
                                        </div>
                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500 rounded-full w-[45%]"></div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm font-medium">
                                            <span className="text-gray-600">Memory Usage</span>
                                            <span className="text-gray-900">62%</span>
                                        </div>
                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-purple-500 rounded-full w-[62%]"></div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm font-medium">
                                            <span className="text-gray-600">Storage</span>
                                            <span className="text-gray-900">75%</span>
                                        </div>
                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-amber-500 rounded-full w-[75%]"></div>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                                        <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-center">
                                            <div className="text-xs text-gray-500 uppercase font-semibold">Uptime</div>
                                            <div className="text-xl font-bold text-emerald-600">99.9%</div>
                                        </div>
                                        <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-center">
                                            <div className="text-xs text-gray-500 uppercase font-semibold">Errors</div>
                                            <div className="text-xl font-bold text-red-500">0.02%</div>
                                        </div>
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

const StatsCard = ({ icon, bg, label, value, trend, trendUp }) => (
    <Card className="flex flex-col p-5 border-0 shadow-md shadow-gray-200/50 hover:shadow-lg transition-all" hoverEffect>
        <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-xl ${bg}`}>
                {icon}
            </div>
            {trendUp !== undefined && (
                <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${trendUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    <TrendingUp size={12} className={!trendUp ? 'rotate-180' : ''} />
                </div>
            )}
        </div>
        <div>
            <div className="text-3xl font-bold text-gray-900 mb-1 tracking-tight">{value}</div>
            <div className="text-sm text-gray-500 font-medium">{label}</div>
            <div className="text-xs text-gray-400 mt-2">{trend}</div>
        </div>
    </Card>
);

export default AdminDashboard;
