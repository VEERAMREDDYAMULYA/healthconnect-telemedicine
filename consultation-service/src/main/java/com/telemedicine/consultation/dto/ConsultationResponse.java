package com.telemedicine.consultation.dto;

import java.time.LocalDateTime;

public class ConsultationResponse {

    private Long id;
    private Long appointmentId;
    private Long patientId;
    private Long practitionerId;
    private LocalDateTime consultationDate;
    private String diagnosis;
    private String notes;
    private String status;

    public ConsultationResponse() {
    }

    public ConsultationResponse(Long id, Long appointmentId, Long patientId,
                                Long practitionerId,
                                LocalDateTime consultationDate,
                                String diagnosis, String notes,
                                String status) {
        this.id = id;
        this.appointmentId = appointmentId;
        this.patientId = patientId;
        this.practitionerId = practitionerId;
        this.consultationDate = consultationDate;
        this.diagnosis = diagnosis;
        this.notes = notes;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(Long appointmentId) {
        this.appointmentId = appointmentId;
    }

    public Long getPatientId() {
        return patientId;
    }

    public void setPatientId(Long patientId) {
        this.patientId = patientId;
    }

    public Long getPractitionerId() {
        return practitionerId;
    }

    public void setPractitionerId(Long practitionerId) {
        this.practitionerId = practitionerId;
    }

    public LocalDateTime getConsultationDate() {
        return consultationDate;
    }

    public void setConsultationDate(LocalDateTime consultationDate) {
        this.consultationDate = consultationDate;
    }

    public String getDiagnosis() {
        return diagnosis;
    }

    public void setDiagnosis(String diagnosis) {
        this.diagnosis = diagnosis;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}