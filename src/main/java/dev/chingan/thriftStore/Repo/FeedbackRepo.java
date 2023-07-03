package dev.chingan.thriftStore.Repo;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import dev.chingan.thriftStore.Entity.Feedback;

public interface FeedbackRepo extends MongoRepository<Feedback, ObjectId>{
    
    
}
