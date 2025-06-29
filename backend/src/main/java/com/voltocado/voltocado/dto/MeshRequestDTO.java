package com.voltocado.voltocado.dto;

import lombok.Data;

@Data
public class MeshRequestDTO {
    private double[][] coeficientes; // Matriz A
    private double[] fontes;         // Vetor B
}
