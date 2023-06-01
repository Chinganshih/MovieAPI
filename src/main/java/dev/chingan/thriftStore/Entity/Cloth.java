package dev.chingan.thriftStore.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Document(collection= "products")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Cloth {

    @Id
    private ObjectId id;
    private String imdbId;
    private String title;
    private int categoryId;
    private String brand;
    private String price;
    private String currency;
    private String poster;
    private List<String> backdrops;
    private ItemDetail item_detail;

    @DocumentReference(lazy = true)
    private List<Review> reviewIds;
    
    
}

