package com.voltocado.voltocado.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MeshResponseDTO {
    private double[] correntes; // Soluções para I1, I2, ...
}