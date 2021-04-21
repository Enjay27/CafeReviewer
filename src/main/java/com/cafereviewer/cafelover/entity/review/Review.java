package com.cafereviewer.cafelover.entity.review;

import com.cafereviewer.cafelover.entity.cafe.Cafe;
import com.cafereviewer.cafelover.entity.member.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Review {

    @GeneratedValue
    @Id
    @Column(name = "reply_id")
    Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cafe_id")
    Cafe cafe;

    @OneToMany(mappedBy = "review")
    List<ReviewPhoto> photos = new ArrayList<>();

    String comment;
    Float rate;

    @Enumerated(EnumType.STRING)
    ReviewStatus status;
}
