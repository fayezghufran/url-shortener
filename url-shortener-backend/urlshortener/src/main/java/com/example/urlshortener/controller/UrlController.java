package com.example.urlshortener.controller;

import com.example.urlshortener.model.Url;
import com.example.urlshortener.service.UrlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class UrlController {

    @Autowired
    private UrlService urlService;

    // Shorten URL
    @PostMapping("/shorten")
    public Url shortenUrl(@RequestBody Url url) {
        return urlService.shortenUrl(url.getOriginalUrl());
    }

    // Redirect to original URL
    @GetMapping("/{shortUrl}")
    public RedirectView redirectToOriginal(@PathVariable String shortUrl) {
        Url url = urlService.getOriginalUrl(shortUrl);
        if(url != null) {
            return new RedirectView(url.getOriginalUrl());
        }
        // fallback to frontend home if not found
        return new RedirectView("http://localhost:5173");
    }
}
