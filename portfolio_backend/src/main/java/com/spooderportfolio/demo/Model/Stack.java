package com.spooderportfolio.demo.Model;

import org.hibernate.annotations.DynamicInsert;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@DynamicInsert
@NoArgsConstructor
@Table(name = "Stack")
public class Stack {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long stack_id;

    private String stack_name;
}
