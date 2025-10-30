package com.example.urlshortener.service;

import com.example.urlshortener.model.Url;
import com.example.urlshortener.repository.UrlRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class UrlService {

    @Autowired
    private UrlRepository urlRepository;

    private final String BASE_URL = "http://localhost:8080/";

    // Shorten a long URL
    public Url shortenUrl(String originalUrl) {
        String shortUrl = generateShortUrl();
        Url url = new Url(originalUrl, shortUrl);
        return urlRepository.save(url);
    }

    // Retrieve original URL, return null if not found
    public Url getOriginalUrl(String shortUrl) {
        return urlRepository.findByShortUrl(shortUrl);
    }

    // Generate a 6-character random short URL
    private String generateShortUrl() {
        String chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        StringBuilder sb = new StringBuilder();
        Random random = new Random();
        for(int i = 0; i < 6; i++) {
            sb.append(chars.charAt(random.nextInt(chars.length())));
        }
        return sb.toString();
    }
}
