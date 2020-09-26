package com.mangalist.app.rest;

import com.mangalist.app.controller.MangaService;
import com.mangalist.app.model.Manga;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
@RequestMapping("api/manga")
public class MangaEndpoint {
    @Autowired
    MangaService mangaService;


    @PostMapping("/add")
    public Manga addManga(@RequestBody Manga manga){
        return mangaService.addManga(manga);
    }

    @GetMapping("/showall")
    public Iterable<Manga> getAllManga(){
        return mangaService.getAllManga();
    }

    @GetMapping("/showmanga/{id}")
    public Manga getMangaById(@PathVariable(value="id")long id){
        return mangaService.getMangaById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteManga(@PathVariable(value = "id")long id){
        mangaService.deleteManga(id);
    }

    @PutMapping("/update/{id}")
    public Manga updateManga(@PathVariable(value="id")long id, @RequestBody Manga manga){
         return mangaService.updateManga(id ,manga);
    }
}
