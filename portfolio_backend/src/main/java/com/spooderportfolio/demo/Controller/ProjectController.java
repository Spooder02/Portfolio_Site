package com.spooderportfolio.demo.Controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.spooderportfolio.demo.Model.Project;
import com.spooderportfolio.demo.Service.ProjectService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/projects")
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    private static final Logger logger = LoggerFactory.getLogger(ProjectController.class);

    @PostMapping
    public ResponseEntity<Project> addProject(@ModelAttribute Project project, @RequestPart(name = "imageFile", required = false) MultipartFile imageFile) {
        if (project == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        Project savedProject = projectService.addProject(project, imageFile);
        return new ResponseEntity<>(savedProject, HttpStatus.CREATED);
    }
    
    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAllProject();
    }
    
}
