package com.healthconnect.practitioner.repository;

import com.healthconnect.practitioner.entity.Practitioner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PractitionerRepository extends JpaRepository<Practitioner, Long> {

}