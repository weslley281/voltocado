package com.voltocado.voltocado.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // necessário para APIs REST
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/**").authenticated() // exige autenticação
                        .anyRequest().permitAll()
                )
                .httpBasic(Customizer.withDefaults()); // habilita auth Basic

        return http.build();
    }
}

