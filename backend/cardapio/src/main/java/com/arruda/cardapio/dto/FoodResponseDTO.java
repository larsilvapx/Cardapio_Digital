package com.arruda.cardapio.dto;

import com.arruda.cardapio.entity.Food;

public record FoodResponseDTO(Long id, String title, String name, String image, Double price) {

    public FoodResponseDTO(Food food) {
        this(food.getId(), food.getTitle(), food.getName(), food.getImage(), food.getPrice());

}


}
