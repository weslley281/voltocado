package com.voltocado.voltocado.model;

import java.util.Arrays;

public class EquationSystem {

    private double[][] coeficientes;
    private double[] fontes;

    public EquationSystem(double[][] coeficientes, double[] fontes) {
        this.coeficientes = coeficientes;
        this.fontes = fontes;
    }

    public double[][] getCoeficientes() {
        return coeficientes;
    }

    public double[] getFontes() {
        return fontes;
    }

    public int getOrdem() {
        return coeficientes.length;
    }

    @Override
    public String toString() {
        return "Sistema{" +
                "coeficientes=" + Arrays.deepToString(coeficientes) +
                ", fontes=" + Arrays.toString(fontes) +
                '}';
    }
}

