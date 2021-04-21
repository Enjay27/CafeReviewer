package com.cafereviewer.cafelover.repository;

import com.cafereviewer.cafelover.entity.review.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReplyRepository extends JpaRepository<Review, Long> {
}
