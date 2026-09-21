package com.telemedicine.patient.service;

import java.util.List;

import com.telemedicine.patient.dto.PatientRequest;
import com.telemedicine.patient.dto.PatientResponse;

public interface PatientService {

    PatientResponse createPatient(PatientRequest request);

    PatientResponse getPatientById(Long id);

    List<PatientResponse> getAllPatients();

    PatientResponse updatePatient(Long id, PatientRequest request);

    void deletePatient(Long id);
}