package com.telemedicine.consultation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.telemedicine.consultation.entity.Consultation;

public interface ConsultationRepository
        extends JpaRepository<Consultation, Long> {

    List<Consultation> findByPatientId(Long patientId);

    List<Consultation> findByPractitionerId(Long practitionerId);

    List<Consultation> findByAppointmentId(Long appointmentId);
}