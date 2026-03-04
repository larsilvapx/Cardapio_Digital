package com.arruda.cardapio.controller;

import com.arruda.cardapio.dto.FoodResponseDTO;
import com.arruda.cardapio.entity.Food;
import com.arruda.cardapio.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/food")
@CrossOrigin(origins = "http://localhost:5173")
public class FoodController {

    @Autowired
    private FoodRepository foodRepository;

    private final String UPLOAD_DIR =
            System.getProperty("user.dir")
                    + "/uploads/images/";

    // =========================
    // POST - salvar comida
    // =========================
    @PostMapping(consumes = "multipart/form-data")
    public ResponseEntity<Void> saveFood(
            @RequestParam("title") String title,
            @RequestParam("price") Double price,
            @RequestParam("image") MultipartFile image
    ) throws IOException {

        // cria pasta se não existir
        File uploadDir = new File(UPLOAD_DIR);
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }

        String fileName =
                UUID.randomUUID() + "_" + image.getOriginalFilename();

        File destination = new File(uploadDir, fileName);
        image.transferTo(destination);

        Food food = new Food();
        food.setTitle(title);
        food.setPrice(price);

        // URL pública da imagem
        food.setImage("/images/" + fileName);

        foodRepository.save(food);

        return ResponseEntity.ok().build();
    }

    // =========================
    // GET - listar
    // =========================
    @GetMapping
    public List<FoodResponseDTO> getAll() {
        return foodRepository
                .findAll()
                .stream()
                .map(FoodResponseDTO::new)
                .toList();
    }
}