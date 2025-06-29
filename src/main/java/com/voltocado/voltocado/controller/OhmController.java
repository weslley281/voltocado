package com.voltocado.voltocado.controller;

import com.voltocado.voltocado.dto.OhmRequestDTO;
import com.voltocado.voltocado.dto.OhmResponseDTO;
import com.voltocado.voltocado.service.OhmService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ohm")
public class OhmController {

    @Autowired
    private OhmService ohmService;

    @PostMapping
    public ResponseEntity<OhmResponseDTO> calcular(@RequestBody @Valid OhmRequestDTO dto) {
        OhmResponseDTO resposta = ohmService.calcular(dto);
        return ResponseEntity.ok(resposta);
    }
}
