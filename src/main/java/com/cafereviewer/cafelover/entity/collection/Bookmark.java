package com.cafereviewer.cafelover.entity.collection;

import javax.persistence.*;

@Entity
public class Bookmark {

    @Id
    @GeneratedValue
    @Column(name = "bookmark_id")
    Long id;

    @ManyToOne
    @JoinColumn(name = "collection_id")
    Collection collection;
}
