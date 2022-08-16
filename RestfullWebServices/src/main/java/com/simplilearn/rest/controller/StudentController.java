package com.simplilearn.rest.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.simplilearn.rest.entity.Student;
import com.simplilearn.rest.service.StudentService;

@RestController
@RequestMapping("/api/student")
public class StudentController {

	@Autowired
	private StudentService service;
	@Autowired
	private ObjectMapper mapper;
	
	private static String UPLOADED_FOLDER = "D://incoming-files//";
	
	@PostMapping(value="",consumes = {MediaType.APPLICATION_JSON_VALUE,
			MediaType.MULTIPART_FORM_DATA_VALUE})
	public ResponseEntity<Object> saveStudent(@RequestParam("model") String model, 
			@RequestParam(value = "file", required = false) MultipartFile file) 
					throws JsonMappingException, JsonProcessingException{
		
		Student student = mapper.readValue(model, Student.class);
		try {

            // Get the file and save it somewhere
            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
            Files.write(path, bytes);

            student.setPhotourl(path.toString());

        } catch (IOException e) {
            e.printStackTrace();
        }
		
		Student uploaded=service.addStudent(student);
		if(uploaded!=null)
			return new ResponseEntity<>(uploaded,HttpStatus.CREATED);
		else
			return new ResponseEntity<>("Error while storing data",HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
