package com.telemedicine.prescription.service;

import java.util.List;

import com.telemedicine.prescription.dto.PrescriptionRequest;
import com.telemedicine.prescription.dto.PrescriptionResponse;

public interface PrescriptionService {

    PrescriptionResponse createPrescription(PrescriptionRequest request);

    PrescriptionResponse getPrescriptionById(Long id);

    List<PrescriptionResponse> getAllPrescriptions();

    List<PrescriptionResponse> getPrescriptionsByPatientId(Long patientId);

    List<PrescriptionResponse> getPrescriptionsByPractitionerId(Long practitionerId);

    List<PrescriptionResponse> getPrescriptionsByConsultationId(Long consultationId);

    PrescriptionResponse updatePrescription(Long id, PrescriptionRequest request);

    void deletePrescription(Long id);
}