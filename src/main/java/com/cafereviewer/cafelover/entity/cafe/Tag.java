package com.cafereviewer.cafelover.entity.cafe;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Tag {

    @GeneratedValue
    @Id
    @Column(name = "tag_id")
    Long id;

    String tag;
}
