package com.example.urlshortener.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.urlshortener.model.Url;

public interface UrlRepository extends JpaRepository<Url, Long>{


	 // Find URL by its shortUrl
    Url findByShortUrl(String shortUrl);
}
