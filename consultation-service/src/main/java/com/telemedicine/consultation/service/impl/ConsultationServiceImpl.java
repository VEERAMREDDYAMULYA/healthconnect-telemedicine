package com.telemedicine.consultation.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.telemedicine.consultation.dto.ConsultationRequest;
import com.telemedicine.consultation.dto.ConsultationResponse;
import com.telemedicine.consultation.entity.Consultation;
import com.telemedicine.consultation.exception.ConsultationNotFoundException;
import com.telemedicine.consultation.repository.ConsultationRepository;
import com.telemedicine.consultation.service.ConsultationService;

@Service
public class ConsultationServiceImpl implements ConsultationService {

    private final ConsultationRepository consultationRepository;

    public ConsultationServiceImpl(
            ConsultationRepository consultationRepository) {
        this.consultationRepository = consultationRepository;
    }

    @Override
    public ConsultationResponse createConsultation(
            ConsultationRequest request) {

        Consultation consultation = new Consultation();

        consultation.setAppointmentId(request.getAppointmentId());
        consultation.setPatientId(request.getPatientId());
        consultation.setPractitionerId(request.getPractitionerId());
        consultation.setConsultationDate(request.getConsultationDate());
        consultation.setDiagnosis(request.getDiagnosis());
        consultation.setNotes(request.getNotes());
        consultation.setStatus("COMPLETED");

        Consultation saved = consultationRepository.save(consultation);

        return mapToResponse(saved);
    }

    @Override
    public ConsultationResponse getConsultationById(Long id) {

        Consultation consultation = consultationRepository.findById(id)
                .orElseThrow(() -> new ConsultationNotFoundException(
                        "Consultation not found with id: " + id));

        return mapToResponse(consultation);
    }

    @Override
    public List<ConsultationResponse> getAllConsultations() {

        return consultationRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public List<ConsultationResponse> getConsultationsByPatientId(
            Long patientId) {

        return consultationRepository.findByPatientId(patientId)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public List<ConsultationResponse> getConsultationsByPractitionerId(
            Long practitionerId) {

        return consultationRepository.findByPractitionerId(practitionerId)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public List<ConsultationResponse> getConsultationsByAppointmentId(
            Long appointmentId) {

        return consultationRepository.findByAppointmentId(appointmentId)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public ConsultationResponse updateConsultation(
            Long id, ConsultationRequest request) {

        Consultation consultation = consultationRepository.findById(id)
                .orElseThrow(() -> new ConsultationNotFoundException(
                        "Consultation not found with id: " + id));

        consultation.setAppointmentId(request.getAppointmentId());
        consultation.setPatientId(request.getPatientId());
        consultation.setPractitionerId(request.getPractitionerId());
        consultation.setConsultationDate(request.getConsultationDate());
        consultation.setDiagnosis(request.getDiagnosis());
        consultation.setNotes(request.getNotes());

        Consultation updated = consultationRepository.save(consultation);

        return mapToResponse(updated);
    }

    @Override
    public void deleteConsultation(Long id) {

        Consultation consultation = consultationRepository.findById(id)
                .orElseThrow(() -> new ConsultationNotFoundException(
                        "Consultation not found with id: " + id));

        consultationRepository.delete(consultation);
    }

    private ConsultationResponse mapToResponse(
            Consultation consultation) {

        return new ConsultationResponse(
                consultation.getId(),
                consultation.getAppointmentId(),
                consultation.getPatientId(),
                consultation.getPractitionerId(),
                consultation.getConsultationDate(),
                consultation.getDiagnosis(),
                consultation.getNotes(),
                consultation.getStatus()
        );
    }
}