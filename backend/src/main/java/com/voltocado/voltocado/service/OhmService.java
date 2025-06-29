package com.voltocado.voltocado.service;

import com.voltocado.voltocado.dto.OhmRequestDTO;
import com.voltocado.voltocado.dto.OhmResponseDTO;
import com.voltocado.voltocado.exception.InvalidInputException;
import org.springframework.stereotype.Service;

@Service
public class OhmService {

    public OhmResponseDTO calcular(OhmRequestDTO request) {
        Double tensao = request.getTensao();
        Double corrente = request.getCorrente();
        Double resistencia = request.getResistencia();
        Double potencia = (double) 0;

        int informados = 0;
        if (tensao != null) informados++;
        if (corrente != null) informados++;
        if (resistencia != null) informados++;

        if (informados < 2) {
            throw new InvalidInputException("Informe pelo menos dois valores.");
        }

        if (tensao == null) {
            tensao = corrente * resistencia;
        } else if (corrente == null) {
            corrente = tensao / resistencia;
        } else if (resistencia == null) {
            resistencia = tensao / corrente;
        }

        potencia = tensao * corrente;

        return new OhmResponseDTO(tensao, corrente, resistencia, potencia);
    }
}
