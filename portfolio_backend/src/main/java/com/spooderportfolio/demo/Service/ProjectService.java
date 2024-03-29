package com.spooderportfolio.demo.Service;

import java.io.IOException;
import java.nio.file.*;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.spooderportfolio.demo.Model.Project;
import com.spooderportfolio.demo.Repository.ProjectRepository;

import lombok.NonNull;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    private static final Logger logger = LoggerFactory.getLogger(ProjectService.class);

    private final String imageDirectory = "portfolio_backend/image/";

    public Project addProject(Project project, MultipartFile imageFile) {
        if (imageFile != null && !imageFile.isEmpty()) {
            try {
                saveImage(imageFile);
                project.setImage(imageFile.getOriginalFilename());
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        
        return projectRepository.save(project);
    }

    public void deleteProject(@NonNull Long id) {
        projectRepository.deleteById(id);
    }

    public Optional<Project> getProjectById(@NonNull Long id) {
        return projectRepository.findById(id);
    }

    public List<Project> getAllProject() {
        return projectRepository.findAll();
    }

    public void saveImage(MultipartFile imageFile) throws IOException {
        Files.copy(imageFile.getInputStream(), Paths.get(imageDirectory, imageFile.getOriginalFilename()), StandardCopyOption.REPLACE_EXISTING);
    }
}
