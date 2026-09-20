import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search as FiSearch, Star as FiStar, Award as FiAward, Building2 as FaHospital, Stethoscope as FaStethoscope } from "lucide-react";
import { useAuth } from "../context/AuthContext";

import { PREDEFINED_DOCTORS } from "../data/doctors";
import { DISEASE_SPECIALIZATION_MAP, getRecommendedSpecialization } from "../data/diseaseMap";
import { saveAppointment } from "../utils/appointmentStorage";

import Button from "../components/Button";
import aiDoctorImage from "../assets/ai-doctor.jpg";

export default function Doctors() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();

  // ✅ Detect disease → specialization
  const detectedSpecialization = getRecommendedSpecialization(searchQuery);

  // ✅ Smart filtering
  const filteredDoctors = useMemo(() => {
    if (!searchQuery.trim()) return PREDEFINED_DOCTORS;

    const query = searchQuery.toLowerCase();

    return PREDEFINED_DOCTORS.filter((doc) => {
      if (detectedSpecialization) {
        return doc.specialization === detectedSpecialization;
      }

      return (
        doc.name.toLowerCase().includes(query) ||
        doc.specialization.toLowerCase().includes(query) ||
        doc.hospital.toLowerCase().includes(query)
      );
    });
  }, [searchQuery, detectedSpecialization]);

  // ✅ Unique specializations
  const specializations = useMemo(() => {
    return [...new Set(PREDEFINED_DOCTORS.map((d) => d.specialization))].sort();
  }, []);

  // ⭐ Star renderer
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      );
    }

    const emptyStars = 5 - fullStars;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FiStar key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }

    return stars;
  };

  // ✅ BOOK APPOINTMENT FUNCTION (NEW)
  const handleBookAppointment = (doctor) => {
    const appointment = {
      doctorId: doctor.id,
      doctorName: doctor.name,
      specialization: doctor.specialization,
      patientName: user?.name || "Patient",
      date: new Date().toLocaleDateString(),
      status: "scheduled",
    };

    // save locally
    saveAppointment(appointment);

    alert("Appointment booked successfully!");

    // redirect to login (existing flow)
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      {/* LEFT SIDE: FIXED AI DOCTOR IMAGE */}
      <div className="hidden lg:block relative w-1/3 xl:w-2/5 h-full z-0 flex-shrink-0">
        <img
          src={aiDoctorImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Soft overlay gradient that completely covers the image but keeps it nicely visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/20 to-transparent mix-blend-multiply"></div>
        {/* Soft fade out towards the list to make text easily readable */}
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent"></div>
      </div>

      {/* RIGHT SIDE: SCROLLABLE LIST */}
      <div className="flex-1 h-full overflow-y-auto relative z-10 custom-scrollbar">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* HEADER */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 mb-4">
              <FaStethoscope className="w-8 h-8 text-blue-600" />
            </div>

            <h1 className="text-4xl font-bold text-slate-900 mb-3">
              Our Expert Doctors
            </h1>

            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Search by disease or specialization to instantly find the right doctor.
            </p>
          </div>

          {/* SEARCH */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-2xl mx-auto">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

              <input
                type="text"
                placeholder="Search disease (e.g., acne, chest pain, headache...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
              />
            </div>

            {/* QUICK FILTERS */}
            <div className="flex flex-wrap justify-center gap-2">
              {specializations.map((spec) => (
                <button
                  key={spec}
                  onClick={() => setSearchQuery(spec)}
                  className="px-4 py-1.5 rounded-full text-sm font-medium bg-white border border-gray-200 hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  {spec}
                </button>
              ))}

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-1.5 rounded-full text-sm bg-gray-100 hover:bg-gray-200"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* RECOMMENDATION MESSAGE */}
          {detectedSpecialization && (
            <p className="text-center text-green-600 font-semibold mb-6">
              Showing recommended doctors for {detectedSpecialization}
            </p>
          )}

          {/* DOCTORS GRID */}
          <div className="flex flex-col gap-4 pb-20">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-5 flex flex-col sm:flex-row gap-6 items-center sm:items-stretch">

                  {/* IMAGE LEFT */}
                  <div className="flex-shrink-0 flex flex-col justify-center">
                    <img
                      src={doctor.profileImage}
                      alt={doctor.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-blue-50 shadow-sm"
                    />
                  </div>

                  {/* CONTENT RIGHT */}
                  <div className="flex-1 flex flex-col justify-between w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                      <div>
                        <h3 className="font-bold text-xl text-slate-900 mb-1">
                          {doctor.name}
                        </h3>
                        <span className="text-sm font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                          {doctor.specialization}
                        </span>
                      </div>

                      {detectedSpecialization &&
                        doctor.specialization === detectedSpecialization && (
                          <span className="text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-bold shadow-sm whitespace-nowrap">
                            ⭐ Recommended
                          </span>
                        )}
                    </div>

                    {/* DETAILS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <FaHospital className="text-blue-500 w-4 h-4" />
                        <span className="truncate">{doctor.hospital}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <FiAward className="text-blue-500 w-4 h-4" />
                        <span>{doctor.experience} years exp.</span>
                      </div>

                      <div className="flex items-center gap-2 sm:col-span-2">
                        <div className="flex">{renderStars(doctor.rating)}</div>
                        <span className="font-bold text-slate-800 ml-1">
                          {doctor.rating}
                        </span>
                      </div>
                    </div>

                    {/* ACTION */}
                    <div className="mt-auto flex justify-end">
                      <Button
                        className="w-full sm:w-auto px-8"
                        onClick={() => handleBookAppointment(doctor)}
                      >
                        Book Appointment
                      </Button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}