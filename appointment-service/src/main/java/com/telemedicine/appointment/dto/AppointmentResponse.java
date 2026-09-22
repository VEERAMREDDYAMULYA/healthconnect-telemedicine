package com.telemedicine.appointment.dto;

import java.time.LocalDateTime;

public class AppointmentResponse {

    private Long id;
    private Long patientId;
    private Long practitionerId;
    private LocalDateTime appointmentDate;
    private String reason;
    private String status;

    public AppointmentResponse() {
    }

    public AppointmentResponse(Long id, Long patientId, Long practitionerId,
                                LocalDateTime appointmentDate,
                                String reason, String status) {
        this.id = id;
        this.patientId = patientId;
        this.practitionerId = practitionerId;
        this.appointmentDate = appointmentDate;
        this.reason = reason;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public LocalDateTime getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(LocalDateTime appointmentDate) {
        this.appointmentDate = appointmentDate;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}