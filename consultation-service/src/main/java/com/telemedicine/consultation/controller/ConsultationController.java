package com.telemedicine.consultation.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.telemedicine.consultation.dto.ConsultationRequest;
import com.telemedicine.consultation.dto.ConsultationResponse;
import com.telemedicine.consultation.service.ConsultationService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/consultations")
public class ConsultationController {

    private final ConsultationService consultationService;

    public ConsultationController(
            ConsultationService consultationService) {

        this.consultationService = consultationService;
    }

    @PostMapping
    public ResponseEntity<ConsultationResponse> createConsultation(
            @Valid @RequestBody ConsultationRequest request) {

        ConsultationResponse response =
                consultationService.createConsultation(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }

    @GetMapping
    public ResponseEntity<List<ConsultationResponse>> getAllConsultations() {

        return ResponseEntity.ok(
                consultationService.getAllConsultations());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ConsultationResponse> getConsultationById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                consultationService.getConsultationById(id));
    }

    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<ConsultationResponse>>
            getConsultationsByPatientId(
                    @PathVariable Long patientId) {

        return ResponseEntity.ok(
                consultationService
                        .getConsultationsByPatientId(patientId));
    }

    @GetMapping("/practitioner/{practitionerId}")
    public ResponseEntity<List<ConsultationResponse>>
            getConsultationsByPractitionerId(
                    @PathVariable Long practitionerId) {

        return ResponseEntity.ok(
                consultationService
                        .getConsultationsByPractitionerId(practitionerId));
    }

    @GetMapping("/appointment/{appointmentId}")
    public ResponseEntity<List<ConsultationResponse>>
            getConsultationsByAppointmentId(
                    @PathVariable Long appointmentId) {

        return ResponseEntity.ok(
                consultationService
                        .getConsultationsByAppointmentId(appointmentId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ConsultationResponse> updateConsultation(
            @PathVariable Long id,
            @Valid @RequestBody ConsultationRequest request) {

        return ResponseEntity.ok(
                consultationService
                        .updateConsultation(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteConsultation(
            @PathVariable Long id) {

        consultationService.deleteConsultation(id);

        return ResponseEntity.noContent().build();
    }
}