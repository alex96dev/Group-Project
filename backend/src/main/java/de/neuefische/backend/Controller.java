package de.neuefische.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class Controller {

    private final Service s;


    @GetMapping
    public List<PokemonComplete> getAllPokemons() {
        return s.allPokemons();
    }

    /*@GetMapping("/{id}")
    public Pokemon getPokemonDetailsById(@PathVariable String id){
        return s.getPokemonDetailsById(id);
    }*/

}
