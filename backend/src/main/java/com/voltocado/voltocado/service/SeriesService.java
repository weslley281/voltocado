package com.voltocado.voltocado.service;

import com.voltocado.voltocado.dto.SeriesRequestDTO;
import com.voltocado.voltocado.dto.SeriesResponseDTO;
import com.voltocado.voltocado.exception.InvalidInputException;
import org.springframework.stereotype.Service;

@Service
public class SeriesService {

    public SeriesResponseDTO calculate(SeriesRequestDTO request) {
        if (request.getResistances().isEmpty()) {
            throw new InvalidInputException("Informe ao menos uma resistência.");
        }

        double sum = 0;
        for (Double r : request.getResistances()) {
            if (r == null || r < 0) {
                throw new InvalidInputException("Resistência inválida: " + r);
            }
            sum += r;
        }

        return new SeriesResponseDTO(sum);
    }
}