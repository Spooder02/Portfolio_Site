package com.spooderportfolio.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spooderportfolio.demo.Model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

}
