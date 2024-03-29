package com.spooderportfolio.demo.Model;

import org.hibernate.annotations.DynamicInsert;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@DynamicInsert
@NoArgsConstructor
@Table(name = "Teammate")
public class Teammate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long teammate_id;

    private String name;

    private String part;
}
