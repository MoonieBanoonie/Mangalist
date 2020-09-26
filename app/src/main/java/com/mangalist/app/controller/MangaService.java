package com.mangalist.app.controller;

import com.mangalist.app.model.Manga;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class MangaService {

    @Autowired
    MangaRepository mangaRepository;

    public Manga addManga(Manga manga) {
        System.out.println("manga toegevoegd");
        return mangaRepository.save(manga);
    }

    public Iterable<Manga> getAllManga() {
        System.out.println("alle mangas opgehaald");
        return mangaRepository.findAll();
    }

    public void deleteManga(long id) {
        System.out.println("manga verwijderd");
        mangaRepository.deleteById(id);
    }

    public Manga getMangaById(long id) {
        System.out.println("manga opgehaald");
        return mangaRepository.findById(id).get();

    }

    public Manga updateManga(long id, Manga manga) {
        Manga newManga = mangaRepository.findById(id).get();
        if(manga.getCurrentChapter() != 0){
            newManga.setCurrentChapter(manga.getCurrentChapter());
        }
        newManga.setLink(manga.getLink());
        newManga.setStatus(manga.getStatus());
        System.out.println("manga aangepast");
        return mangaRepository.save(newManga);

    }

}

