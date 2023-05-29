package dev.chingan.movies.Service;

import dev.chingan.movies.Entity.Cloth;
import dev.chingan.movies.Repo.ClothRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClothService {

    @Autowired
    private ClothRepo clothRepo;

    public List<Cloth> allClothes(){
        return clothRepo.findAll();
    }


    public Optional<Cloth> singleCloth(String imdbId) {
        return clothRepo.findByImdbId(imdbId);
    }
}
