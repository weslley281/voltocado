package com.voltocado.voltocado.dto;

import lombok.Data;

@Data
public class OhmRequestDTO {
    private Double tensao;      // V
    private Double corrente;    // A
    private Double resistencia; // Ohm
}

