package com.voltocado.voltocado.service;

import com.voltocado.voltocado.dto.ParallelRequestDTO;
import com.voltocado.voltocado.dto.ParallelResponseDTO;
import com.voltocado.voltocado.exception.InvalidInputException;
import org.springframework.stereotype.Service;

@Service
public class ParallelService {

    public ParallelResponseDTO calculate(ParallelRequestDTO request) {
        if (request.getResistances().isEmpty()) {
            throw new InvalidInputException("Informe ao menos uma resistência.");
        }

        double reciprocalSum = 0;
        for (Double r : request.getResistances()) {
            if (r == null || r <= 0) {
                throw new InvalidInputException("Resistência inválida: " + r);
            }
            reciprocalSum += 1.0 / r;
        }

        double equivalent = 1.0 / reciprocalSum;
        return new ParallelResponseDTO(equivalent);
    }
}