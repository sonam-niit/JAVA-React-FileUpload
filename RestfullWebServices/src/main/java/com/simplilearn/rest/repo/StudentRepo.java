package com.simplilearn.rest.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.rest.entity.Student;

@Repository
public interface StudentRepo extends JpaRepository<Student, Integer>{

}
