package de.neuefische.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PokemonComplete {
    private int id;
    private String name;
    private Sprites sprites;
    private int power = 0;

}
