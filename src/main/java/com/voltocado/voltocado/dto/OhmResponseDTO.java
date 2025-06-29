package com.voltocado.voltocado.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class OhmResponseDTO {
    private Double tensao;
    private Double corrente;
    private Double resistencia;
}

