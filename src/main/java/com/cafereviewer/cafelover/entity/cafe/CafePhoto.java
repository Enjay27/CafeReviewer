package com.cafereviewer.cafelover.entity.cafe;

import javax.persistence.*;

@Entity
public class CafePhoto {

    @GeneratedValue
    @Id
    @Column(name = "cafe_photo_id")
    Long id;

    @ManyToOne
    @JoinColumn(name = "cafe_id")
    Cafe cafe;

    String photo;
}
