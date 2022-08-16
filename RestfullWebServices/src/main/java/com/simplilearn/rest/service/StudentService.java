package com.simplilearn.rest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.rest.entity.Student;
import com.simplilearn.rest.repo.StudentRepo;

@Service
public class StudentService {

	@Autowired
	private StudentRepo repo;
	
	public Student addStudent(Student student) {
		return repo.save(student);
	}
}
