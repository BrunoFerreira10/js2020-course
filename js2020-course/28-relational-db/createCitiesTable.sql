create table if not exists cities (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    state_id INT UNSIGNED NOT NULL,
    area DECIMAL (10,2),
    PRIMARY KEY (id),
    FOREIGN KEY (state_id) REFERENCES states (id)
);

create table if not exists test (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);

drop table if exists test;