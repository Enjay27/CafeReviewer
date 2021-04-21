package com.cafereviewer.cafelover.entity.review;

import javax.persistence.*;

@Entity
public class ReviewPhoto {

    @GeneratedValue
    @Id
    @Column(name = "review_photo_id")
    Long id;

    @ManyToOne
    @JoinColumn(name = "review")
    Review review;

    String url;
    String comment;

}
