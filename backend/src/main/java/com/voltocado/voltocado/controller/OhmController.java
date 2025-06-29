package com.voltocado.voltocado.controller;

import com.fasterxml.jackson.annotation.JsonAlias;
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

    @GetMapping
    public ResponseEntity<?> inicial() {
        return ResponseEntity.ok().body(
            java.util.Map.of("message", "API Ohm está funcionando", 
                             "status", "OK", 
                             "version", "1.0.0"
                             )
        );
    }
}
