create table if not exists mayors (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    cities_id INT UNSIGNED,
    PRIMARY KEY (id),
    unique key (cities_id),
    FOREIGN KEY (cities_id) REFERENCES cities (id)
);