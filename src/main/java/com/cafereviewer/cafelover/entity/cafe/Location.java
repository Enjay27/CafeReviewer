package com.cafereviewer.cafelover.entity.cafe;

import javax.persistence.Embeddable;

@Embeddable
public class Location {
    String zipcode;
    String street;
    String city;
}
