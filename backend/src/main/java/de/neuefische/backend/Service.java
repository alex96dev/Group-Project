package de.neuefische.backend;

import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;


@org.springframework.stereotype.Service

public class Service {

    ArrayList<PokemonComplete> finalPokemons = new ArrayList<>();

    public List<PokemonComplete> allPokemons() {
        WebClient PokemonWebClient = WebClient.create("https://pokeapi.co/api/v2");


        Random random = new Random();

        for (int i = 0; i < 2; i++) {
            int n = random.nextInt(1010);
            n += 1;

            finalPokemons.add(PokemonWebClient
                    .get()
                    .uri("/pokemon/" + n)
                    .retrieve()
                    .toEntity(PokemonComplete.class)
                    .block()
                    .getBody());
        }

        int r1 = random.nextInt(100);
        r1 += 1;
        int r2 = random.nextInt(100);
        r2 += 1;

        finalPokemons.get(0).setPower(r1);
        finalPokemons.get(1).setPower(r2);

        return finalPokemons;

    }

    public boolean getWinnerOfATrickAsBoolean() {
        if (finalPokemons.get(0).getPower() > finalPokemons.get(1).getPower()) {
            return true;
        }
        return false;
    }


}
