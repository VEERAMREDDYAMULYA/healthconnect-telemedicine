package com.telemedicine.prescription.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

import com.telemedicine.prescription.dto.PrescriptionRequest;
import com.telemedicine.prescription.dto.PrescriptionResponse;
import com.telemedicine.prescription.service.PrescriptionService;

@RestController
@RequestMapping("/api/prescriptions")
public class PrescriptionController {

    private final PrescriptionService prescriptionService;

    public PrescriptionController(
            PrescriptionService prescriptionService) {

        this.prescriptionService = prescriptionService;
    }

    @PostMapping
    public ResponseEntity<PrescriptionResponse> createPrescription(
            @Valid @RequestBody PrescriptionRequest request) {

        PrescriptionResponse response =
                prescriptionService.createPrescription(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }

    @GetMapping
    public ResponseEntity<List<PrescriptionResponse>> getAllPrescriptions() {

        return ResponseEntity.ok(
                prescriptionService.getAllPrescriptions());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PrescriptionResponse> getPrescriptionById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                prescriptionService.getPrescriptionById(id));
    }

    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<PrescriptionResponse>>
            getPrescriptionsByPatientId(
                    @PathVariable Long patientId) {

        return ResponseEntity.ok(
                prescriptionService
                        .getPrescriptionsByPatientId(patientId));
    }

    @GetMapping("/practitioner/{practitionerId}")
    public ResponseEntity<List<PrescriptionResponse>>
            getPrescriptionsByPractitionerId(
                    @PathVariable Long practitionerId) {

        return ResponseEntity.ok(
                prescriptionService
                        .getPrescriptionsByPractitionerId(
                                practitionerId));
    }

    @GetMapping("/consultation/{consultationId}")
    public ResponseEntity<List<PrescriptionResponse>>
            getPrescriptionsByConsultationId(
                    @PathVariable Long consultationId) {

        return ResponseEntity.ok(
                prescriptionService
                        .getPrescriptionsByConsultationId(
                                consultationId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PrescriptionResponse> updatePrescription(
            @PathVariable Long id,
            @Valid @RequestBody PrescriptionRequest request) {

        return ResponseEntity.ok(
                prescriptionService
                        .updatePrescription(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePrescription(
            @PathVariable Long id) {

        prescriptionService.deletePrescription(id);

        return ResponseEntity.noContent().build();
    }
}