package dev.chingan.movies.Controller;

import dev.chingan.movies.Entity.Review;
import dev.chingan.movies.Service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpHeaders;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/review")
@CrossOrigin(origins = "*")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload){
        org.springframework.http.HttpHeaders resHeaders = new org.springframework.http.HttpHeaders();
        resHeaders.set("Access-Control-Allow-Origin", "*");
        return new ResponseEntity<Review>(reviewService.createReview(payload.get("reviewBody"), payload.get("imdbId")), resHeaders, HttpStatus.CREATED);
    }
}
