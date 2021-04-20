package com.cafereviewer.cafelover.entity.collection;

import com.cafereviewer.cafelover.entity.member.Member;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Collection {

    @Id
    @GeneratedValue
    @Column(name = "collection_id")
    Long id;

    @ManyToOne
    @JoinColumn(name = "member_id")
    Member member;

    @OneToMany(mappedBy = "collection")
    List<Bookmark> bookmarks = new ArrayList<>();

}
