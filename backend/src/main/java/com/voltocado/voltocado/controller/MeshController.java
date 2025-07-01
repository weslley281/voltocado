package com.voltocado.voltocado.controller;

import com.voltocado.voltocado.dto.MeshRequestDTO;
import com.voltocado.voltocado.dto.MeshResponseDTO;
import com.voltocado.voltocado.service.MeshService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/malhas")
public class MeshController {

    @Autowired
    private MeshService meshService;

    @PostMapping
    public ResponseEntity<MeshResponseDTO> calcular(@RequestBody @Valid MeshRequestDTO dto) {
        MeshResponseDTO resposta = meshService.calcularCorrentes(dto);
        return ResponseEntity.ok(resposta);
    }
}