package com.voltocado.voltocado.util;

import com.voltocado.voltocado.exception.InvalidInputException;

public class MatrixSolver {

    public static double[] solveLinearSystem(double[][] A, double[] B) {
        int n = A.length;

        // Verificações básicas
        if (A.length != B.length || A[0].length != B.length) {
            throw new InvalidInputException("Matriz e vetor não possuem dimensões compatíveis.");
        }

        // Clonando para não modificar original
        double[][] matriz = new double[n][n];
        double[] vetor = new double[n];
        for (int i = 0; i < n; i++) {
            vetor[i] = B[i];
            for (int j = 0; j < n; j++) {
                matriz[i][j] = A[i][j];
            }
        }

        // Eliminação de Gauss
        for (int i = 0; i < n; i++) {
            if (matriz[i][i] == 0) throw new InvalidInputException("Sistema com zero na diagonal. Reorganize as equações.");

            for (int j = i + 1; j < n; j++) {
                double fator = matriz[j][i] / matriz[i][i];
                for (int k = i; k < n; k++) {
                    matriz[j][k] -= fator * matriz[i][k];
                }
                vetor[j] -= fator * vetor[i];
            }
        }

        // Substituição regressiva
        double[] resultado = new double[n];
        for (int i = n - 1; i >= 0; i--) {
            double soma = 0;
            for (int j = i + 1; j < n; j++) {
                soma += matriz[i][j] * resultado[j];
            }
            resultado[i] = (vetor[i] - soma) / matriz[i][i];
        }

        return resultado;
    }
}
