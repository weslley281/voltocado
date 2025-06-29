package com.voltocado.voltocado.service;

import com.voltocado.voltocado.dto.MeshRequestDTO;
import com.voltocado.voltocado.dto.MeshResponseDTO;
import com.voltocado.voltocado.exception.InvalidInputException;
import com.voltocado.voltocado.util.MatrixSolver;
import org.springframework.stereotype.Service;

@Service
public class MeshService {

    public MeshResponseDTO calcularCorrentes(MeshRequestDTO request) {
        double[][] A = request.getCoeficientes();
        double[] B = request.getFontes();

        if (A == null || B == null || A.length != B.length) {
            throw new InvalidInputException("Dimensões inconsistentes nas equações do sistema.");
        }

        double[] resultado = MatrixSolver.solveLinearSystem(A, B);
        return new MeshResponseDTO(resultado);
    }
}

