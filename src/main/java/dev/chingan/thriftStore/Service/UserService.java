package dev.chingan.thriftStore.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.chingan.thriftStore.Entity.User;
import dev.chingan.thriftStore.Repo.UserRepo;

@Service
public class UserService {
    
    @Autowired UserRepo userRepo;


    public List<User> allUsers(){
        return userRepo.findAll();
    }

    public Optional<User> singleUser(String email){
        return userRepo.findByEmail(email);
    }

    
}
