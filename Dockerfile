FROM openjdk:17

LABEL authors="alexanderstracke"

EXPOSE 8080

ADD backend/target/pokemon.jar pokemon.jar

CMD [ "sh", "-c", "java -jar /pokemon.jar"]