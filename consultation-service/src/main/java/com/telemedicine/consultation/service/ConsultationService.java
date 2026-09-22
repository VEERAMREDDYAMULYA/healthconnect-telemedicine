package com.telemedicine.consultation.service;

import java.util.List;

import com.telemedicine.consultation.dto.ConsultationRequest;
import com.telemedicine.consultation.dto.ConsultationResponse;

public interface ConsultationService {

    ConsultationResponse createConsultation(ConsultationRequest request);

    ConsultationResponse getConsultationById(Long id);

    List<ConsultationResponse> getAllConsultations();

    List<ConsultationResponse> getConsultationsByPatientId(Long patientId);

    List<ConsultationResponse> getConsultationsByPractitionerId(Long practitionerId);

    List<ConsultationResponse> getConsultationsByAppointmentId(Long appointmentId);

    ConsultationResponse updateConsultation(Long id,
                                            ConsultationRequest request);

    void deleteConsultation(Long id);
}