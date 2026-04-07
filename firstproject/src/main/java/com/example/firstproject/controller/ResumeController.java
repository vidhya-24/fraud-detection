package com.example.firstproject.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

@RestController
@CrossOrigin("*")
public class ResumeController {

    @PostMapping("/upload")
    public Map<String, Object> analyzeResume(@RequestParam("resume") MultipartFile file) {

        int score = new Random().nextInt(100);

        List<String> reasons = new ArrayList<>();

        if(score > 60){
            reasons.add("Too many repeated keywords");
            reasons.add("Unrealistic experience");
        } else {
            reasons.add("Resume looks genuine");
        }

        Map<String, Object> response = new HashMap<>();
        response.put("score", score);
        response.put("reasons", reasons);

        return response;
    }
}