-- Creating state table!

create table states (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    initials VARCHAR(2) NOT NULL,
    region ENUM('North', 'Northeast', 'Midwest', 'Southeast', 'South') NOT NULL,
    population DECIMAL(5,2) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (name),
    UNIQUE KEY (initials)
);