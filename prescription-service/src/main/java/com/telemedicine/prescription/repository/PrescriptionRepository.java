package com.telemedicine.prescription.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.telemedicine.prescription.entity.Prescription;

public interface PrescriptionRepository
        extends JpaRepository<Prescription, Long> {

    List<Prescription> findByPatientId(Long patientId);

    List<Prescription> findByPractitionerId(Long practitionerId);

    List<Prescription> findByConsultationId(Long consultationId);
}