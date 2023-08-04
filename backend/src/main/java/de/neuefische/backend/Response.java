package de.neuefische.backend;

import lombok.Data;

import java.util.List;

@Data
public class Response {
    private List<Pokemon> results;

}
