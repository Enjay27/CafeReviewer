package com.cafereviewer.cafelover.entity.cafe;

import com.cafereviewer.cafelover.entity.member.Member;
import com.cafereviewer.cafelover.entity.owner.Owner;
import com.cafereviewer.cafelover.entity.review.Review;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Cafe {

    @GeneratedValue
    @Id
    @Column(name = "cafe_id")
    Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id")
    Owner owner;

    @OneToMany(mappedBy = "cafe")
    List<CafePhoto> photos = new ArrayList<>();

    @OneToMany(mappedBy = "cafe")
    List<Review> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "cafe")
    List<CafeTag> tags = new ArrayList<>();

    @OneToMany(mappedBy = "cafe")
    List<CafeMenu> menus = new ArrayList<>();

    String name;
    String content;
    int views;

    @Embedded
    Location location;

    @Enumerated
    CafeStatus status;
}
