package com.telemedicine.prescription.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.telemedicine.prescription.dto.PrescriptionRequest;
import com.telemedicine.prescription.dto.PrescriptionResponse;
import com.telemedicine.prescription.entity.Prescription;
import com.telemedicine.prescription.exception.PrescriptionNotFoundException;
import com.telemedicine.prescription.repository.PrescriptionRepository;
import com.telemedicine.prescription.service.PrescriptionService;

@Service
public class PrescriptionServiceImpl implements PrescriptionService {

    private final PrescriptionRepository prescriptionRepository;

    public PrescriptionServiceImpl(
            PrescriptionRepository prescriptionRepository) {
        this.prescriptionRepository = prescriptionRepository;
    }

    @Override
    public PrescriptionResponse createPrescription(
            PrescriptionRequest request) {

        Prescription prescription = new Prescription();

        prescription.setConsultationId(request.getConsultationId());
        prescription.setPatientId(request.getPatientId());
        prescription.setPractitionerId(request.getPractitionerId());
        prescription.setMedicineName(request.getMedicineName());
        prescription.setDosage(request.getDosage());
        prescription.setFrequency(request.getFrequency());
        prescription.setDuration(request.getDuration());
        prescription.setInstructions(request.getInstructions());
        prescription.setPrescriptionDate(request.getPrescriptionDate());
        prescription.setStatus("ACTIVE");

        Prescription savedPrescription =
                prescriptionRepository.save(prescription);

        return mapToResponse(savedPrescription);
    }

    @Override
    public PrescriptionResponse getPrescriptionById(Long id) {

        Prescription prescription =
                prescriptionRepository.findById(id)
                .orElseThrow(() ->
                        new PrescriptionNotFoundException(
                                "Prescription not found with id: " + id));

        return mapToResponse(prescription);
    }

    @Override
    public List<PrescriptionResponse> getAllPrescriptions() {

        return prescriptionRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public List<PrescriptionResponse> getPrescriptionsByPatientId(
            Long patientId) {

        return prescriptionRepository
                .findByPatientId(patientId)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public List<PrescriptionResponse> getPrescriptionsByPractitionerId(
            Long practitionerId) {

        return prescriptionRepository
                .findByPractitionerId(practitionerId)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public List<PrescriptionResponse> getPrescriptionsByConsultationId(
            Long consultationId) {

        return prescriptionRepository
                .findByConsultationId(consultationId)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public PrescriptionResponse updatePrescription(
            Long id,
            PrescriptionRequest request) {

        Prescription prescription =
                prescriptionRepository.findById(id)
                .orElseThrow(() ->
                        new PrescriptionNotFoundException(
                                "Prescription not found with id: " + id));

        prescription.setConsultationId(request.getConsultationId());
        prescription.setPatientId(request.getPatientId());
        prescription.setPractitionerId(request.getPractitionerId());
        prescription.setMedicineName(request.getMedicineName());
        prescription.setDosage(request.getDosage());
        prescription.setFrequency(request.getFrequency());
        prescription.setDuration(request.getDuration());
        prescription.setInstructions(request.getInstructions());
        prescription.setPrescriptionDate(request.getPrescriptionDate());

        Prescription updatedPrescription =
                prescriptionRepository.save(prescription);

        return mapToResponse(updatedPrescription);
    }

    @Override
    public void deletePrescription(Long id) {

        Prescription prescription =
                prescriptionRepository.findById(id)
                .orElseThrow(() ->
                        new PrescriptionNotFoundException(
                                "Prescription not found with id: " + id));

        prescriptionRepository.delete(prescription);
    }

    private PrescriptionResponse mapToResponse(
            Prescription prescription) {

        return new PrescriptionResponse(
                prescription.getId(),
                prescription.getConsultationId(),
                prescription.getPatientId(),
                prescription.getPractitionerId(),
                prescription.getMedicineName(),
                prescription.getDosage(),
                prescription.getFrequency(),
                prescription.getDuration(),
                prescription.getInstructions(),
                prescription.getPrescriptionDate(),
                prescription.getStatus()
        );
    }
}