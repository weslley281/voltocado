package com.voltocado.voltocado.controller;

import com.voltocado.voltocado.dto.SeriesRequestDTO;
import com.voltocado.voltocado.dto.SeriesResponseDTO;
import com.voltocado.voltocado.service.SeriesService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/serie")
public class SeriesController {

    private final SeriesService seriesService;

    public SeriesController(SeriesService seriesService) {
        this.seriesService = seriesService;
    }

    @PostMapping
    public ResponseEntity<SeriesResponseDTO> calculateSeries(
            @Valid @RequestBody SeriesRequestDTO request) {
        SeriesResponseDTO response = seriesService.calculate(request);
        return ResponseEntity.ok(response);
    }
}
