package com.arruda.cardapio.entity;

import com.arruda.cardapio.dto.FoodRequestDTO;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@Table(name = "food")
@Entity(name = "food")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of="id")
public class Food {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String name;

    private String image;

    private Double price;

    public Food(FoodRequestDTO data){
        this.image = data.image();
        this.price = data.price();
        this.title = data.title();
    }

}
