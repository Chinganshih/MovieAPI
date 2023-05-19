package dev.chingan.movies.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Document(collection= "clothes")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cloth {

    @Id
    private ObjectId id;
    private String imdbId;
    private String title;
    private String brand;
    private String price;
    private String currency;
    private String poster;
    private List<String> backdrops;
    @DocumentReference
    private List<Review> reviewIds;
}

