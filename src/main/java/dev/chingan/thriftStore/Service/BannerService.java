package dev.chingan.thriftStore.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.chingan.thriftStore.Entity.Banner;
import dev.chingan.thriftStore.Repo.BannerRepo;

@Service
public class BannerService {
    
    @Autowired BannerRepo bannerRepo;

    public Optional<Banner> byCategoryId(Integer categoryId){
        return bannerRepo.findByCategoryId(categoryId);
    }

}
