package com.voltocado.voltocado.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ParallelRequestDTO {
    @NotNull(message = "A lista de resistências não pode ser nula.")
    @NotEmpty(message = "Informe ao menos uma resistência para calcular.")
    private List<@NotNull(message = "Resistência não pode ser nula.") Double> resistances;
}