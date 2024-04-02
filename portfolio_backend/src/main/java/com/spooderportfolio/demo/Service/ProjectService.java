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

import com.spooderportfolio.Util.ImageUtil;
import com.spooderportfolio.demo.Model.Project;
import com.spooderportfolio.demo.Repository.ProjectRepository;

import lombok.NonNull;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    private static final Logger logger = LoggerFactory.getLogger(ProjectService.class);

    public Project addProject(Project project, MultipartFile imageFile) {
        if (imageFile != null && !imageFile.isEmpty()) {
            try {
                project.setImage(ImageUtil.compressImage(imageFile.getBytes()));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        
        return projectRepository.save(project);
    }

    public void deleteProject(@NonNull Long id) {
        projectRepository.deleteById(id);
    }

    public Project getProjectById(@NonNull Long id) {
        Project project = projectRepository.findById(id).get();
        return project;
    }

    public Project getProjectByTitle(@NonNull String title) {
        return projectRepository.findByTitle(title);
    }

    public List<Project> getAllProject() {
        return projectRepository.findAll();
    }
}
