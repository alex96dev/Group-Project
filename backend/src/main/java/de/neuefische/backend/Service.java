package de.neuefische.backend;

import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@org.springframework.stereotype.Service

public class Service {
    public List<Pokemon> allPokemons(){
        WebClient rickAndMortyWebClient = WebClient.create("https://pokeapi.co/api/v2");

        Response response = rickAndMortyWebClient
                .get()
                .uri("/pokemon/?limit=30&offset=30")
                .retrieve()
                .toEntity(Response.class)
                .block()
                .getBody();

        return response.getResults();

    }

}
