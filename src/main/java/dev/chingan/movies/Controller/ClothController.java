package dev.chingan.movies.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.chingan.movies.Entity.Cloth;
import dev.chingan.movies.Service.ClothService;

@RestController
@RequestMapping("/api/v1/cloth")
@CrossOrigin(origins = "*")
public class ClothController {
    
    @Autowired
    private ClothService clothService;

    @GetMapping
    public ResponseEntity<List<Cloth>> getAllClothes(){
        return new ResponseEntity<List<Cloth>>(clothService.allClothes(), HttpStatus.OK);
    }

    @GetMapping("/{imdbId}")
    public ResponseEntity<Optional<Cloth>> getSingleCloth (@PathVariable String imdbId){
        return new ResponseEntity<Optional<Cloth>>(clothService.singleCloth(imdbId), HttpStatus.OK);
    }
}
