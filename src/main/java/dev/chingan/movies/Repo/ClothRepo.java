
package dev.chingan.movies.Repo;

import dev.chingan.movies.Entity.Cloth;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClothRepo extends MongoRepository<Cloth, ObjectId> {

    Optional<Cloth> findByImdbId(String imdbId);
}
