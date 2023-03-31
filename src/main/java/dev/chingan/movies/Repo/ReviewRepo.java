package dev.chingan.movies.Repo;

import dev.chingan.movies.Entity.Review;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseBody;

@Repository
public interface ReviewRepo extends MongoRepository<Review, ObjectId> {
}
