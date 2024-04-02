package com.spooderportfolio.demo.Model;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.DynamicInsert;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Setter
@Getter
@Data
@DynamicInsert
@NoArgsConstructor
@Table(name="Projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(length = 65555)
    private byte[] image;

    @Column(nullable = false)
    private String title;

    private String category;

    private String date;

    private String github_link;

    private String project_link;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Teammate> teammates = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Stack> stacks = new ArrayList<>();

    private String description;

    private String content;
}
