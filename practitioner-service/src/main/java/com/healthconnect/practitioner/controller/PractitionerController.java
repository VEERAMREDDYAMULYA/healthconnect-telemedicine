package com.healthconnect.practitioner.controller;

import com.healthconnect.practitioner.entity.Practitioner;
import com.healthconnect.practitioner.service.PractitionerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/practitioners")
public class PractitionerController {

    private final PractitionerService service;

    public PractitionerController(PractitionerService service) {
        this.service = service;
    }

    @GetMapping
    public List<Practitioner> getAllPractitioners() {
        return service.getAllPractitioners();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Practitioner> getPractitionerById(@PathVariable Long id) {
        return service.getPractitionerById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Practitioner createPractitioner(@RequestBody Practitioner practitioner) {
        return service.createPractitioner(practitioner);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Practitioner> updatePractitioner(
            @PathVariable Long id,
            @RequestBody Practitioner practitioner) {

        Practitioner updated = service.updatePractitioner(id, practitioner);

        if (updated == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePractitioner(@PathVariable Long id) {
        service.deletePractitioner(id);
        return ResponseEntity.noContent().build();
    }
}