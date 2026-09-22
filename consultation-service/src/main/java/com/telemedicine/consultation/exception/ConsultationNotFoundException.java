package com.telemedicine.consultation.exception;

public class ConsultationNotFoundException extends RuntimeException {

    public ConsultationNotFoundException(String message) {
        super(message);
    }
}