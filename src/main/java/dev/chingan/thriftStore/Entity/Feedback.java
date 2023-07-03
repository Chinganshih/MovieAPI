package dev.chingan.thriftStore.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "feedback")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Feedback {
    
    @Id
    private ObjectId id;

    @Field("username")
    private String username;

    @Field("phone")
    private String phone;

    @Field("email")
    private String email;

    @Field("msg")
    private String msg;
}
