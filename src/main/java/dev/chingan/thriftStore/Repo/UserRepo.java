package dev.chingan.thriftStore.Repo;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import dev.chingan.thriftStore.Entity.User;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepo extends MongoRepository<User, ObjectId> {

    Optional<User> findByEmail(String email);
    
}
