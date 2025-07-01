package com.voltocado.voltocado.controller;

import com.voltocado.voltocado.dto.ParallelRequestDTO;
import com.voltocado.voltocado.dto.ParallelResponseDTO;
import com.voltocado.voltocado.service.ParallelService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/paralelo")
public class ParallelController {

    private final ParallelService parallelService;

    public ParallelController(ParallelService parallelService) {
        this.parallelService = parallelService;
    }

    @PostMapping
    public ResponseEntity<ParallelResponseDTO> calculateParallel(
            @Valid @RequestBody ParallelRequestDTO request) {
        ParallelResponseDTO response = parallelService.calculate(request);
        return ResponseEntity.ok(response);
    }
}