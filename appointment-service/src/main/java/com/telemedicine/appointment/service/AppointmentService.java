package com.telemedicine.appointment.service;

import java.util.List;

import com.telemedicine.appointment.dto.AppointmentRequest;
import com.telemedicine.appointment.dto.AppointmentResponse;

public interface AppointmentService {

    AppointmentResponse createAppointment(AppointmentRequest request);

    AppointmentResponse getAppointmentById(Long id);

    List<AppointmentResponse> getAllAppointments();

    List<AppointmentResponse> getAppointmentsByPatientId(Long patientId);

    List<AppointmentResponse> getAppointmentsByPractitionerId(Long practitionerId);

    AppointmentResponse updateAppointment(Long id, AppointmentRequest request);

    void deleteAppointment(Long id);
}