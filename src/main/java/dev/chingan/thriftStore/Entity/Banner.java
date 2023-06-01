package dev.chingan.thriftStore.Entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "banner")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Banner {
    
    @Id
    private ObjectId id;
    private String bannerId;
    private Integer categoryId;
    private String image;
}
