package com.cafereviewer.cafelover.entity.cafe;

import javax.persistence.*;

@Entity
public class CafeMenu {

    @GeneratedValue
    @Id
    @Column(name = "cafe_menu_id")
    Long id;

    @ManyToOne
    @JoinColumn(name = "cafe_id")
    Cafe cafe;

    String menu;
    int price;
}

