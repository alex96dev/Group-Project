FROM openjdk:17

LABEL authors="alexanderstracke"

EXPOSE 8080

ADD backend/target/pokemon_app.jar pokemon_app.jar

CMD [ "sh", "-c", "java -jar /pokemon_app.jar"]