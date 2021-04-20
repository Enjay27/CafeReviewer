package com.cafereviewer.cafelover.entity.member;

import com.cafereviewer.cafelover.entity.BaseEntity;
import com.cafereviewer.cafelover.entity.collection.Collection;
import com.cafereviewer.cafelover.entity.review.Review;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Member extends BaseEntity {

    @Id
    @GeneratedValue
    @Column(name = "member_id")
    Long id;

    @OneToMany(mappedBy = "member")
    List<Review> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    List<Collection> collections = new ArrayList<>();

    @NotEmpty
    String login_id;
    @NotEmpty
    String password;

    String name;
    String address;
    String phoneNumber;
    String email;
    String birthday;

    @Enumerated(EnumType.STRING)
    MemberStatus status;

    @Enumerated(EnumType.STRING)
    MemberType type;
}
