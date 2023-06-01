package dev.chingan.thriftStore.Repo;

import dev.chingan.thriftStore.Entity.Review;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseBody;

@Repository
public interface ReviewRepo extends MongoRepository<Review, ObjectId> {
}
