package com.healthconnect.practitioner.service;

import com.healthconnect.practitioner.entity.Practitioner;
import com.healthconnect.practitioner.repository.PractitionerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PractitionerService {

    private final PractitionerRepository repository;

    public PractitionerService(PractitionerRepository repository) {
        this.repository = repository;
    }

    public List<Practitioner> getAllPractitioners() {
        return repository.findAll();
    }

    public Optional<Practitioner> getPractitionerById(Long id) {
        return repository.findById(id);
    }

    public Practitioner createPractitioner(Practitioner practitioner) {
        return repository.save(practitioner);
    }

    public Practitioner updatePractitioner(Long id, Practitioner practitioner) {
        Optional<Practitioner> existing = repository.findById(id);

        if (existing.isPresent()) {
            Practitioner p = existing.get();

            p.setName(practitioner.getName());
            p.setSpecialization(practitioner.getSpecialization());
            p.setEmail(practitioner.getEmail());
            p.setPhone(practitioner.getPhone());

            return repository.save(p);
        }

        return null;
    }

    public void deletePractitioner(Long id) {
        repository.deleteById(id);
    }
}