package com.voltocado.voltocado.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ParallelResponseDTO {
    private Double equivalentResistance;

    public ParallelResponseDTO(Double equivalentResistance) {
        this.equivalentResistance = equivalentResistance;
    }
}