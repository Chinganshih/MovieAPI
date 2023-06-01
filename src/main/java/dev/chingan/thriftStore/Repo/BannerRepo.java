package dev.chingan.thriftStore.Repo;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import dev.chingan.thriftStore.Entity.Banner;

@Repository
public interface BannerRepo extends MongoRepository<Banner, ObjectId> {

    Optional<Banner> findByCategoryId(Integer categoryId);

}
