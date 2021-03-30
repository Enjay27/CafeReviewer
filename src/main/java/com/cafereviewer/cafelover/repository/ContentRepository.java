package com.cafereviewer.cafelover.repository;

import com.cafereviewer.cafelover.entity.content.Content;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentRepository extends JpaRepository<Content, Long> {
}
