package de.neuefische.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class Controller {

    private final Service s;

    @GetMapping
    public List<PokemonComplete> getAllPokemons() {
        return s.allPokemons();
    }

    @GetMapping("/calc")
    public boolean getCalc(){
        return s.getWinnerOfATrickAsBoolean();
    }

}

