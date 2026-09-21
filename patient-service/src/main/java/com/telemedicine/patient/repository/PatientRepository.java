package com.telemedicine.patient.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.telemedicine.patient.entity.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {

}