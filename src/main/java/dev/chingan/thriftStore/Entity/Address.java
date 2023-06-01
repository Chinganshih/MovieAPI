package dev.chingan.thriftStore.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Builder
@Setter
@Getter
@AllArgsConstructor
public class Address{
    
    private String country;
    private String street;
    private String city;
    private String zip;


}