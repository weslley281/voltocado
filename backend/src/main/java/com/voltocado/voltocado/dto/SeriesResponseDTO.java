package com.voltocado.voltocado.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SeriesResponseDTO {
    private Double equivalentResistance;

    public SeriesResponseDTO(Double equivalentResistance) {
        this.equivalentResistance = equivalentResistance;
    }
}