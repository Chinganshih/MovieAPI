package dev.chingan.thriftStore.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Document(collection= "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    private ObjectId id;
    private String email;
    private String firstName;
    private String lastName;
    private String hashedPwd;
    private ShippingAddress shippingAddress;
    private Address address;
    private String phone;
    // private Collection<Role> roles;



}

