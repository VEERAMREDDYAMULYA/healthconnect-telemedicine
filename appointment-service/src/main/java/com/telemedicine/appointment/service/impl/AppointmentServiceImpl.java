package com.telemedicine.appointment.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.telemedicine.appointment.dto.AppointmentRequest;
import com.telemedicine.appointment.dto.AppointmentResponse;
import com.telemedicine.appointment.entity.Appointment;
import com.telemedicine.appointment.exception.AppointmentNotFoundException;
import com.telemedicine.appointment.repository.AppointmentRepository;
import com.telemedicine.appointment.service.AppointmentService;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    private final AppointmentRepository appointmentRepository;

    public AppointmentServiceImpl(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    @Override
    public AppointmentResponse createAppointment(AppointmentRequest request) {

        Appointment appointment = new Appointment();

        appointment.setPatientId(request.getPatientId());
        appointment.setPractitionerId(request.getPractitionerId());
        appointment.setAppointmentDate(request.getAppointmentDate());
        appointment.setReason(request.getReason());

        // New appointments are scheduled by default
        appointment.setStatus("SCHEDULED");

        Appointment savedAppointment =
                appointmentRepository.save(appointment);

        return mapToResponse(savedAppointment);
    }

    @Override
    public AppointmentResponse getAppointmentById(Long id) {

        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() ->
                        new AppointmentNotFoundException(
                                "Appointment not found with id: " + id));

        return mapToResponse(appointment);
    }

    @Override
    public List<AppointmentResponse> getAllAppointments() {

        return appointmentRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public List<AppointmentResponse> getAppointmentsByPatientId(
            Long patientId) {

        return appointmentRepository.findByPatientId(patientId)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public List<AppointmentResponse> getAppointmentsByPractitionerId(
            Long practitionerId) {

        return appointmentRepository.findByPractitionerId(practitionerId)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public AppointmentResponse updateAppointment(
            Long id, AppointmentRequest request) {

        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() ->
                        new AppointmentNotFoundException(
                                "Appointment not found with id: " + id));

        appointment.setPatientId(request.getPatientId());
        appointment.setPractitionerId(request.getPractitionerId());
        appointment.setAppointmentDate(request.getAppointmentDate());
        appointment.setReason(request.getReason());

        Appointment updatedAppointment =
                appointmentRepository.save(appointment);

        return mapToResponse(updatedAppointment);
    }

    @Override
    public void deleteAppointment(Long id) {

        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() ->
                        new AppointmentNotFoundException(
                                "Appointment not found with id: " + id));

        appointmentRepository.delete(appointment);
    }

    private AppointmentResponse mapToResponse(Appointment appointment) {

        return new AppointmentResponse(
                appointment.getId(),
                appointment.getPatientId(),
                appointment.getPractitionerId(),
                appointment.getAppointmentDate(),
                appointment.getReason(),
                appointment.getStatus()
        );
    }
}