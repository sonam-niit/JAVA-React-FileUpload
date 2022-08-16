package com.simplilearn.rest;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
	public class MyCrossOriginConfiguration 
	{
	    @Bean
	    public WebMvcConfigurer corsConfigurer() 
	    {
	        return new WebMvcConfigurer() {
	            @Override
	            public void addCorsMappings(CorsRegistry registry) {
	                registry.addMapping("/api/**")
	                .allowedOrigins("http://localhost:3000")
	                .allowedMethods("GET","POST","PUT","DELETE")
	                .allowedHeaders("Access-Control-Allow-Origin", "*");
	              
	            }
	        };
	    }
	}