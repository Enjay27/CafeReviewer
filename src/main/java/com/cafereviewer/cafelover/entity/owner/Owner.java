package com.cafereviewer.cafelover.entity.owner;

import com.cafereviewer.cafelover.entity.cafe.Cafe;
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
public class Owner {

    @Id
    @GeneratedValue
    @Column(name = "owner_id")
    Long id;

    @OneToMany
    @JoinColumn(name = "owner_id")
    List<Cafe> cafes = new ArrayList<>();

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
    OwnerStatus status;
}
