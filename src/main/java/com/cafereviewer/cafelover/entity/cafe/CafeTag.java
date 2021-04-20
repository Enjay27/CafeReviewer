package com.cafereviewer.cafelover.entity.cafe;

import javax.persistence.*;

@Entity
public class CafeTag {

    @GeneratedValue
    @Id
    @Column(name = "cafe_tag_id")
    Long id;

    @ManyToOne
    @JoinColumn(name = "tag_id")
    Tag tag;

    @ManyToOne
    @JoinColumn(name = "cafe_id")
    Cafe cafe;
}
