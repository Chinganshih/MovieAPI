package dev.chingan.thriftStore.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.chingan.thriftStore.Entity.Feedback;
import dev.chingan.thriftStore.Repo.FeedbackRepo;

@Service
public class FeedbackService {
    
    @Autowired FeedbackRepo feedFeedbackRepo;

    public List<Feedback> allFeedbacks(){
        return feedFeedbackRepo.findAll();
    }

    public Feedback createFeedback(Feedback feedback){
        feedFeedbackRepo.save(feedback);
        return feedback;
    }
}
