import {
  HeartPulse as FaHeartbeat,
  Star as FaStar,
  CalendarCheck as FaCalendarCheck,
  Stethoscope as FaUserMd,
  Smile as FaSmile,
  ShieldCheck as FaShieldAlt,
  TrendingUp as FiTrendingUp
} from 'lucide-react';
import BackButton from '../components/BackButton';

const IMPACT_METRICS = [
  {
    id: 'm1',
    icon: FaSmile,
    title: 'Happy Patients Served',
    value: '5,000+',
    description: 'Delivering smile-inducing care with personalized online consultations and immediate support.',
    colorClass: 'text-blue-600',
    bgClass: 'bg-blue-50'
  },
  {
    id: 'm2',
    icon: FaStar,
    title: 'Average Patient Rating',
    value: '4.8 ⭐',
    description: 'Consistently highly rated by our patients for attentive care and ease of platform use.',
    colorClass: 'text-yellow-600',
    bgClass: 'bg-yellow-50'
  },
  {
    id: 'm3',
    icon: FaCalendarCheck,
    title: 'Appointments Booked',
    value: '7,500+',
    description: 'Thousands of seamless digital bookings connecting patients with specialists instantly.',
    colorClass: 'text-green-600',
    bgClass: 'bg-green-50'
  },
  {
    id: 'm4',
    icon: FaUserMd,
    title: 'Verified Doctors Available',
    value: '120+',
    description: 'A growing network of top-rated, strictly vetted medical professionals across all specialties.',
    colorClass: 'text-indigo-600',
    bgClass: 'bg-indigo-50'
  },
  {
    id: 'm5',
    icon: FiTrendingUp,
    title: 'Satisfaction Rate',
    value: '96%',
    description: 'Our top priority is patient health and satisfaction, and our metrics proudly reflect that.',
    colorClass: 'text-pink-600',
    bgClass: 'bg-pink-50'
  },
  {
    id: 'm6',
    icon: FaShieldAlt,
    title: 'Successful Consultations',
    value: '10,000+',
    description: 'Secure, private, and highly effective virtual medical consultations conducted.',
    colorClass: 'text-teal-600',
    bgClass: 'bg-teal-50'
  }
];

export default function Achievements() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]"><div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8"><BackButton /></div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#EFF6FF] to-[#DBEAFE] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="max-w-3xl">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/80 border border-[#BFDBFE] shadow-sm">
              <FaHeartbeat className="w-7 h-7 text-[#2563EB]" />
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A]">
              Trusted by Patients
            </h1>
            <p className="mt-4 text-lg text-[#64748B] leading-relaxed">
              We measure our success by the health, happiness, and trust of the patients we serve. Here is our real-world impact in digital healthcare.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Impact header */}
        <section className="space-y-6">
          <div className="flex items-end justify-between gap-4 flex-wrap mb-2">
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A]">Our Healthcare Impact</h2>
              <p className="mt-1 text-[#64748B]">
                Driven by care, powered by technology.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMPACT_METRICS.map((metric) => (
              <div
                key={metric.id}
                className="bg-white rounded-2xl border-2 border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-sm ${metric.bgClass} ${metric.colorClass}`}>
                    <metric.icon className="w-7 h-7" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-4xl font-extrabold text-[#0F172A] mb-2 tracking-tight">
                    {metric.value}
                  </h3>
                  <p className="text-lg font-bold text-[#1E293B] mb-3">
                    {metric.title}
                  </p>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

